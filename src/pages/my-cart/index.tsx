import Layout from "@modules/layout/templates";
import { ReactElement } from "react";
import { NextPageWithLayout } from "types/global";
import BreadCrumb from "@modules/common/breadcrumb";
import Line from "@modules/common/line"
import ProductCard from "@modules/cart/components/product-card";
import CheckoutCard from "@modules/checkout/components/checkout-card";
import { useCart, useMeCustomer } from "medusa-react";
import useEnrichedLineItems from "@lib/hooks/use-enrich-line-items";
import EmptyCartMessage from "@modules/cart/components/empty-cart-message";


const Mycart: NextPageWithLayout = () => {

    const { cart } = useCart()
    const { customer, isLoading } = useMeCustomer()
    const items = useEnrichedLineItems()

    if(!cart || cart?.items?.length < 1) {
        return <EmptyCartMessage/>
    }

    if (!cart || !cart?.id?.length || isLoading) {
        return (<div></div>)
    }
    return (
        <>
            <BreadCrumb />
            <Line />
            <div className="my-cart-container flex flex-row">
                <div className="section-left">
                    {
                        cart?.items.map((item) => {
                            return <ProductCard key={item.id}  region={cart?.region} item={item} />
                        }) 
                    }
                    
                </div>
                <div className="section-right flex flex-col w-[350px]">
                    <CheckoutCard region={cart?.region}  />
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