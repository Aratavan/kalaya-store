import { handleError } from "@lib/util/handle-error"
import { formatAmount, useCart, useCartShippingOptions } from "medusa-react"
import { Cart } from "medusa-react/dist/types"
import { useEffect, useMemo } from "react"
import { RadioGroup } from "@headlessui/react"
import Spinner from "@modules/common/icons/spinner"
import Radio from "@modules/common/radio"
import clsx from "clsx"
import { ErrorMessage } from "@hookform/error-message"
import { Controller, useForm } from "react-hook-form"

type ShippingProps = {
    cart: Omit<Cart, "refundable_amount" | "refunded_total">
}
type ShippingOption = {
    value: string
    label: string
    price: string
}

type ShippingFormProps = {
    soId: string
}

const Delivery: React.FC<ShippingProps> = ({ cart }) => {
    const { addShippingMethod, setCart } = useCart()

    const {
        control,
        setError,
        formState: { errors },
    } = useForm<ShippingFormProps>({
        defaultValues: {
            soId: cart.shipping_methods?.[0]?.shipping_option_id,
        },
    })
    // Fetch shipping options
    const { shipping_options, refetch } = useCartShippingOptions(cart?.id, {
        enabled: !!cart?.id,
    })
    // Any time the cart changes we need to ensure that we are displaying valid shipping options
    useEffect(() => {
        const refetchShipping = async () => {
            await refetch()
        }

        refetchShipping()
    }, [cart, refetch])

    useEffect(() => {
        // addShippingMethod.mutate(
        //     { option_id: soId },
        //     {
        //         onSuccess: ({ cart }) => setCart(cart),
        //         onError: (error) =>
        //             handleError(error)
        //     }
        // )
    })

    const submitShippingOption = (soId: string) => {
        addShippingMethod.mutate(
            { option_id: soId },
            {
                onSuccess: ({ cart }) => {
                    setCart(cart)
                },
                onError: (error) =>
                    handleError(error)
            }
        )
    }

    const handleChange = (value: string, fn: (value: string) => void) => {
        submitShippingOption(value)
        fn(value)
    }

    // Memoized shipping method options
    const shippingMethods: ShippingOption[] = useMemo(() => {
        if (shipping_options && cart?.region) {
            return shipping_options?.map((option) => ({
                value: option.id,
                label: option.name,
                price: formatAmount({
                    amount: option.amount || 0,
                    region: cart.region,
                }),
            }))
        }

        return []
    }, [shipping_options, cart])
    return (
        // <div className="checkout-details ml-[75px] w-[85%]">
        <div className="delivery-container my-8">
            <div className="address-header flex flex-row justify-between text-medium">
                <div className="title font-bold text-large">
                    Delivery Method
                </div>
            </div>
            <div className="address-body flex flex-col">
                <Controller
                    name="soId"
                    control={control}
                    render={({ field: { value, onChange } }) => {
                        return (
                            <div>
                                <RadioGroup
                                    value={value}
                                    onChange={(value: string) => handleChange(value, onChange)}
                                >
                                    {shippingMethods && shippingMethods.length ? (
                                        shippingMethods.map((option) => {
                                            return (
                                                <RadioGroup.Option
                                                    key={option.value}
                                                    value={option.value}
                                                    className={clsx(
                                                        "flex items-center font-nunito text-xmedium justify-between text-small-regular cursor-pointer py-4 px-8",
                                                        {
                                                            "bg-gray-50": option.value === value,
                                                        }
                                                    )}
                                                >
                                                    <div className="flex items-center gap-x-4 ">
                                                        <div className="w-[5px]">
                                                            <Radio checked={value === option.value} />
                                                        </div>
                                                        <span className="text-base-regular text-xmedium ">
                                                            {option.label}
                                                        </span>
                                                    </div>
                                                    <span className="justify-self-end text-gray-700">
                                                        {option.price}
                                                    </span>
                                                </RadioGroup.Option>
                                            )
                                        })
                                    ) : (
                                        <div className="flex flex-col items-center justify-center px-4 py-8 text-gray-900">
                                            <Spinner />
                                        </div>
                                    )}
                                </RadioGroup>
                                <ErrorMessage
                                    errors={errors}
                                    name="soId"
                                    render={({ message }) => {
                                        return (
                                            <div className="pt-2 text-rose-500 text-small-regular">
                                                <span>{message}</span>
                                            </div>
                                        )
                                    }}
                                />
                            </div>
                        )
                    }}
                />
            </div>
        </div>
        // </div>
    )

}

export default Delivery