'use client'
import Image from "next/image";
import TitleBox from "../../uiKit/TitleBox";
import { usePathname } from "next/navigation";
import Button from "@/app/components/sheard/button/Button";
import { BiCodeAlt, BiLink, BiLogoGithub } from "react-icons/bi";
import project1 from '../../../assets/image/project/project4.png'
import project2 from '../../../assets/image/project/project2.png'
import project3 from '../../../assets/image/project/project3.png'
import project4 from '../../../assets/image/project/project1.png'
import project5 from '../../../assets/image/project/project5.png'
import project6 from '../../../assets/image/project/project6.png'
import project7 from '../../../assets/image/project/project7.png'
import project8 from '../../../assets/image/project/project8.png'


export default function Projects() {
    const pathname = usePathname();
    const projects = [
        {
            id: 1,
            imgSrc: project1,
            title: 'GO EC',
            Animation: 'fade-down',
            livelink: 'https://www.goecworld.com/'
        },
        {
            id: 2,
            imgSrc: project2,
            title: 'IQ Social',
            Animation: 'fade-up',
            livelink: 'https://iqsonet.com/'
        },
        {
            id: 3,
            imgSrc: project3,
            title: 'iQ Barter',
            Animation: 'fade-down',
            livelink: 'https://www.iqbarter.com/'
        },
        {
            id: 4,
            imgSrc: project4,
            title: 'IshQool',
            Animation: 'fade-up',
            livelink: 'https://www.ishqool.com/'
        },
        {
            id: 5,
            imgSrc: project5,
            title: 'Medullas',
            Animation: 'fade-up',
            livelink: 'https://leafy-hamster-123e43.netlify.app/'
        },
        {
            id: 6,
            imgSrc: project6,
            title: 'TasteBudTales',
            Animation: 'fade-down',
            livelink: null
        },
        {
            id: 7,
            imgSrc: project7,
            title: 'Timber-Grove',
            Animation: 'fade-up',
            livelink: null
        },
        {
            id: 8,
            imgSrc: project8,
            title: 'TrendLine',
            Animation: 'fade-down',
            livelink: null
        },
    ];
    return (
        <div className="z-[10] relative pt-28 pb-10">
            <TitleBox tag='Our Projects' title1='A Pictorial Journey ' title2='Through Our Projects' />
            <div className=" mt-10 flex flex-wrap items-center justify-center gap-14 py-10 lg:px-40">

                {
                    projects.slice(pathname === '/projects' ? 0 : 0, pathname === '/projects' ? projects.length : 3).map(project => <div key={project?.id} data-aos={project?.Animation} className=" 2xl:w-[47%] sm:w-[45%] relative group cursor-pointer overflow-hidden rounded-b-xl ">
                        <div className="rounded-xl overflow-hidden">
                            <Image src={project?.imgSrc} alt="project1" className="transition-all ease-linear duration-200  group-hover:scale-110" />
                        </div>
                        <div className=" absolute top-0 left-0 w-full h-full bg-[#121804] bg-opacity-50 z-[1] transition-all ease-linear duration-200 group-hover:opacity-100 opacity-0 group-hover:visible invisible"></div>
                        <div className="absolute left-0 top-0 h-full w-full flex flex-col items-center  justify-start 2xl:pt-28 xl:pt-20 pt-12">
                            <h1 className=" xl:text-xl text-lg font-medium text-white mt-[-10%] z-[12] relative group-hover:mt-[0%]  group-hover:opacity-100 opacity-0 group-hover:visible invisible transition-all ease-linear duration-200">{project?.title}</h1>

                            <div className=" relative z-[10] mt-[-2%]  group-hover:mt-[3%]  group-hover:opacity-100 opacity-0 group-hover:visible invisible transition-all ease-linear duration-200">
                                {
                                    project?.livelink !== null && <Button type='button' text='See Live' isFill={true} icon={<BiCodeAlt />} href={project?.livelink} isNewTab={true} />
                                }

                            </div>

                            <div className=" absolute transition-all ease-linear duration-200 invisible group-hover:visible -bottom-5 group-hover:bottom-0 left-0 w-full group-hover:opacity-100 opacity-0  z-[10]">
                                <div className=" h-32 overflow-hidden rounded-b-lg w-full z-[10] relative">
                                    <Image src={project?.imgSrc} alt="project1" className=" absolute top-10 w-1/2 -rotate-12" />
                                    <Image src={project?.imgSrc} alt="project1" className="absolute right-0   top-10 w-1/2 rotate-12" />
                                </div>
                            </div>
                        </div>
                    </div>)
                }
            </div>

            {
                pathname !== '/projects' && <div data-aos="fade-down" className=' flex justify-center mt-5'>
                    <Button type='button' text='See More Projects' isFill={false} href='/projects' icon={<BiCodeAlt />} />
                </div>
            }
        </div>
    )
}