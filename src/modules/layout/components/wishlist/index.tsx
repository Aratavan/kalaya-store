
const Wishlist = () => {
    return (
        <div className="wishlist flex flex-col justify-center align-middle px-[10px]">
            <div className="icon flex flex-wrow justify-center">
                <img className="w-[33px] h-[33px]" src="/heart.svg"></img>
            </div>
            <div className="label text-xsmall">
                Wishlist
            </div>
        </div>
    )
}

export default Wishlist