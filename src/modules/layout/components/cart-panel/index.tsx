import Line from "@modules/common/line"

const CartPanel = () => {  
    return (
        <div className="flex flex-col max-w-3xl p-6 space-y-4 sm:p-10 dark:bg-gray-900 dark:text-gray-100">
        <h2 className="text-xxmedium font-nunito">Shopping cart</h2>
        <Line/>
        <ul className="flex flex-col divide-y divide-gray-700">
            <li className="flex flex-col py-6 sm:flex-row sm:justify-between">
                <div className="flex w-full space-x-2 sm:space-x-4">
                    <img src="./product-image.svg" alt="profile-image" className="object-cover w-[125px] h-[125px] rounded outline-none  dark:bg-gray-500" />
                    <div className="flex flex-col justify-between w-full pb-4">
                        <div className="flex justify-between w-full pb-2 space-x-2 mt-2">
                            <div className="space-y-1">
                                <p className="text-xmedium font-nunito dark:text-gray-400">Groundnut Oil</p>
                                <h3 className="text-xxmedium font-nunito font-semibold leading-snug sm:pr-8">$10</h3>
                                <p className="text-xmedium font-nunito dark:text-gray-400">1 KG</p>
                            </div>
                            <div className="text-right mt-8">
                            <button type="button" className="flex items-center px-2 py-1 pl-0 space-x-1">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-6 h-6 fill-current">
                                    <path d="M96,472a23.82,23.82,0,0,0,23.579,24H392.421A23.82,23.82,0,0,0,416,472V152H96Zm32-288H384V464H128Z"></path>
                                    <rect width="32" height="200" x="168" y="216"></rect>
                                    <rect width="32" height="200" x="240" y="216"></rect>
                                    <rect width="32" height="200" x="312" y="216"></rect>
                                    <path d="M328,88V40c0-13.458-9.488-24-21.6-24H205.6C193.488,16,184,26.542,184,40V88H64v32H448V88ZM216,48h80V88H216Z"></path>
                                </svg>
                                {/* <span>Remove</span> */}
                            </button>
                            </div>
                        </div>
                        {/* <div className="flex text-sm divide-x">
            
                            <button type="button" className="flex items-center px-2 py-1 space-x-1">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-4 h-4 fill-current">
                                    <path d="M453.122,79.012a128,128,0,0,0-181.087.068l-15.511,15.7L241.142,79.114l-.1-.1a128,128,0,0,0-181.02,0l-6.91,6.91a128,128,0,0,0,0,181.019L235.485,449.314l20.595,21.578.491-.492.533.533L276.4,450.574,460.032,266.94a128.147,128.147,0,0,0,0-181.019ZM437.4,244.313,256.571,425.146,75.738,244.313a96,96,0,0,1,0-135.764l6.911-6.91a96,96,0,0,1,135.713-.051l38.093,38.787,38.274-38.736a96,96,0,0,1,135.765,0l6.91,6.909A96.11,96.11,0,0,1,437.4,244.313Z"></path>
                                </svg>
                                <span>Add to favorites</span>
                            </button>
                        </div> */}
                    </div>
                </div>
            </li>
        </ul>
        <div className='flex justify-between w-full pb-2 space-x-2'>
        <div className='text-xxxmedium text-grey70 font-nunito'>Sub Total</div>
        <div className='text-xxxmedium text-black1a font-nunito text-right font-semibold'>357 €</div>
        </div>
        <div className="flex-row justify-center">
        <div>
          <button type="submit" className="py-3 px-5 font-nunito mt-4 text-center text-black font-semibold bg-line text-xxmedium uppercase rounded  w-full"
            data-mdb-ripple="true"
            data-mdb-ripple-color="light">VIEW CART</button>
        </div>
        <div>
          <button type="submit" className="py-3 px-5 font-nunito mt-4 text-center text-white font-semibold bg-brown text-xxmedium uppercase rounded  w-full"
            data-mdb-ripple="true"
            data-mdb-ripple-color="light">CHECKOUT</button>
        </div>
        </div>
        </div>
    )
    
}

export default CartPanel