'use client'
import Image from 'next/image'
import Team from '../components/Pages/aboutPage/Team'
import About from '../components/Pages/aboutPage/About'
import element1 from '../assets/image/elements/element1.png'
import PagesHero from '../components/sheard/pagesHero/PagesHero'
import ReactLenis from '@studio-freight/react-lenis'


export default function page() {
    return (
        <ReactLenis root="html" options={{ lerp: 0.1, duration: 1.5 }}>
            <Image src={element1} alt='element1' className=' h-[50rem] w-[50rem] opacity-50 fixed -top-12 -right-96 z-[1]' />
            <Image src={element1} alt='element1' className=' h-[50rem] w-[50rem] opacity-50 fixed top-48 -left-[26rem] z-[1]' />
            <PagesHero title='Get To Know Us' text='Discover our passion for innovation and technology. At Notex, we craft digital solutions with expertise, creating exceptional experiences for our clients in every project we undertake.' />
            <About />
            <Team />
        </ReactLenis>
    )
}
