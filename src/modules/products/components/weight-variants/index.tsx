import { useProductActions } from "@lib/context/product-context";
import { ProductTemplateProps } from "@modules/products/templates";
import clsx from "clsx";

const WeightVariant: React.FC<ProductTemplateProps> = ({ product }) => {

    const { variants } = product
    const { selectVariant, selectedVariantId } = useProductActions()

    //const {} = useProductActions()

    return (
        <div className="product-weight-container mb-3 mt-1">
            <div className="weight-label text-black my-3 text-medium">
                Weight Unit
            </div>
            <div className="weights-sections flex flex-row">
                {
                    variants?.map((item) => {
                        return (
                            <div onClick={ () => selectVariant(item)} key={item.id} className={ clsx("weight w-[67px] h-[47px] flex justify-center items-center text-small rounded-md  border mr-1", {"border-logo text-logo": item.id === selectedVariantId })}>
                                <span>
                                    {item.title}
                                </span>
                            </div>
                        )
                    })
                }
                {/* <div className="weight w-[67px] h-[47px] flex justify-center items-center rounded-md border-logo border mr-1">
                    <span className="text-logo text-small">
                        1ltr
                    </span>
                </div>
                <div className="weight w-[67px] h-[47px] flex justify-center items-center rounded-md border-grey84 border ml-1">
                    <span className="text-small text-grey84">
                        500ml
                    </span>
                </div> */}
            </div>
        </div>
    )
}

export default WeightVariant