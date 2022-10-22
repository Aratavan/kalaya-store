import { ProductContext, useProductActions } from "@lib/context/product-context"
import { useStore } from "@lib/context/store-context"
import { useCart } from "medusa-react"

const AddRemoveLineItem:React.FC = () => {

    const { cart } = useCart()
    const { addItem, deleteItem } = useStore()
    const {quantity, increaseQuantity, decreaseQuantity} = useProductActions() as ProductContext

    return (
        <div className="quantity-box flex flex-row rounded border w-fit">
            <div onClick={decreaseQuantity} className="minus text-large text-grey69 font-bold font-nunito w-[52px] h-[55px] flex justify-center items-center">
                -
            </div>
            <div className="number w-[69px] h-[55px] flex justify-center items-center text-large text-grey69 font-bold font-nunito p-2 border-x">
                {quantity}
            </div>
            <div onClick={increaseQuantity} className="plus w-[52px] h-[55px] flex justify-center items-center text-large text-grey69 font-bold font-nunito p-2 ">
                +
            </div>
        </div>
    )

}

export default AddRemoveLineItem
