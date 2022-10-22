import { Address } from "@medusajs/medusa"
import React from "react"

type AddressDetailsProps = {
    data: Address
  }

const AddressSummary:React.FC<AddressDetailsProps> = ({data}) => {
    return (
        <div className="address-body ">
            <div className="address-item name font-nunito font-bold text-[24px] text-artblack text-nunito">
                {data?.first_name}{" "}
                {data?.last_name}
            </div>
            <div className="address-item email font-nunito text-xmedium text-greybf">
                {data?.address_1}{" "}
                {data?.address_2}
            </div>
            <div className="address-item phone font-nunito text-xmedium text-greybf">
            {data?.city}{"-"}
            {data?.postal_code}
                          
            </div>
            <div className="address-item address-1  font-nunito text-xmedium text-greybf">
            {data?.country_code?.toUpperCase()}
            </div>
            <div className="address-item address-2 font-nunito text-xmedium text-greybf">
                {data?.phone}
            </div>
        </div>
    )

}

export default AddressSummary