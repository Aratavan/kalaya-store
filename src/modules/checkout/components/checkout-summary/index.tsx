const CheckoutSummary = ()=> {
    return (
        <div className="product-checkout-container mt-8 bg-[#f9f9f9] border rounded border-[#d0d0d0]">
            <div className="product-details flex flex-col font-nunito font-normal text-black1d  text-[15px] justify-between px-4 py-4 ">
                <div className="item flex flex-row justify-between  pb-2">
                    <span>Quantity</span>
                    <span>2</span>
                </div>
                <div className="item flex flex-row justify-between pb-2">
                    <span>Delivery Date</span>
                    <span>7/10/2022</span>
                </div>
                <div className="item flex flex-row justify-between pb-2">
                    <span>Discount code</span>
                    <span>Apply</span>
                </div>
                <div className="item flex flex-row justify-between pb-2">
                    <span>Subtotal</span>
                    <span>$65.94</span>
                </div>
                <div className="item flex flex-row justify-between pb-2">
                    <span>Delivery Charges</span>
                    <span>Free</span>
                </div>

            </div>
            <div className="product-total text-xxmedium font-nunito font-bold text-logo flex flex-row px-4 py-3 justify-between border-t border-greybf">
                <div className="label">
                    Total
                </div>
                <div className="price">
                    $ 21.98
                </div>

            </div>
        </div>
    )

}

export default CheckoutSummary