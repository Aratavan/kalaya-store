const BillForm = () => {

    return (
        <div className="billing-form-container mt-8 w-[750px] ml-[75px]">
            <div className="billing-head">
                <div className="billing-title text-[28px] font-bold font-nunito">
                    <span>Billing address</span>
                </div>
                <div className="billing-sub-title text-small font-bold mb-4">
                    Fill the address that matches your card or payment method.
                </div>
            </div>
            <div className="form billing-form-container font-nunito ">
                <div className="form-items flex flex-row text-xmedium  text-greybf mb-4">
                    <div className="item mr-2 ">
                        <input className=" w-[320px] h-[60px] pl-7 py-4 bg-white rounded border border-grey84 focus:outline-none" placeholder="First Name"></input>
                    </div>
                    <div className="item ml-2 ">
                        <input className="w-[320px] h-[60px] pl-7 py-4 bg-white rounded border border-grey84 focus:outline-none" placeholder="Last Name"></input>
                    </div>
                </div>
                <div className="form-items flex flex-row text-xmedium  text-greybf mb-4">
                    <div className="item mr-2">
                        <input className="w-[320px] h-[60px] pl-7 py-4 bg-white rounded border border-grey84 focus:outline-none" placeholder="Email"></input>
                    </div>
                    <div className="item ml-2 ">
                        <input className="w-[320px] h-[60px] pl-7 py-4 bg-white rounded border border-grey84 focus:outline-none" placeholder="Phone Number"></input>
                    </div>
                </div>
                <div className="form-items form-items flex flex-row text-xmedium  text-greybf mb-4">
                    <div className="item ">
                        <input className="w-[655px] h-[60px] pl-7 py-4 bg-white rounded border border-grey84 focus:outline-none" placeholder="Address 1"></input>
                    </div>
                </div>
                <div className="form-items form-items flex flex-row text-xmedium  text-greybf mb-4">
                    <div className="item">
                        <input className="w-[655px] h-[60px] pl-7 py-4 bg-white rounded border border-grey84 focus:outline-none" placeholder="Address 2"></input>
                    </div>
                </div>
                <div className="form-items form-items flex flex-row text-xmedium  text-greybf mb-2">
                    <div className="item mr-2">
                        <input className="w-[320px] h-[60px] pl-7 py-4 bg-white rounded border border-grey84 focus:outline-none" placeholder="Postal Code"></input>
                    </div>
                    <div className="item form-items flex flex-row text-xmedium  text-greybf mb-2">
                        <div className="item ml-2">
                            <select className="w-[320px] h-[60px] pl-7 py-4 text-xmedium bg-white rounded border border-grey84  focus:outline-none" name="bangalore" id="city">
                                <option value="bangalore">Bangalore</option>
                                <option value="mysore">Mysore</option>
                            </select>
                        </div>
                    </div>
                </div>
                <div className="form-items form-items flex flex-row text-xmedium  text-greybf mb-2">
                    <div className="item mr-2">
                        <select className="w-[320px] h-[60px] pl-7 py-4 bg-white rounded border border-grey84 focus:outline-none" name="karnataka" id="state">
                            <option value="karnataka">Karnataka</option>
                        </select>
                    </div>
                    <div className="item">
                        <div className="item ml-2">
                            <select className="w-[320px] h-[60px] pl-7 py-4 bg-white rounded border border-grey84 focus:outline-none" name="india" id="country">
                                <option value="india">India</option>
                                <option value="england">England</option>
                            </select>
                        </div>
                    </div>
                </div>
                <div className="form-items flex-row-reverse flex">
                    <div className="item w-[320px] h-[60px] flex flex-row justify-center items-center rounded border border-grey84 mr-[95px] mt-2 bg-greybf text-medium text-white">
                        <button>SAVE</button>
                    </div>
                </div>
            </div>
        </div>
    )

}

export default BillForm