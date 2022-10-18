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
            <div className="address-body  flex flex-col">
                <div className="address-item name font-nunito font-bold text-[24px] text-artblack text-nunito">
                    Mr John Smith
                </div>
                <div className="address-item email font-nunito text-xmedium text-greybf">
                    davidjohn@gmail.com
                </div>
                <div className="address-item phone font-nunito text-xmedium text-greybf">
                    +1 (555) 555-1234.
                </div>
                <div className="address-item address-1  font-nunito text-xmedium text-greybf">
                    132, My Street, Kingston
                </div>
                <div className="address-item address-2 font-nunito text-xmedium text-greybf">
                    New York 12401
                </div>
            </div>
        </div>
    )

}

export default BillingAddress