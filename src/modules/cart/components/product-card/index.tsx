import QuantityCounter from "@modules/common/quantity-counter"

const ProductCard = () => {
    return (
        <div className="card-container mt-8 flex flex-row border border-greybf  mx-[75px] rounded w-[85%]">
            <div className="card-image m-6 bg-greybf w-[125px] h-[125px] rounded"></div>
            <div className="card-desc flex flex-col text-lightGrey justify-center">
                <div className="title text-xxmedium">
                    Groundnut Oil
                </div>
                <div className="price font-nunito text-xxmedium font-bold">
                    $ 10.99
                </div>
                <div className="quantity text-medium">
                    1Ltr
                </div>
            </div>
            <div className="card-quantity-count flex flex-col justify-center ml-11">
                <QuantityCounter/>
            </div>
            <div className="total text-logo fonr-nunito text-[25px] font-bold flex flex-col justify-center mx-10">
                $ 21.98
            </div>
            <div className="delete mr-5  flex flex-col justify-center">
                <img className="w-[22px] h-[18px]" src="/delete.svg" alt="delete" />
            </div>
        </div>
    )

}

export default ProductCard