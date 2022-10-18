import AddressSummary from "@modules/common/address-summary"

const BillingAddress = () => {

    return (
        <div className="billing-address my-8">
            <div className="address-header flex flex-row justify-between text-medium">
                <div className="title font-bold text-large">
                    Billing Address
                </div>
                <div className="edit-action text-[24px] underline">
                    Edit
                </div>
            </div>
            <AddressSummary/>
        </div>
    )

}

export default BillingAddress