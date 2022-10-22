import AddressSummary from "@modules/checkout/components/address-summary"
import { Order } from "@medusajs/medusa"
import React from "react"
import { formatAmount, useCart } from "medusa-react"
import { Variant } from "types/medusa"

type OrderCompletedTemplateProps = {
    order: Order
}

const OrderSummaryTemplate: React.FC<OrderCompletedTemplateProps> = ({ order }) => {

    const priceFormat = (amount: number) => {
        return formatAmount({
            amount,
            region: order.region,
            includeTaxes: false,
        })
    }
    const {totalItems} = useCart()
    return (
        <>
            <div className="order-summary-container mt-10 mb-10">
                <div className="grid justify-center">
                    <div className="mx-auto">
                        <img src="/green-tick.svg" alt="profile-image" className="object-cover w-[60px] h-[60px] rounded outline-none" />
                    </div>
                    <div className="text-black03 font-nunito font-bold text-center text-xlarge">
                        Thank you for your order!
                    </div>
                    <div className="font-nunito font-bold text-center text-[24px]">
                        Order Id: {order.id}
                    </div>
                </div>
                <div className="summary-header">
                    <div className="success-icon">
                    </div>
                </div>
            </div>
            <div className="flex-row orderSummary border border-slate-200 rounded">
                <div className="summary-body">
                    <div className="flex account-details bg-greye5 border border-slate-200 rounded p-5">
                        <div className="account w-1/2 px-[75px]">
                            <AddressSummary data={order?.shipping_address} />
                        </div>
                        <div className="payment w-1/2 px-[75px]">
                            <div className="total-amount text-right account-item font-nunito text-[26px] text-bold">
                                {priceFormat(order?.total)}
                            </div>
                        </div>
                    </div>
                  
                    <div className="product-checkout-container flex">
                        <>
                            {
                                order?.items.map((item) => {
                                    {item}
                                   return <div className="card-container mt-8 flex flex-row border border-greybf  mx-[75px] rounded w-[80%] h-[150px] justify-around">
                                        <div className="card-image flex flex-col justify-center items-center m-6 rounded">
                                            <img className="w-[125px] h-[125px]" src="/Product Image.png"></img>
                                        </div>
                                        <div className="card-desc flex flex-col text-lightGrey justify-center">
                                            <div className="title text-xxmedium">
                                                {item.title}
                                            </div>
                                            <div className="price font-nunito text-xxmedium font-bold">
                                                {priceFormat(item.unit_price)}
                                            </div>
                                            <div className="quantity text-medium">
                                                {item.variant.title}
                                            </div>
                                        </div>
                                        <div className="card-quantity-count flex flex-col justify-center ml-11">
                                            {item.quantity}
                                        </div>
                                        <div className="total text-logo fonr-nunito text-[25px] font-bold flex flex-col justify-center mx-10">
                                            {priceFormat(item.unit_price * item.quantity  as number)}
                                        </div>
                                    </div>
                                })
                            }
                        </>
                        <div className="checkout-card-container w-[350px] h-[280px] mx-8">
                            <div className="product-checkout-container mt-8 bg-[#f9f9f9] border rounded border-[#d0d0d0]">
                                <div className="product-details flex flex-col font-nunito font-normal text-black1d  text-[15px] justify-between px-4 py-4 ">
                                    <div className="item flex flex-row justify-between  pb-2">
                                        <span>Quantity</span>
                                        {/* <span>{order.}</span> */}
                                    </div>
                                    <div className="item flex flex-row justify-between pb-2">
                                        <span>Order Date</span>
                                        <span></span>
                                    </div>
                                    <div className="item flex flex-row justify-between pb-2">
                                        <span>Subtotal</span>
                                        <span>
                                            {priceFormat(order?.subtotal)}
                                        </span>
                                    </div>
                                    <div className="item flex flex-row justify-between pb-2">
                                        <span>Delivery Charges</span>
                                        <span>
                                            {priceFormat(order?.shipping_total)}
                                        </span>
                                    </div>

                                </div>
                                <div className="product-total text-xxmedium font-nunito font-bold text-logo flex flex-row px-4 py-3 justify-between border-t border-greybf">
                                    <div className="label">
                                        Total
                                    </div>
                                    <div className="price">
                                        {priceFormat(order?.total)}
                                    </div>

                                </div>
                            </div>
                            <div>
                                <button type="submit" className="py-3 px-5 font-nunito mt-4 text-center text-white font-semibold bg-brown text-xxmedium uppercase rounded  w-full"
                                    data-mdb-ripple="true"
                                    data-mdb-ripple-color="light">TRACK ORDER</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )

}

export default OrderSummaryTemplate