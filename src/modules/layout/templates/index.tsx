import React from "react"
import Artbar from "@modules/layout/components/art-bar"
import Header from "../components/header";
import Line from "@modules/common/line";
import LandingPage from "../components/landing-page";
import Login from "../components/login";
import Signup from "../components/signup";
import CartPanel from "../components/cart-panel";
interface Props {
    children: React.ReactNode;
}

const Layout: React.FC<Props> = ({ children }) => {
    return (
        <div className="kalaya-container">
            <Artbar/>
            <Header/>
            <Line/>
            <main className="relative bg-white h-full">
                {children}
            </main>
            {/* <LandingPage/> */}
            {/* <Login/> */}
            {/* <Signup/> */}
            {/* <CartPanel/> */}
         </div>
    )
}

export default Layout