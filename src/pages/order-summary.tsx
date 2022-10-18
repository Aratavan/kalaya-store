import Layout from "@modules/layout/templates";
import OrderSummaryTemplate from "@modules/order-summary/templates";
import { ReactElement } from "react";
import { NextPageWithLayout } from "types/global";

const Checkout: NextPageWithLayout = () => {
    return(
        <>
            <OrderSummaryTemplate/>
        </>
    )
}

Checkout.getLayout =(page: ReactElement) => {
    return <Layout>{page}</Layout>
}

export default Checkout

