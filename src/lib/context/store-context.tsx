import { medusaClient } from "@lib/config";
import { Region } from "@medusajs/medusa";
import {
    useCart,
    useCreateLineItem,
    useDeleteLineItem,
    useUpdateCart,
    useUpdateLineItem
} from "medusa-react"
import React, { useEffect, useState } from "react";


interface VariantInfoProps {
    variantId: string
    quantity: number
}

interface LineInfoProps {
    lineId: string,
    quantity: number
}

interface StoreContext {
    countryCode: string | undefined
    setRegion: (regionId: string, countryCode: string) => void
    addItem: (item: VariantInfoProps) => void
    updateItem: (item: LineInfoProps) => void
    deleteItem: (lineId: string) => void
    resetCart: () => void
}

interface StoreProps {
    children: React.ReactNode
}

const KalayaStoreContext = React.createContext<StoreContext | null>(null) // null is the initial value of kalaya store object

export const useStore = () => {
    const context = React.useContext(KalayaStoreContext)
    if (context === null) {
        throw new Error("useStore must be used within a StoreProvider")
    }
    return context
}

const IS_SERVER = typeof window === "undefined"
const CART_KEY = "medusa_cart_id"

export const StoreProvider = ({ children }: StoreProps) => {
    const { cart, setCart, createCart, updateCart } = useCart()
    const [countryCode, setCountryCode] = useState<string | undefined>(undefined)
    const addLineItem = useCreateLineItem(cart?.id!)
    const removeLineItem = useDeleteLineItem(cart?.id!)
    const updateLineItem = useUpdateLineItem(cart?.id!)

    const storeRegion = (regionId: string, countryCode: string) => {
        if (!IS_SERVER) {
            localStorage.setItem(
                "medusa_region",
                JSON.stringify({ regionId, countryCode })
            )

            setCountryCode(countryCode)
        }
    }

    const getRegion = () => {
        if (!IS_SERVER) {
            const region = localStorage.getItem("medusa_region")
            if (region) {
                return JSON.parse(region) as { regionId: string, countryCode: string }
            }
        }
        return null
    }

    const storeCart = (id: string) => {
        if (!IS_SERVER) {
            localStorage.setItem(CART_KEY, id)
        }
    }

    const getCart = () => {
        if (!IS_SERVER) {
            return localStorage.getItem(CART_KEY)
        }
        return null
    }

    const deleteCart = () => {
        if (!IS_SERVER) {
            localStorage.removeItem(CART_KEY)
        }
    }

    useEffect(() => {
        if (!IS_SERVER) {
            const storedRegion = localStorage.getItem("medusa_region")
            if (storedRegion) {
                const { countryCode } = JSON.parse(storedRegion)
                setCountryCode(countryCode)
            }
        }
    }, [])

    const setRegion = async (regionId: string, countryCode: string) => {
        await updateCart.mutateAsync({
            region_id: regionId
        },
            {
                onSuccess: ({ cart }) => {
                    setCart(cart)
                    storeCart(cart.id)
                    storeRegion(regionId, countryCode)
                },
                onError: (error) => {
                    if (process.env.NODE_ENV === "development") {
                        console.error(error)
                      }
                }
            })
    }

    const ensureRegion = (region: Region) => {
        if (!IS_SERVER) {
            const { regionId, countryCode } = getRegion() || {
                regionId: region.id,
                countryCode: region.countries[0].iso_2
            }

            if (regionId! == region.id) {
                setRegion(region.id, countryCode)
            }

            storeRegion(region.id, countryCode)
            setCountryCode(countryCode)
        }
    }

    const createNewCart = async (regionId?: string) => {
        await createCart.mutateAsync(
            { region_id: regionId },
            {
                onSuccess: ({ cart }) => {
                    setCart(cart)
                    storeCart(cart.id)
                    ensureRegion(cart.region)

                },
                onError: (error) => {
                    if (process.env.NODE_ENV === "development") {
                        console.error(error)
                      }
                }
            }
        )
    }

    const resetCart = () => {
        deleteCart()
        const savedRegion = getRegion()

        createCart.mutate(
            { region_id: savedRegion?.regionId },
            {
                onSuccess: ({ cart }) => {
                    setCart(cart)
                    storeCart(cart.id)
                    ensureRegion(cart.region)
                },
                onError: (error) => {
                    if (process.env.NODE_ENV === "development") {
                        console.error(error)
                      }
                }
            }
        )
    }

    useEffect(() => {
        const ensureCart = async () => {
            const cartID = getCart()
            const region = getRegion()

            if(cartID === undefined){
                await createNewCart(region?.regionId)
            } else {
                if (cartID) {
                    const cartRes = await medusaClient.carts
                        .retrieve(cartID)
                        .then(({ cart }) => {
                            return cart
                        })
                        .catch(async (_) => {
                            return null
                        })
                    if (!cartRes || cartRes.completed_at) {
                        deleteCart()
                        await createNewCart(region?.regionId)
                        return
                    }
                    setCart(cartRes)
                    ensureRegion(cartRes.region)
                } else {
                    await createNewCart(region?.regionId)
                }
            }
        }

        if (!IS_SERVER && !cart?.id) {
            ensureCart()
        }

    }, [])


    const addItem = ({ variantId, quantity }: VariantInfoProps) => {
        addLineItem.mutate(
            { variant_id: variantId, quantity },
            {
                onSuccess: ({ cart }) => {
                    setCart(cart)
                    storeCart(cart.id)
                },
                onError: (error) => {
                    if (process.env.NODE_ENV === "development") {
                        console.error(error)
                      }
                }
            }
        )
    }

    const updateItem = ({ lineId, quantity }: LineInfoProps) => {
        updateLineItem.mutate(
            { lineId, quantity },
            {
                onSuccess: ({ cart }) => {
                    setCart(cart)
                    storeCart(cart.id)
                },
                onError: (error) => {
                    if (process.env.NODE_ENV === "development") {
                        console.error(error)
                      }
                }
            }
        )
    }

    const deleteItem = (lineId: string) => {
        removeLineItem.mutate(
            { lineId },
            {
                onSuccess: ({ cart }) => {
                    setCart(cart)
                    storeCart(cart.id)
                },
                onError: (error) => {
                    if (process.env.NODE_ENV === "development") {
                        console.error(error)
                      }
                }
            }
        )
    }




    return (
        <KalayaStoreContext.Provider
            value={{
                countryCode,
                setRegion,
                addItem,
                deleteItem,
                updateItem,
                resetCart
            }}
        >
            {children}
        </KalayaStoreContext.Provider>
    )
}

