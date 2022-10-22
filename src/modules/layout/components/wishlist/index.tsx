
const Wishlist = () => {
    return (
        <div className="wishlist flex flex-col justify-center align-middle px-[15px]">
            <div className="icon flex flex-wrow justify-center cursor-pointer">
                <img src="/Wishlist.svg" alt="profile-image" className="w-8" />
            </div>
            <div className="label font-nunito text-xsmall">
                Wishlist
            </div>
        </div>
    )
}

export default Wishlist