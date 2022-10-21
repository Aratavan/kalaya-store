import { canBuy } from "@lib/util/can-buy";
import { formatVariantPrice, useCart } from "medusa-react";
import { findCheapestPrice } from "@lib/util/prices"
import isEqual from "lodash/isEqual"
import React, {
    createContext,
    useContext,
    useEffect,
    useMemo,
    useState
}
    from "react";
import { Product, Variant } from "types/medusa";
import { useStore } from "./store-context";

export interface ProductContext {
    formattedPrice: string
    quantity: number
    disabled: boolean
    inStock: boolean
    variant?: Variant
    maxQuantityMet: boolean
    options: Record<string, string>
    updateOptions: (options: Record<string, string>) => void
    increaseQuantity: () => void
    decreaseQuantity: () => void
    addToCart: () => void
    selectVariant: (item: Variant) => void
    selectedVariantId: string
}

interface ProductProviderProps {
    children?: React.ReactNode
    product: Product
}

const ProductActionContext = createContext<ProductContext | null>(null)

export const KalayaProductProvider = ({ product, children }: ProductProviderProps) => {

    const [quantity, setQuantity] = useState<number>(1)
    const [options, setOptions] = useState<Record<string, string>>({})
    const [maxQuantityMet, setMaxQuantityMet] = useState<boolean>(false)
    const [inStock, setInStock] = useState<boolean>(true)
    const [selectedVariantId, setVariant] = useState<string>("")

    const { addItem } = useStore()
    const { cart } = useCart()
    const { variants } = product

    useEffect(() => {

        // init the variant
        setVariant(product.variants[0].id)
        // initialize the option state
        const optionObj: Record<string, string> = {}
        for (const option of product.options) {
            Object.assign(optionObj, { [option.id]: undefined })
        }
        setOptions(optionObj)
    }, [product])

    const selectVariant = (variant: Variant) => {
        if(variant?.id) {
            setVariant(variant.id)
        }
    }


    // memoized record of the product's variants
    const variantRecord = useMemo(() => {
        const map: Record<string, Record<string, string>> = {}

        for (const variant of variants) {
            const tmp: Record<string, string> = {}

            for (const option of variant.options) {
                tmp[option.option_id] = option.value
            }

            map[variant.id] = tmp
        }

        return map
    }, [variants])

    // memoized function to check if the current options are a valid variant
    const variant = useMemo(() => {
        let variantId: string | undefined = undefined

        for (const key of Object.keys(variantRecord)) {
            if (isEqual(variantRecord[key], options)) {
                variantId = key
            }
        }

        return variants.find((v) => v.id === variantId)
    }, [options, variantRecord, variants])

    // if product only has one variant, then select it
    useEffect(() => {
        if (variants.length === 1) {
            setOptions(variantRecord[variants[0].id])
        }
    }, [variants, variantRecord])

    const disabled = useMemo(() => {
        return !variant
    }, [variant])

    // memoized function to get the price of the current variant
    const formattedPrice = useMemo(() => {
        if (variant && cart?.region) {
            return formatVariantPrice({ variant, region: cart.region })
        } else if (cart?.region) {
            return findCheapestPrice(variants, cart.region)
        } else {
            // if no variant is selected, or we couldn't find a price for the region/currency
            return "N/A"
        }
    }, [variant, variants, cart])

    useEffect(() => {
        if (variant) {
            setInStock(canBuy(variant))
        }
    }, [variant])

    const updateOptions = (update: Record<string, string>) => {
        setOptions({ ...options, ...update })
    }

    const addToCart = () => {
        if (selectedVariantId) {
            addItem({
                variantId: selectedVariantId,
                quantity,
            })
        }
    }

    const increaseQuantity = () => {
        const maxQuantity = variant?.inventory_quantity || 0

        if (maxQuantity > quantity + 1) {
            setQuantity(quantity + 1)
        } else {
            setMaxQuantityMet(true)
        }
    }

    const decreaseQuantity = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1)

            if (maxQuantityMet) {
                setMaxQuantityMet(false)
            }
        }
    }

    return (
        <ProductActionContext.Provider
            value={{
                quantity,
                maxQuantityMet,
                disabled,
                inStock,
                options,
                variant,
                addToCart,
                updateOptions,
                decreaseQuantity,
                increaseQuantity,
                formattedPrice,
                selectVariant,
                selectedVariantId
            }}
        >
            {children}
        </ProductActionContext.Provider>
    )

}

export const useProductActions = () => {
    const context = useContext(ProductActionContext)
    if (context === null) {
    //   throw new Error(
    //     "useProductActionContext must be used within a ProductActionProvider"
    //   )
    }
    return context
  }