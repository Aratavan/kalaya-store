const Ordertracker = () => {
    return (
        <div className="tracking-container flex py-[15px] mr-6">
            <div className="label font-normal text-black text-small align-middle justify-center flex flex-col px-4">
                <span className="font-nunito">Order ID</span>
            </div>
            <div className="tracking-input w-[210px] h-[50px] p-[5px] border border-r-0 rounded">
                <input className="w-full h-full bg-white outline-none"></input>
            </div>
            <div className="tracking-btn text-logo px-5 py-3 h-[50px] text-small font-nunito font-bolder border rounded cursor-pointer border-[solid 1.5px] border-logo">
                <span>
                    TRACK ORDER
                </span>
            </div>
        </div>
    )
}

export default Ordertracker