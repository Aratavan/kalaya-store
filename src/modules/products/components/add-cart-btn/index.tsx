import { useProductActions } from "@lib/context/product-context"
import { ProductTemplateProps } from "@modules/products/templates"

const AddToCartButton: React.FC<ProductTemplateProps> = ({product}) => {
    const {updateOptions, addToCart, options, inStock, variant } = useProductActions()

    return (
        <div onClick={addToCart} className="add-cart-btn cursor-pointer mx-2 px-[26px] py-[14px] text-white text-medium font-bold bg-logo rounded">
            {!inStock ? "Out of stock" : "Add to cart"}
        </div>
    )

}

export default AddToCartButton