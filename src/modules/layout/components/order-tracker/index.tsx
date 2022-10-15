const Ordertracker = () => {
    return (
        <div className="tracking-container flex py-[15px]">
            <div className="label font-normal font-para text-black text-medium align-middle justify-center flex flex-col px-4">
                <span>Order ID</span>
            </div>
            <div className="tracking-input w-[195px] border border-r-0 rounded">
                <input className="w-full h-full bg-white"></input>
            </div>
            <div className="tracking-btn text-logo px-5 py-4 text-medium font-para border rounded">
                <span>
                    Track Order
                </span>
            </div>
        </div>
    )
}

export default Ordertracker