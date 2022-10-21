import BreadCrumb from "@modules/common/breadcrumb"
import Line from "@modules/common/line"
import ProductFooter from "@modules/common/product-footer"
import QuantityCounter from "@modules/common/quantity-counter"
import { medusaClient } from "@lib/config"
import { IS_BROWSER } from "@lib/constants"
import Layout from "@modules/layout/templates"
import ProductInfoTemplate from "@modules/products/templates"
import { useRouter } from "next/router"
import { ReactElement } from "react"
import { useQuery } from "react-query"
import { NextPageWithLayout, PrefetchedPageProps } from "types/global"


const fetchProduct = async (handle?: string) => {
    return await medusaClient.products
        .list()
        .then(({ products }) => {
            return products[0]
        })
            
}

const ProductDetails: NextPageWithLayout<PrefetchedPageProps> = ({ notFound }) => {

    const { query, isFallback, replace } = useRouter()
    const handle = typeof query.handle === "string" ? query.handle : ""

    const { data, isError, isLoading, isSuccess } = useQuery(
        [`get_product`],
        () => fetchProduct()
    )
    if (notFound) {
        if (IS_BROWSER) {
            replace("/404")
        }

        return <div></div>
    }

    if (isError) {
        replace("/404")
    }

    if(isLoading) {
        <div>Loading...</div>
    }

    if (isSuccess) {
        return (
            <>
            <ProductInfoTemplate product={data} />
            <ProductFooter />
            </>
        )
    }
    return <></>
}

ProductDetails.getLayout = (page: ReactElement) => {
    return <Layout> {page} </Layout>

}

export default ProductDetails;