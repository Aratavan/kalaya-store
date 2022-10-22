import { HomeIcon } from '@heroicons/react/24/outline'
import Link from 'next/link';

type BreadCrumbProps = {
  title: string
}

const BreadCrumb: React.FC<BreadCrumbProps> = ({title}) => {
  return (
    <>
      <div className="px-[75px] flex flex-row pt-5 pb-4 items-center">
        <Link href='/'>
          <div className='flex items-center cursor-pointer'>
            <HomeIcon className=' w-[16px] h-[16px] text-line'></HomeIcon>
            <span className="px-[4px] text-small text-line">Home</span>
          </div>
        </Link>
        <img className=" w-[16px] h-[16px]" src="/front-arrow.svg" alt="arrow" />
        <span className='px-[7px] text-small text-black'>
          {title}
          </span>
      </div>
    </>
  )
}

export default BreadCrumb;