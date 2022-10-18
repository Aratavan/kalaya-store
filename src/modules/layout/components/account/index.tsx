const Account = () => {
    return (
        <div className="account flex flex-col justify-center align-middle px-[15px]">
            <div className="icon flex flex-wrow justify-center cursor-pointer">
                <img src="./Profile.svg" alt="profile-image" className="w-8" />
            </div>
            <div className="label font-nunito text-xsmall">
                Account
            </div>
        </div>
    )
}

export default Account;