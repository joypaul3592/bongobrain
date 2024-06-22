'use client'
import Image from "next/image";
import ContactFrom from "./ContactFrom";
import ContactInfo from "./ContactInfo";
import element1 from '../assets/image/elements/element1.png'
import PagesHero from "../components/sheard/pagesHero/PagesHero";
import ReactLenis from "@studio-freight/react-lenis";
export default function page() {
    return (
        <ReactLenis root="html" options={{ lerp: 0.1, duration: 1.5 }}>
            <Image src={element1} alt='element1' className=' h-[50rem] w-[50rem] opacity-50 fixed -top-12 -right-96 z-[1]' />
            <Image src={element1} alt='element1' className=' h-[50rem] w-[50rem] opacity-50 fixed top-48 -left-[26rem] z-[1]' />
            <PagesHero title='Contact' text='Connect with us effortlessly through our Contact page. Whether you have inquiries, suggestions, or just want to say hello, we are here to listen and respond promptly. Reach out today!' />
            <ContactFrom />
            <ContactInfo />
        </ReactLenis>
    )
}
