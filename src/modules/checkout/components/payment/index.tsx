import { useCheckout } from "@lib/context/checkout-context"
import Alert from "@modules/common/icons/alert"
import { useEffect } from "react"

const Payment: React.FC = () => {
    const {
        cart,
        setPaymentSession,
        initPayment,
        onPaymentCompleted,
        sameAsBilling: { state: isSame },
    } = useCheckout()

    return (
        <>
            <div className="delivery-container my-8">
                <div className="address-header flex flex-row justify-between text-medium">
                    <div className="title font-bold text-large">
                        Payment
                    </div>
                </div>
                <div className="address-body flex flex-col font-nunito">
                    <div className=" flex flex-row justify-start items-center ml-4 mt-2 ">
                        <div className="w-[10px] h-[10px] rounded-full bg-black" >
                        </div>
                        <div className="pl-2">
                            Test payment using medusa-payment-manual
                        </div>
                    </div>
                    <div className="w-full mb-8">
                        <div className="flex flex-row ml-8">
                            <Alert size={16} className="text-yellow-700" />
                            <span className="text-small-regular text-yellow-700">
                                <span className="font-semibold">Attention:</span> For testing purposes
                                only.
                            </span>
                        </div>
                    </div>
                </div>
                <div className="flex flex-row justify-end">
                    <div onClick={onPaymentCompleted} className="button bg-logo text-white py-3 w-[320px] flex justify-center rounded font-nunito font-bold text-[24px]">
                        <button>Checkout</button>
                    </div>
                </div>
            </div>
        </>

    )

}

export default Payment