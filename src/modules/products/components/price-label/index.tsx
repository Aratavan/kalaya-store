import { useProductActions } from "@lib/context/product-context"
import useProductPrice from "@lib/hooks/use-product-price"
import { ProductTemplateProps } from "@modules/products/templates"
import { useMemo } from "react"

const PriceLabel: React.FC<ProductTemplateProps> = ({product}) => {

    const {variant} = useProductActions()

    const price = useProductPrice({ id: product.id, variantId: variant?.id })

    const selectedPrice = useMemo(() => {
        const { variantPrice, cheapestPrice } = price

        return variantPrice || cheapestPrice || null
    }, [price])

    return(
        <div className="product-price pt-5 pb-1 text-large text-logo ">{selectedPrice?.calculated_price }</div>
    )
}

export default PriceLabel