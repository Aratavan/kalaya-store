const CheckoutCard = () => {
    return (
        <div className="product-checkout-container mt-8 bg-[#f9f9f9] border rounded border-[#d0d0d0]">
            <div className="discount flex flex-row px-4 py-4 font-nunito">
                <div className="input container w-[200px] h-[50px] ">
                    <input className="w-full h-full text-small font-bold px-2 bg-white border border-greybf rounded focus:outline-none" placeholder="Discount Code "></input>
                </div>
                <div className="apply-btn flex flex-row justify-center items-center text-white text-[15px] font-bold px-7 py-3 bg-[#d9d9d9] rounded ml-6 uppercase">
                    <button className="uppercase">Apply</button>
                </div>
            </div>
            <div className="product-details flex flex-col font-nunito font-normal text-black1d  text-[15px] justify-between px-4 py-4 border-t border-greybf">
                <div className="item flex flex-row justify-between  pb-2">
                    <span>Quantity</span>
                    <span>2</span>
                </div>
                <div className="item flex flex-row justify-between pb-2">
                    <span>Subtotal</span>
                    <span>$21.98</span>
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
            <div className="p-4 border-t border-greybf">
                <button className="text-white bg-logo rounded w-[320px] h-[60] py-[13px]">Checkout</button>
            </div>
        </div>
    )

}

export default CheckoutCard