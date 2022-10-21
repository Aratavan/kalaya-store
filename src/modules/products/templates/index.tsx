import BreadCrumb from "@modules/common/breadcrumb"
import Line from "@modules/common/line"
import AddToCartButton from "../components/add-cart-btn"
import ImageGallery from "../components/image-gallery"
import { Product } from "@medusajs/medusa"
import { KalayaProductProvider, useProductActions } from "@lib/context/product-context"
import PriceLabel from "../components/price-label"
import WeightVariant from "../components/weight-variants"
import ProductQuantityCounter from "../components/product-quantity-counter"

export type ProductTemplateProps = {
    product: Product
}


const ProductInfoTemplate: React.FC<ProductTemplateProps> = ({ product }) => {

    return (
        <KalayaProductProvider product={product}>
            <>
                <BreadCrumb />
                <Line />
                <div className="product-deatails-container mx-[75px]">
                    <div className="details-section-1 flex flex-row mt-[45px] mb-[50px]">
                        <ImageGallery product = {product} />
                        <div className="content-section flex flex-col ml-[30px] ">
                            <div className="product-name text-large p-[1px] text-lightGrey font-nunito">
                                {product.title}
                            </div>
                            <Line />
                            <PriceLabel product={product} />
                            <div className="product-desc text-black3e text-small font-nunito">
                                {product.description}
                            </div>
                            <WeightVariant product={product} />
                            <div className="product-quantity-container my-3 flex flex-row">
                                <ProductQuantityCounter />
                                <AddToCartButton product = {product} />
                            </div>
                            <div className="product-benifits font-nunito my-4">
                                <div className="benifits-title text-medium font-bold text-black21">
                                    Benefits of Groundnut Oil
                                </div>
                                <div className="benifits-desc text-small text-black3e">
                                    Boosts your immune system, Reduces risk of heart diseases
                                    Helps to lower blood pressure, Helps to lower cholesterol levels
                                </div>

                            </div>
                        </div>
                    </div>
                    <div className="details-section-2 flex flex-row mt-[50px]">
                        <div className="section-why w-[65%] mr-6 mb-12">
                            <div className="why-title text-black10 text-large font-georgia font-bold flex-grow-0  mb-[18px]">
                                Why People love Kalaya
                            </div>
                            <div className="why-para text-xmedium font-nunito text-black10">
                                We source organically grown groundnut from family owned farms
                                lorem ipsum is a placeholder text commonly used to demonstrate the visual
                                form of a document or a typeface without relying on meaningful content.
                            </div>

                        </div>
                        <div className="section-why-image w-[35%] h-[270px] ml-6">
                            <div className="w-[432px] h-[270px] bg-grey69">
                                <img src="./product_ground_nut_details_image.png"></img>
                            </div>
                        </div>

                    </div>
                </div>
            </>
        </KalayaProductProvider>
    )

}

export default ProductInfoTemplate