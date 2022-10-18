const Cart = () => {
    return (
        <div className="cart flex flex-col justify-center align-middle px-[15px] text-center">
            <div className="icon flex flex-wrow justify-center cursor-pointer">
                <img src="./Cart.svg" alt="profile-image" className="w-8" />
                <span className="badge" style={{ position: 'absolute', top: '48px', padding: '0px 5px 5px 5px', borderRadius: '50%', background: '#9a3938', color: 'white', right: '90px' }}>
                    3
                </span>
            </div>
            <div className="label text-xsmall font-nunito">
                Cart
            </div>
        </div>
    )
}

export default Cart