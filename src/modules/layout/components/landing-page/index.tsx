import Link from "next/link"

const LandingPage = () => {
    return (
        <div>
            {/* banner section */}
            <div className="banner h-[668px] bg-cover bg-center bg-[url('/Home_BG_with_Ground_Nut@2x.png')]">
                <div className="container mx-auto">
                    <div className="grid grid-cols-1 pt-24 pl-40">
                        <p className="text-base text-logo text-lg font-semibold mt-4 font-nunito">Eat Healthy To Be Happy</p>
                        <h1 className="text-[65px] font-semibold mt-4 leading-snug font-georgia">Tasty & <br />Healthy Oil</h1>
                        <p className="text-base text-logo  text-lg font-bold mt-4 font-nunito">Rich Aroma | Authentic Taste | Lowers Cholesterol</p>
                        <button className="h-12 mt-7 px-6 font-semibold rounded-md text-white font-nunito" type="submit" style={{ background: '#9a3938', width: '170px' }}>
                            <Link href="/product-details" >ORDER NOW </Link>
                        </button>
                    </div>

                </div>
            </div>

            {/* Health benefits cold oil (2nd section) */}
            <div className="health-section grid grid-cols-1">
                <p className="mt-12 mb-10 text-[45px] font-bold text-center font-georgia">Health benefits of cold pressed oil</p>
                <div className="mb-10 flex flex-row justify-center">
                    <img className="w-[45%]" src="/FullBG@2x.png"></img>
                </div>
            </div>

            {/* Groundnut oil for family (3rd section)  */}
            <div className="grid grid-cols-1 pl-40 bg-[#fff6e0] h-[700px]">
                <div className="bg-no-repeat bg-right-bottom bg-[url('/BG.png')]">
                    <div className="container mx-auto mt-48">
                        <p className="font-semibold font-georgia text-[34px] text-black10">We source organically grown groundnut<br />from family owned farms</p>
                        <p className="mt-5 font-nunito" style={{ fontSize: 'larger', lineHeight: '34px', color: '#101010' }}>Discover the traditional goodness of groundnut oil, in an<br />
                            advanced cold press method. Bring home oil today, and<br />
                            experience love in its healthiest form.</p>
                        <button className="h-12 mt-7 px-6 font-semibold rounded-md text-white font-nunito" type="submit" style={{ background: '#9a3938' }}>ORDER NOW</button>
                    </div>
                </div>
            </div>

            {/* Landing page Subscribe section (4th section) */}
            <div className="bg-no-repeat px-[100px] bg-right-bottom bg-[url('/Background@2x.png')]" >
                <div className="container grid grid-cols-3 gap-3 mt-12 mb-12">
                    <div className="flex">
                        <div className="flex-none w-24 relative">
                            <img src="/Artboard_1@2x.png" alt="" className="absolute inset-0" loading="lazy" style={{ width: '90px', height: '60px', marginTop: '25px' }} />
                        </div>
                        <form className="flex-auto p-6">
                            <div className="flex flex-wrap">
                                <h1 className="text-logo flex-auto text-lg font-semibold font-georgia">Free Shipping</h1>
                                <div className="w-full flex-none text-sm font-medium text-slate-700 mt-2 font-nunito">Between 2-3 business days</div>
                            </div>
                        </form>
                    </div>
                    <div className="flex">
                        <div className="flex-none w-24 relative">
                            <img src="/Refund@2x.png" alt="" className="absolute inset-0 ml-4" loading="lazy" style={{ width: '80px', height: '65px', marginTop: '25px' }} />
                        </div>
                        <form className="flex-auto p-6">
                            <div className="flex flex-wrap">
                                <h1 className="text-logo flex-auto text-lg font-semibold font-georgia">100% Refund</h1>
                                <div className="w-full flex-none text-sm font-medium text-slate-700 mt-2 font-nunito">Money back guarantee</div>
                            </div>
                        </form>
                    </div>
                    <div className="flex">
                        <div className="flex-none w-24 relative">
                            <img src="/ProductReturn@2x.png" alt="" className="absolute inset-0 ml-7" loading="lazy" style={{ width: '60px', height: '60px', marginTop: '25px' }} />
                        </div>
                        <form className="flex-auto p-6">
                            <div className="flex flex-wrap">
                                <h1 className="text-logo flex-auto text-lg font-semibold font-georgia">Product Return</h1>
                                <div className="w-full flex-none text-sm font-medium text-slate-700 mt-2 font-nunito">Contact us at 1800-2355-2356</div>
                            </div>
                        </form>
                    </div>

                </div>
                <p className="text-center font-nunito" style={{ color: '#414141', letterSpacing: '1px' }}>About  |  FAQs  |  Contact  |  Privacy  |  Terms & Conditions  |  Order & Shipping</p>

                <div className="flex flex-col 
                    items-center justify-center mt-10">
                    <form>
                        <input aria-label="Enter your email address"
                            type="text" placeholder="Subscribe for newsletter"
                            className="text-sm text-gray-base bg-white w-full 
                              mr-3 py-5 px-14 h-2 border rounded mb-2" />
                        <div className="relative top-2 right-2" style={{ top: '-49px', left: '17.5rem' }}>

                            <button className="h-10 w-20" style={{ background: '#9a3938', color: '#fff', fontSize: 'small', borderRadius: '2px' }}>SEND</button>

                        </div>
                    </form>
                </div>
                <p className="text-center font-nunito pb-[300px]" style={{ color: '#414141' }}>© 2022 Kalaya. All Rights Reserved.</p>
            </div>
        </div>
    )

}

export default LandingPage