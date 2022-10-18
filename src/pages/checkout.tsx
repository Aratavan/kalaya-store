import CheckoutTemplate from "@modules/checkout/templates";
import Layout from "@modules/layout/templates";
import { ReactElement } from "react";
import { NextPageWithLayout } from "types/global";

const Checkout: NextPageWithLayout = () => {
    return(
        <>
            <CheckoutTemplate/>
        </>
    )
}

Checkout.getLayout =(page: ReactElement) => {
    return <Layout>{page}</Layout>
}

export default Checkout

