import Image from 'next/image'
import error from './assets/image/error/error.png'
import { MdOutlineAddIcCall } from 'react-icons/md'
import Button from './components/sheard/button/Button'
import { HiOutlineArrowNarrowLeft } from 'react-icons/hi'


export default function NotFound() {
    return (
        <div className="text-white  h-[75vh] flex flex-col items-center justify-center">
            <Image src={error} alt='error' className=' w-[200px] md:w-[300px] h-auto mx-auto' />
            <h1 className="text-center md:text-2xl text-xl mt-5">This page could not be found.</h1>
            <div className=' flex justify-center mt-5 gap-5'>
                <Button type='button' text='Go Home' isFill={false} icon={<HiOutlineArrowNarrowLeft />} href={'/'} />
                <Button type='button' text='Contact' isFill={false} icon={<MdOutlineAddIcCall />} href={'/contact'} />
            </div>
        </div>
    )
}
