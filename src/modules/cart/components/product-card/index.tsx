import QuantityCounter from "@modules/common/quantity-counter"
import { LineItem, Region } from "@medusajs/medusa"
import LineItemPrice from "@modules/common/line-item-price"
import { CalculatedVariant } from "types/medusa"
import { useStore } from "@lib/context/store-context"

type ItemProps = {
    item: Omit<LineItem, "beforeInsert">
    region: Region
}

const ProductCard: React.FC<ItemProps> = ({ item, region }) => {

    const { deleteItem } = useStore()

    return (
        <div className="card-container mt-8 flex flex-row border border-greybf  mx-[75px] rounded w-[85%]">
            <div className="card-image m-6 bg-greybf w-[125px] h-[125px] rounded">
                <img src="./Product Image.png"></img>
            </div>
            <div className="card-desc flex flex-col text-lightGrey justify-center">
                <div className="title text-xxmedium">
                    {item.title}
                </div>
                <div className="price font-nunito text-xxmedium font-bold">
                    <LineItemPrice
                        variant={item.variant as CalculatedVariant}
                        quantity={item.quantity}
                        region={region}
                        price={item.unit_price}
                    />
                </div>
                <div className="quantity text-medium">
                    {item.variant.title}
                </div>
            </div>
            <div className="card-quantity-count flex flex-col justify-center ml-11">
                {/* <QuantityCounter /> */}
            </div>
            <div className="total text-logo fonr-nunito text-[25px] font-bold flex flex-col justify-center mx-10">
            <LineItemPrice
                        variant={item.variant as CalculatedVariant}
                        quantity={item.quantity}
                        region={region}
                        price={item.total as number}
                    />
            </div>
            <div onClick={()=> deleteItem(item?.id)} className="delete mr-5  flex flex-col justify-center">
                <img className="w-[22px] h-[18px]" src="/delete.svg" alt="delete" />
            </div>
        </div>
    )

}

export default ProductCard