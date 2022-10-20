import BreadCrumb from "@modules/common/breadcrumb"
import Line from "@modules/common/line"
import ProductFooter from "@modules/common/product-footer"
import QuantityCounter from "@modules/common/quantity-counter"
import Layout from "@modules/layout/templates"
import { ReactElement } from "react"
import { NextPageWithLayout } from "types/global"

const ProductDetails: NextPageWithLayout = () => {

    return (
        <>
            <BreadCrumb />
            <Line />
            <div className="product-deatails-container mx-[75px]">
                <div className="details-section-1 flex flex-row mt-[45px] mb-[50px]">
                    <div className="images-section flex flex-row  mr-[30px]">
                        <div className="main-image w-[450px] h-[450px]  bg-slate-600 rounded-md">
                        </div>
                        <div className="image-thumbnails-contianer  flex flex-col">
                            <div className="thumbnails m-2 mt-0 w-[140px] h-[140px] bg-slate-800 rounded-md">
                            </div>
                            <div className="thumbnails m-2 w-[140px] h-[140px] bg-slate-800 rounded-md">
                            </div>
                            <div className="thumbnails m-2 w-[140px] h-[140px] bg-slate-800 rounded-md">
                            </div>
                        </div>
                    </div>
                    <div className="content-section flex flex-col ml-[30px] ">
                        <div className="product-name text-large p-[1px] text-lightGrey font-nunito">
                            Kalaya Groundnut Oil
                        </div>
                        <Line />
                        <div className="product-price pt-5 pb-1 text-large text-logo ">$ 10.99</div>
                        <div className="product-desc text-black3e text-small font-nunito">
                            Discover the traditional goodness of groundnut oil,
                            in an advanced cold press method.
                        </div>
                        <div className="product-weight-container mb-3 mt-1">
                            <div className="weight-label text-black my-3 text-medium">
                                Weight Unit
                            </div>
                            <div className="weights-sections flex flex-row">
                                <div className="weight w-[67px] h-[47px] flex justify-center items-center rounded-md border-logo border mr-1">
                                    <span className="text-logo text-small">
                                        1ltr
                                    </span>
                                </div>
                                <div className="weight w-[67px] h-[47px] flex justify-center items-center rounded-md border-grey84 border ml-1">
                                    <span className="text-small text-grey84">
                                        500ml
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className="product-quantity-container my-3 flex flex-row">
                            <QuantityCounter />
                            <div className="add-cart-btn mx-2 px-[26px] py-[14px] text-white text-medium font-bold bg-logo rounded">
                                Add To Cart
                            </div>
                            <div className="wishlist-btn mx-2 flex justify-center items-center">
                                <img className="w-[40px] h-[35px]" src="/heart.svg" alt="wishlist button" />
                            </div>
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
                    <div className="section-why-image w-[35%] mt-[-50px] ml-6">
                        <div className="bg-grey69">
                            <img src="/ProductPage_Groundnut_image@2x.png" alt="nuts" />
                        </div>
                    </div>

                </div>
            </div>
            <ProductFooter />
        </>
    )

}

ProductDetails.getLayout = (page: ReactElement) => {
    return <Layout> {page} </Layout>

}

export default ProductDetails;