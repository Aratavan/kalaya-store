import { useCheckout } from "@lib/context/checkout-context"
import AddressSummary from "@modules/common/address-summary"

const BillingAddress = () => {
    const {
        sameAsBilling: { state: checked, toggle: onChange },
        editAddresses: { state: isEdit, toggle: setEdit },
        setAddresses,
        handleSubmit,
        cart,
      } = useCheckout()

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