import { CheckoutFormValues, useCheckout } from "@lib/context/checkout-context"
import ConnectForm from "@modules/common/connect-form"
import Input from "@modules/common/input"
import CountrySelect from "../country-select"
import { emailRegex } from "@lib/util/regex"
import AddressSummary from "@modules/checkout/components/address-summary"
import Delivery from "../delivery"
import { useCart } from "medusa-react"
import { Cart } from "medusa-react/dist/types"
import Payment from "../payment"
import { Address } from "@medusajs/medusa"
import Line from "@modules/common/line"


const BillForm = () => {
    const { cart } = useCart()
    const {
        sameAsBilling: { state: checked, toggle: onChange },
        editAddresses: { state: isEdit, toggle: setEdit },
        setAddresses,
        handleSubmit,
    } = useCheckout()

    return (
        <>
            {
                (isEdit) ? (
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
                            <ConnectForm<CheckoutFormValues>>
                                {({ register, formState: { errors, touchedFields } }) => (
                                    <>
                                        <div className="form-items flex flex-row text-xmedium  text-greybf mb-4">
                                            <div className="item mr-2 ">
                                                <Input className="w-[320px] text-black h-[60px] pl-7 py-4 bg-white  rounded border border-grey84 focus:outline-none"
                                                    label="First name"
                                                    {...register("billing_address.first_name", {
                                                        required: "First name is required",
                                                    })}
                                                    autoComplete="given-name"
                                                    errors={errors}
                                                    touched={touchedFields}
                                                />
                                            </div>
                                            <div className="item ml-2 ">
                                                <Input className="w-[320px] h-[60px] text-black pl-7 py-4 bg-white rounded border border-grey84 focus:outline-none"
                                                    label="Last name"
                                                    {...register("billing_address.last_name", {
                                                        required: "Last name is required",
                                                    })}
                                                    autoComplete="family-name"
                                                    errors={errors}
                                                    touched={touchedFields}
                                                />
                                            </div>
                                        </div>
                                        <div className="form-items flex flex-row text-xmedium  text-greybf mb-4">
                                            <div className="item mr-2">
                                                <Input className="w-[320px] text-black h-[60px] pl-7 py-4 bg-white rounded border border-grey84 focus:outline-none"
                                                    label="Email"
                                                    {...register("email", {
                                                        required: "Email is required",
                                                        pattern: emailRegex,
                                                    })}
                                                    autoComplete="email"
                                                    errors={errors}
                                                    touched={touchedFields}
                                                />
                                            </div>
                                            <div className="item ml-2 ">
                                                <Input className="w-[320px] text-black h-[60px] pl-7 py-4 bg-white rounded border border-grey84 focus:outline-none"
                                                    label="Phone"
                                                    {...register("billing_address.phone")}
                                                    autoComplete="tel"
                                                    errors={errors}
                                                    touched={touchedFields}
                                                />
                                            </div>
                                        </div>
                                        <div className="form-items form-items flex flex-row text-xmedium  text-greybf mb-4">
                                            <div className="item ">
                                                <Input className="w-[655px] h-[60px] text-black pl-7 py-4 bg-white rounded border border-grey84 focus:outline-none"
                                                    label="Address"
                                                    {...register("billing_address.address_1", {
                                                        required: "Address is required",
                                                    })}
                                                    autoComplete="address-line1"
                                                    errors={errors}
                                                    touched={touchedFields}
                                                />
                                            </div>
                                        </div>
                                        <div className="form-items form-items flex flex-row text-xmedium  text-greybf mb-4">
                                            <div className="item">
                                                <Input className="w-[655px] h-[60px] pl-7 py-4 text-black bg-white rounded border border-grey84 focus:outline-none"
                                                    label="Apartments, suite, etc."
                                                    {...register("billing_address.address_2")}
                                                    autoComplete="address-line2"
                                                    errors={errors}
                                                    touched={touchedFields}
                                                />
                                            </div>
                                        </div>
                                        <div className="form-items form-items flex flex-row text-xmedium  text-greybf mb-2">
                                            <div className="item mr-2">
                                                <Input className="w-[320px] h-[60px] pl-7 py-4 text-black bg-white rounded border border-grey84 focus:outline-none"
                                                    label="Postal code"
                                                    {...register("billing_address.postal_code", {
                                                        required: "Postal code is required",
                                                    })}
                                                    autoComplete="postal-code"
                                                    errors={errors}
                                                    touched={touchedFields}
                                                />
                                            </div>
                                            <div className="item form-items flex flex-row text-xmedium  text-greybf mb-2">
                                                <div className="item ml-2">
                                                    <Input className="w-[320px] h-[60px] pl-7 py-4 text-black bg-white rounded border border-grey84 focus:outline-none"
                                                        label="City"
                                                        {...register("billing_address.city", {
                                                            required: "City is required",
                                                        })}
                                                        autoComplete="address-level2"
                                                        errors={errors}
                                                        touched={touchedFields}
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="form-items form-items flex flex-row text-xmedium  text-greybf mb-2">
                                            <div className="item mr-2">
                                                <CountrySelect className="w-[320px] h-[60px] pl-7 py-4 bg-white rounded border border-grey84 focus:outline-none"
                                                    {...register("billing_address.country_code", {
                                                        required: "Country is required",
                                                    })}
                                                    autoComplete="country"
                                                    errors={errors}
                                                    touched={touchedFields}
                                                />
                                            </div>
                                            <div className="item">
                                                <div className="item ml-2">
                                                    <Input className="w-[320px] h-[60px] pl-7 py-4 text-black bg-white rounded border border-grey84 focus:outline-none"
                                                        label="State / Province"
                                                        {...register("billing_address.province")}
                                                        autoComplete="address-level1"
                                                        errors={errors}
                                                        touched={touchedFields}
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    </>
                                )}
                            </ConnectForm>

                            <div className="form-items flex-row-reverse flex">
                                <div onClick={handleSubmit(setAddresses)} className="item w-[320px] h-[60px] flex flex-row justify-center items-center rounded border mr-[95px] mt-2  text-medium text-white bg-logo">
                                    <button>SAVE</button>
                                </div>
                            </div>
                        </div>
                    </div>
                ) : (
                    <div className="checkout-details ml-[75px] w-[85%]">
                        <div className="billing-address my-8">
                            <div className="address-header flex flex-row justify-between text-medium">
                                <div className="title font-nunito font-bold text-large">
                                    Billing Address
                                </div>
                                <div onClick={setEdit} className="edit-action text-[24px] underline">
                                    Edit
                                </div>
                            </div>
                            <AddressSummary data={cart?.billing_address as Address} />
                        </div>
                        <Line />
                        <Delivery cart={cart as Cart} />
                        <Line />
                        <Payment />
                    </div>
                )
            }
        </>
    )

}

export default BillForm