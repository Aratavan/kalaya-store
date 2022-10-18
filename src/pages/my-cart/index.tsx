import Layout from "@modules/layout/templates";
import { ReactElement } from "react";
import { NextPageWithLayout } from "types/global";
import BreadCrumb from "@modules/common/breadcrumb";
import Line from "@modules/common/line"
import ProductCard from "@modules/cart/components/product-card";
import CheckoutCard from "@modules/checkout/components/checkout-card";


const Mycart: NextPageWithLayout = () => {

    return (
        <>
            <BreadCrumb />
            <Line />
            <div className="my-cart-container flex flex-row">
                <div className="section-left">
                    <ProductCard />
                </div>
                <div className="section-right flex flex-col w-[350px]">
                    <CheckoutCard/>
                    <div className="font-nunito text-black10 text-xs font-bold py-4">
                    By clicking the button, you agree to the Terms of Service
                    As well as the Terms of Sale
                </div>
                </div>

            </div>
        </>
    )

}

Mycart.getLayout = (page: ReactElement) => {
    return (<Layout>{page}</Layout>)
}

export default Mycart;