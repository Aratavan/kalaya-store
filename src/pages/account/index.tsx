import { NextPageWithLayout } from "types/global"
import Layout from "@modules/layout/templates"
import { ReactElement, SetStateAction, useState } from "react"
import AccountDetails from "@modules/layout/components/account-details"
import PreviousOrders from "@modules/layout/components/previous-orders"
import Line from "@modules/common/line"

const Accounts: NextPageWithLayout = () => {
    const [ToggleState, setToggleState] = useState(1);

    const toggleTab = (index: SetStateAction<number>) => {
        setToggleState(index);
    };

    const getActiveClass = (index: number, className: string) =>
        ToggleState === index ? className : "";
    return (
        <>
            <div className="container mx-auto font-nunito">
                <div className="grid grid-flow-row-dense grid-cols-6 tab-list m-10 mb-5">
                    <div className={`tabs-account ${getActiveClass(1, "active-tabs")}`}
                        onClick={() => toggleTab(1)}>Account details
                    </div>
                    <div className={`tabs-account ${getActiveClass(2, "active-tabs")}`}
                        onClick={() => toggleTab(2)}>Previous Orders
                    </div>
                </div>
            </div>
            <Line />

            <div className={`content ${getActiveClass(1, "active-content")}`}>
                <AccountDetails />
            </div>
            <div className={`content ${getActiveClass(2, "active-content")}`}>
                <PreviousOrders />
            </div>
        </>
    )
}
Accounts.getLayout = (page: ReactElement) => {
    return <Layout> {page} </Layout>
}
export default Accounts