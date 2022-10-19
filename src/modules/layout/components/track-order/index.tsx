
const TrackOrder = () => {
    return (
        <div>
            <div className='p-5 bg-artgrey text-artblack h-20 font-nunito'>
                <div className="flex justify-start">
                    <div className="pl-16 text-sm block font-normal">
                        <p>Order Date</p>
                        <p className="font-bold pt-1">12-03-2022</p>
                    </div>
                    <div className="pl-20 text-sm block font-normal">
                        <p>Order Number</p>
                        <p className="font-bold pt-1">123456</p>
                    </div>
                    <div className="pl-20 text-sm block font-normal">
                        <p>Estimated Delivery</p>
                        <p className="font-bold pt-1">14-03-2022</p>
                    </div>
                </div>
            </div>
            <div className="container mx-auto">
                <div className="step-progress font-nunito">
                    <div className="step-progress-item is-done">
                        <strong>PROCESS</strong>
                        <p className="text-xs pt-1 font-normal">8.30 AM Shipping information received</p>
                        <p className="text-xs pt-1 font-normal">11.00 AM Processed thought factory</p>
                    </div>
                    <div className="step-progress-item is-done">
                        <strong>IN TRANSIT</strong>
                        <p className="text-xs pt-1 font-normal">6.30 PM Shipping received</p>
                    </div>
                    <div className="step-progress-item">
                        <strong>PICKUP</strong>
                    </div>
                    <div className="step-progress-item">
                        <strong>DELIVERED</strong>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TrackOrder