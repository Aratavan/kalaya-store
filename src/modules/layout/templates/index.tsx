import React from "react"
import Artbar from "@modules/layout/components/art-bar"
import Header from "../components/header";
import Line from "@modules/common/line";
interface Props {
    children: React.ReactNode;
}

const Layout: React.FC<Props> = ({ children }) => {
    return (
        <div className="kalaya-container">
            <Artbar />
            <Header />
            <Line />
            <main className="relative bg-white h-full">
                {children}
            </main>
        </div>
    )
}

export default Layout