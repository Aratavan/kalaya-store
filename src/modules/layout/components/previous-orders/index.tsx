const PreviousOrders = () => {
    return (
        <>
            <div className="container mx-auto font-nunito">
                <div className="grid grid-flow-row-dense grid-cols-3 mt-10">
                    <div className="col-span-2">
                        <table className="border-collapse border border-slate-500 min-w-full my-1">
                            <thead>
                                <tr>
                                    <th className="border border-slate-600 py-3 ">Product</th>
                                    <th className="border border-slate-600 py-3 ">Product Name</th>
                                    <th className="border border-slate-600 py-3 ">Price</th>
                                    <th className="border border-slate-600 py-3 ">Weight</th>
                                    <th className="border border-slate-600 py-3 ">Quantity</th>
                                    <th className="border border-slate-600 py-3 ">Total Price</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td className="border border-slate-700 text-center"><img className="h-[70px] m-auto p-1" src="./product-image.svg" alt="product-img" /></td>
                                    <td className="border border-slate-700 text-center">Groundnut Oil</td>
                                    <td className="border border-slate-700 text-center">$ 10.99</td>
                                    <td className="border border-slate-700 text-center">1KG</td>
                                    <td className="border border-slate-700 text-center">2</td>
                                    <td className="border border-slate-700 text-center">$ 21.33</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div className="order-details pl-11 pt-7">
                        <p><span>Order Date</span> : <strong>12/10/2022</strong></p>
                        <p><span>Order Number</span> : <strong>#USL0-001850</strong></p>
                        <p><span>Payment Mode</span> : <strong>UPI</strong></p>
                    </div>
                    <div className="col-span-2">
                        <table className="border-collapse border border-slate-500 min-w-full my-1">
                            <thead>
                                <tr>
                                    <th className="border border-slate-600 py-3 ">Product</th>
                                    <th className="border border-slate-600 py-3 ">Product Name</th>
                                    <th className="border border-slate-600 py-3 ">Price</th>
                                    <th className="border border-slate-600 py-3 ">Weight</th>
                                    <th className="border border-slate-600 py-3 ">Quantity</th>
                                    <th className="border border-slate-600 py-3 ">Total Price</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td className="border border-slate-700 text-center"><img className="h-[70px] m-auto p-1" src="./product-image.svg" alt="product-img" /></td>
                                    <td className="border border-slate-700 text-center">Groundnut Oil</td>
                                    <td className="border border-slate-700 text-center">$ 10.99</td>
                                    <td className="border border-slate-700 text-center">4KG</td>
                                    <td className="border border-slate-700 text-center">4</td>
                                    <td className="border border-slate-700 text-center">$ 21.33</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div className="order-details pl-11 pt-7">
                        <p><span>Order Date</span> : <strong>10/08/2022</strong></p>
                        <p><span>Order Number</span> : <strong>#USL0-001858985890</strong></p>
                        <p><span>Payment Mode</span> : <strong>Net Banking</strong></p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default PreviousOrders