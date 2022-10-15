const Cart = () => {
    return (
        <div className="cart flex flex-col justify-center align-middle px-[10px]">
            <div className="icon flex flex-wrow justify-center">
                <img className="w-[33px] h-[33px]" src="/shopping-cart.svg"></img>
            </div>
            <div className="label text-xsmall flex justify-center flex-row">
                Cart
            </div>
        </div>
    )
}

export default Cart