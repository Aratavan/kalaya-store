import { medusaClient } from "@lib/config"
import { IS_BROWSER } from "@lib/constants"
import Spinner from "@modules/common/icons/spinner"
import ProductFooter from "@modules/common/product-footer"
import Layout from "@modules/layout/templates"
import OrderSummaryTemplate from "@modules/order-summary/templates"
import { GetStaticPaths, GetStaticProps } from "next"
import { useRouter } from "next/router"
import { ReactElement } from "react"
import { dehydrate, QueryClient, useQuery } from "react-query"
import { NextPageWithLayout } from "types/global"

const fetchOrder = async (id: string) => {
  return await medusaClient.orders.retrieve(id).then(({ order }) => order)
}

const Confirmed: NextPageWithLayout = () => {
  const router = useRouter()

  const id = typeof router.query?.id === "string" ? router.query.id : ""

  const { isSuccess, data, isLoading, isError } = useQuery(
    ["get_order_confirmed", id],
    () => fetchOrder(id),
    {
      enabled: id.length > 0,
      staleTime: Infinity,
    }
  )
  console.log(data)

  if (isLoading) {
    return <Spinner/>
  }

  if (isError) {
    if (IS_BROWSER) {
      router.replace("/404")
    }

    return <Spinner/>
  }

  if (isSuccess) {
    return (
      <>
        <OrderSummaryTemplate order={data}/>
        <ProductFooter />
      </>
    )
  }

  return <></>
}

Confirmed.getLayout = (page: ReactElement) => {
  return <Layout>{page}</Layout>
}

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [],
    fallback: "blocking",
  }
}

export const getStaticProps: GetStaticProps = async (context) => {
  const id = context.params?.id as string
  const queryClient = new QueryClient()

  await queryClient.prefetchQuery(["get_order_confirmed", id], () =>
    fetchOrder(id)
  )

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  }
}

export default Confirmed
