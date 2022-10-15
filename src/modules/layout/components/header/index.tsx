import Logo from "@modules/layout/components/logo"
import Ordertracker from "../order-tracker"
import ActionIcons from "../actions-icons"

const Header = () => {
    return (
        <div className="header bg-white px-[75px] flex justify-between">
            <Logo />
            <div className="flex flex-row">
                <Ordertracker />
                <ActionIcons />
            </div>
        </div>
    )

}

export default Header