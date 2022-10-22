import { IS_BROWSER } from "@lib/constants";
import CheckoutTemplate from "@modules/checkout/templates";
import ProductFooter from "@modules/common/product-footer";
import Layout from "@modules/layout/templates";
import { useRouter } from "next/router";
import { ReactElement } from "react";
import { NextPageWithLayout, PrefetchedPageProps } from "types/global"

const Checkout: NextPageWithLayout<PrefetchedPageProps> = ({ notFound }) => {
    const { query, isFallback, replace } = useRouter()
    if (notFound) {
        if (IS_BROWSER) {
            replace("/404")
        }

        return <div></div>
    }
    return(
        <>
        <CheckoutTemplate/>
        <ProductFooter />
        </>
    )
}

Checkout.getLayout =(page: ReactElement) => {
    return <Layout>{page}</Layout>
}

export default Checkout

