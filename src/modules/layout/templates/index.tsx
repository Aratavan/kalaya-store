import React from "react"
import Nav from "@modules/layout/components/nav"
import Artbar from "@modules/layout/components/art-bar"
import Header from "../components/header";
import Line from "@modules/common/line";
import LandingPage from "../components/landing-page";
interface Props {
    children: React.ReactNode;
}

const Layout: React.FC<Props> = ({ children }) => {
    return (
        <div className="kalaya-container">
            <Artbar/>
            <Header/>
            <Line/>
            <main className="relative bg-white h-full">{children}</main>
            <LandingPage/>
         </div>
    )
}

export default Layout