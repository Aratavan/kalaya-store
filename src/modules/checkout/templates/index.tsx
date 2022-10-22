import { CheckoutProvider, CheckoutProviderProps, useCheckout } from "@lib/context/checkout-context"
import EmptyCartMessage from "@modules/cart/components/empty-cart-message"
import ProductCard from "@modules/cart/components/product-card"
import BreadCrumb from "@modules/common/breadcrumb"
import Spinner from "@modules/common/icons/spinner"
import Line from "@modules/common/line"
import { useCart } from "medusa-react"
import BillForm from "../components/billing-form"
import CheckoutSummary from "../components/checkout-summary"

const CheckoutTemplate: React.FC<CheckoutProviderProps> = ({ children }) => {
    const { cart } = useCart()

    if (cart && cart?.items?.length < 1) {
        return <Spinner/>
    }

    const breadcrumbTitle = "Checkout"
    return (
        <>
            <CheckoutProvider>
                <BreadCrumb title={breadcrumbTitle} />
                <Line />
                <div className="my-cart-container flex flex-row">
                    <div className="section-left">
                        <div className="product-card">
                            {
                                cart?.items.map((item) => {
                                    return <ProductCard key={item.id} region={cart?.region} item={item} />
                                })
                            }
                        </div>
                        <BillForm />
                        {/* <div className="checkout-details ml-[75px] w-[85%]">
                            <BillingAddress />
                            <Line />
                            <Delivery />
                            <div className="continue-btn-container flex flex-row-reverse text-white ">
                                <div className="button bg-logo py-3 w-[320px] flex justify-center rounded font-nunito font-bold text-[24px]">
                                    <button>Continue</button>
                                </div>
                            </div>
                        </div> */}

                    </div>
                    <div className="section-right flex flex-col w-[350px]">
                        <CheckoutSummary />
                    </div>
                </div>
            </CheckoutProvider>
        </>
    )

}

export default CheckoutTemplate