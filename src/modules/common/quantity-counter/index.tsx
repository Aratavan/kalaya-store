const QuantityCounter = () => {

    return (
        <div className="quantity-box flex flex-row rounded border w-fit">
            <div className="minus text-large text-grey69 font-bold font-nunito w-[52px] h-[55px] flex justify-center items-center">
                -
            </div>
            <div className="number w-[69px] h-[55px] flex justify-center items-center text-large text-grey69 font-bold font-nunito p-2 border-x">
                2
            </div>
            <div className="plus w-[52px] h-[55px] flex justify-center items-center text-large text-grey69 font-bold font-nunito p-2 ">
                +
            </div>
        </div>
    )

}

export default QuantityCounter
