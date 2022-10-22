import Link from "next/link";

const Account = () => {
    return (
        <div className="account flex flex-col justify-center align-middle px-[15px]">
            <div className="icon flex flex-wrow justify-center cursor-pointer">
                <Link href="/account" ><img src="/Profile.svg" alt="profile-image" className="w-8" /></Link>
            </div>
            <div className="label font-nunito text-xsmall">
                Account
            </div>
        </div>
    )
}

export default Account;