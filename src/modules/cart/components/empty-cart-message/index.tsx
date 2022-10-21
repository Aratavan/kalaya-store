import Link from "next/link"

const EmptyCartMessage = () => {
  return (
    <div className="bg-amber-100 px-8 py-24 flex flex-col justify-center items-center text-center">
      <h1 className="text-2xl-semi">Your cart is empty</h1>
      <p className="text-base-regular mt-4 mb-6 max-w-[32rem]">
        You don&apos;t have anything in your cart. Let&apos;s change that, use
        the link below to start buying our product.
      </p>
      <div>
        <Link href="/product-details">Go to product page</Link>
      </div>
    </div>
  )
}

export default EmptyCartMessage
