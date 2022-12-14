import { useProductActions } from "@lib/context/product-context"

const QuantityCounter:React.FC = () => {

    const {variant, quantity, increaseQuantity, decreaseQuantity} = useProductActions()

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

export default QuantityCounter
