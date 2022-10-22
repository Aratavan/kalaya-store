import Link from "next/link"

const EmptyCartMessage = () => {
  return (
    <div className="px-8 py-24 flex flex-col justify-center items-center text-center font-nunito">
      <h1 className="text-xlarge font-nunito">Your cart is empty !</h1>
      <p className="text-medium mt-4 mb-6 max-w-[32rem]">
        You don&apos;t have anything in your cart. Let&apos;s change that, use
        the link below to start buying our product.
      </p>
      <button className="h-12 mt-7 px-6 font-semibold rounded-md text-white font-nunito" type="submit" style={{ background: '#9a3938' }}>
        <Link href="/product-details" >Explore Product</Link>
      </button>
    </div>
  )
}

export default EmptyCartMessage
