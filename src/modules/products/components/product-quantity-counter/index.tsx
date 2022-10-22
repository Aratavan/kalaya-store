import { ProductContext, useProductActions } from "@lib/context/product-context"

const ProductQuantityCounter:React.FC = () => {

    const {quantity, increaseQuantity, decreaseQuantity} = useProductActions() as ProductContext

    return (
        <div className="quantity-box flex flex-row rounded border w-fit">
            <div onClick={decreaseQuantity} className="minus cursor-pointer text-large text-grey69 font-bold font-nunito w-[52px] h-[55px] flex justify-center items-center">
                -
            </div>
            <div className="number w-[69px] h-[55px] flex justify-center items-center text-large text-grey69 font-bold font-nunito p-2 border-x">
                {quantity}
            </div>
            <div onClick={increaseQuantity} className="plus cursor-pointer w-[52px] h-[55px] flex justify-center items-center text-large text-grey69 font-bold font-nunito p-2 ">
                +
            </div>
        </div>
    )

}

export default ProductQuantityCounter
