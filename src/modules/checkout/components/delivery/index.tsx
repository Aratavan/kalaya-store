const Delivery = () => {

    return (
        <div className="delivery-container my-8">
            <div className="address-header flex flex-row justify-between text-medium">
                <div className="title font-bold text-large">
                    Delivery Method
                </div>
                <div className="edit-action text-[24px] underline">
                    Edit
                </div>
            </div>
            <div className="address-body flex flex-col">
                <div className="address-item name font-nunito font-bold text-[24px] text-artblack text-nunito">
                    Standard delivery - Free
                </div>
                <div className="address-item email font-nunito text-xmedium text-greybf">
                    Estimated Delivery : Monday 7/10/2022
                </div>
            </div>
        </div>
    )

}

export default Delivery