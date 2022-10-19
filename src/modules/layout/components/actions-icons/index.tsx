import Account from "@modules/layout/components/account"
import Cart from "../cart"
import Wishlist from "../wishlist"

const ActionIcons = () => {
    return (
        <div className="action-icons flex flex-row text-black p-2">
            <Account/>
            <Wishlist/>
            <Cart/>
        </div>
    )
}

export default ActionIcons