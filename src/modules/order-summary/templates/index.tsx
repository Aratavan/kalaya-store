import AddressSummary from "@modules/common/address-summary"

const OrderSummaryTemplate = () => {
    return (
        <>
            <div className="order-summary-container container mx-[75px]">
                <div className="summary-header">
                    <div className="success-icon">
                        <img></img>
                    </div>
                    <div className="thank-you-order">
                        Thank you for your order!
                    </div>
                    <div className="order-no">
                        Order #USL0-001850
                    </div>
                </div>
                <div className="summary-body">
                    <div className="account-details">
                        <div className="address">
                            <AddressSummary />
                        </div>
                        <div className="payment">
                            <div className="card-no">

                            </div>
                            <div className="total-amount">
                            $ 21.98
                            </div>
                        </div>
                    </div>
                    <div className="product-checkout-container">
                        <div className="prodcut-card-container">

                        </div>
                        <div className="checkout-card-container">

                        </div>

                    </div>

                </div>


            </div>

        </>
    )

}

export default OrderSummaryTemplate