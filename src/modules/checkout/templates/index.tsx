import ProductCard from "@modules/cart/components/product-card"
import BreadCrumb from "@modules/common/breadcrumb"
import Line from "@modules/common/line"
import BillingAddress from "../components/billing-address"
import BillForm from "../components/billing-form"
import CheckoutSummary from "../components/checkout-summary"
import Delivery from "../components/delivery"

const CheckoutTemplate = () => {

    return (
        <>
            <BreadCrumb />
            <Line />
            <div className="my-cart-container flex flex-row">
                <div className="section-left">
                    <div className="product-card">
                        <ProductCard />
                    </div>
                    {/* <BillForm /> */}
                    <div className="checkout-details ml-[75px] w-[85%]">
                        <BillingAddress/>
                        <Line />
                        <Delivery/>
                        <div className="continue-btn-container flex flex-row-reverse text-white ">
                            <div className="button bg-logo py-3 w-[320px] flex justify-center rounded font-nunito font-bold text-[24px]">
                                <button>Continue</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="section-right flex flex-col w-[350px]">
                    <CheckoutSummary />
                </div>
            </div>
        </>
    )

}

export default CheckoutTemplate