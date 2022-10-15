
import { EnvelopeIcon, PhoneIcon } from '@heroicons/react/24/outline'

const Artbar = () => {
    return (
    <div className="art-container container flex flex-row p-5 bg-artgrey text-artblack h-14">
        
        <div className="art-email pl-20 text-sm font-normal flex items-center">
            <span className='pr-1'>
            <EnvelopeIcon className='w-3'></EnvelopeIcon>
            </span>
            <span>info@aratavan.com</span>
        </div>
        <div className="art-number pl-10 text-sm font-normal flex items-center">
            <span className='pr-1'>
                <PhoneIcon className='w-3'></PhoneIcon>
            </span>
            <span>+456 789 000</span>
        </div>
    </div>
    )
}

export default Artbar

