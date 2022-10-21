import { HomeIcon } from '@heroicons/react/24/outline'
import Link from 'next/link';

const BreadCrumb = () => {
  return (
    <>
      <div className="px-[75px] flex flex-row pt-5 pb-4 items-center">
        <Link href='/'>
          <div className='flex items-center'>
            <HomeIcon className=' w-[16px] h-[16px] text-line'></HomeIcon>
            <span className="px-[4px] text-small text-line">Home</span>
          </div>
        </Link>
        <img className=" w-[16px] h-[16px]" src="/front-arrow.svg" alt="arrow" />
        <span className='px-[7px] text-small text-black'>Product Details</span>
      </div>
    </>
  )
}

export default BreadCrumb;