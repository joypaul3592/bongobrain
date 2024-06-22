'use client'
import { BiCodeAlt } from "react-icons/bi";
import TitleBox from "../../uiKit/TitleBox";
import { usePathname } from "next/navigation";
import services from '../../../assets/json/services.json'
import Button from "@/app/components/sheard/button/Button";
import ServiceCard from "@/app/components/sheard/card/ServiceCard";

export default function Services({ isBtn = true }) {
    const pathname = usePathname();
    return (
        <div className="z-[10] relative pt-32">
            <TitleBox tag='Our Services' title1='Exceptional Service' title2='Digital Solutions For You' />
            {
                pathname !== '/service' ? <div className=" grid xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-4 py-12">
                    {
                        services?.map(service => <ServiceCard key={service?.id} service={service} />)
                    }
                </div> : <div className=" flex items-center flex-wrap justify-center lg:gap-10 gap-7 py-12 lg:px-20 px-10 sm:px-0">
                    {
                        services?.map(service => <div key={service?.id} className=" lg:w-[30%] sm:w-[45%] w-full"><ServiceCard service={service} /></div>)
                    }
                </div>
            }

            {
                isBtn && <div data-aos="fade-up" className=' flex justify-center mt-5'>
                    <Button type='button' text='See More Services' isFill={false} href='/service' icon={<BiCodeAlt />} />
                </div>
            }
        </div>
    )
}