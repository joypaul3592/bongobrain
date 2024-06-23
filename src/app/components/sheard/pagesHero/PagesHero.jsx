'use client'
import Image from "next/image";
import element2 from '../../../assets/image/elements/element8.png'
import element3 from '../../../assets/image/elements/element9.png'
import ScrollDown from "../../uiKit/ScrollDown";

export default function PagesHero({ title, text }) {
    return (
        <div className="sm:pt-10 pt-5 mt-20 relative">
            <h1 data-aos="fade-down" class="text-center sm:text-6xl text-5xl font-bold text-green-400 ">{title}</h1>
            <p data-aos="fade-up" className=" text-white text-center lg:w-8/12 md:w-11/12 mx-auto mt-5">{text}</p>
            <ScrollDown />
            <Image data-aos="fade-in" src={element2} alt='element1' className=' sm:w-28 w-20 left-20 absolute 2xl:-top-16 sm:-top-20 -top-[4.5rem]' />
            <Image data-aos="fade-down" src={element3} alt='element1' className=' sm:w-28 w-20 absolute lg:top-[84%] top-[80%] lg:right-32 sm:right-40 right-12' />
        </div>
    )
}