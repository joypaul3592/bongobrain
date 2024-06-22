'use client'
import Image from "next/image";
import element1 from '../assets/image/elements/element1.png'
import PagesHero from "../components/sheard/pagesHero/PagesHero";
import Projects from "../components/Pages/projectsPage/Projects";
import ReactLenis from "@studio-freight/react-lenis";

export default function page() {
    return (
        <ReactLenis root="html" options={{ lerp: 0.1, duration: 1.5 }}>
            <Image src={element1} alt='element1' className=' h-[50rem] w-[50rem] opacity-50 fixed -top-12 -right-96 z-[1]' />
            <Image src={element1} alt='element1' className=' h-[50rem] w-[50rem] opacity-50 fixed top-48 -left-[26rem] z-[1]' />
            <PagesHero title='Awesome Projects' text='Explore our diverse project showcase, a testament to innovation and expertise. From web development to digital marketing, each project reflects our commitment to excellence and client success.' />
            <Projects />
        </ReactLenis>
    )
}
