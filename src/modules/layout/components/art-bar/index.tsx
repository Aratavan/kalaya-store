
import { EnvelopeIcon, PhoneIcon } from '@heroicons/react/24/outline'

const Artbar = () => {
    return (
        <div className='art-container p-5 bg-artgrey text-artblack h-12 font-nunito'>
            <div className="flex justify-start">
                <div className="art-email pl-16 text-sm font-normal flex items-center">
                    <span className='pr-[8px]'>
                        <img className='w-4' src="./Email.svg" alt="email" />
                    </span>
                    <span>info@aratavan.com</span>
                </div>
                <div className="art-number pl-10 text-sm font-normal flex items-center">
                    <span className='pr-[0px]'>
                        <img className='w-4' src="./Phone.svg" alt="phone" />
                    </span>
                    <span>+456 789 000</span>
                </div>

            </div>
            <div className="flex justify-end mt-[-48px] mr-[68px]">
                <div><span className='pl-[40px]'>
                    <img className='w-5 cursor-pointer' src="./Facebook.svg" alt="Facebook" />
                </span></div>
                <div><span className='pl-[30px]'>
                    <img className='w-5 cursor-pointer' src="./Twitter.svg" alt="Twitter" />
                </span></div>
            </div>

        </div>
    )
}

export default Artbar

