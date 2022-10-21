import { useCart } from "medusa-react"
import Link from "next/link"

const Cart = () => {
    const { cart, totalItems } = useCart()
    return (
        <Link href="/my-cart">
            <div className="cart flex flex-col justify-center align-middle px-[15px] text-center">

                <div className="icon flex flex-wrow justify-center cursor-pointer">
                    <img src="./Cart.svg" alt="profile-image" className="w-8" />
                    <span className="badge" style={{ position: 'absolute', top: '48px', padding: '0px 10px 5px 10px', fontSize: 'small', borderRadius: '50%', background: '#9a3938', color: 'white', right: '90px' }}>
                        {totalItems}
                    </span>
                </div>
                <div className="label text-xsmall font-nunito">
                    Cart
                </div>
            </div>
        </Link>

    )
}

export default Cart