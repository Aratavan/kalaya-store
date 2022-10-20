import Link from "next/link"
const KalayaLogo = () => {

    return (
        <div className="logo-container flex align-middle">
            <div className="logo w-fit flex flex-col justify-center">
                <Link href="/"><img className="h-[65px]" src="./Logo@2x.png" alt="" /></Link>
                {/* <span className="text-logo leading-normal font-lemon text-3xl tracking-wider">
                    Kalaya
                </span>
                <div className="sub-title flex text-xs text-black justify-center font-montserrat tracking-widest">
                    Groundnut Oil
                </div> */}
            </div>

        </div>
    )

}

export default KalayaLogo