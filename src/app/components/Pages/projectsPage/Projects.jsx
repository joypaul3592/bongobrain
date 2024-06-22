'use client'
import Button from "@/app/components/sheard/button/Button";
import { BiCodeAlt, BiLink, BiLogoGithub } from "react-icons/bi";
import project1 from '../../../assets/image/project/project1.jpg'
import project2 from '../../../assets/image/project/project2.png'
import project3 from '../../../assets/image/project/project3.png'
import project4 from '../../../assets/image/project/project4.png'
import Image from "next/image";
import TitleBox from "../../uiKit/TitleBox";
import { usePathname } from "next/navigation";

export default function Projects() {
    const pathname = usePathname();
    const projects = [
        {
            id: 1,
            imgSrc: project1,
            title: 'Learning Management Application',
            Animation: 'fade-down'
        },
        {
            id: 2,
            imgSrc: project2,
            title: 'E-Commerce Application',
            Animation: 'fade-up'
        },
        {
            id: 3,
            imgSrc: project3,
            title: 'Booking Application',
            Animation: 'fade-down'
        },
        {
            id: 4,
            imgSrc: project4,
            title: 'Social Application',
            Animation: 'fade-up'
        },
    ];
    return (
        <div className="z-[10] relative pt-28 pb-10">
            <TitleBox tag='Our Projects' title1='A Pictorial Journey ' title2='Through Our Projects' />
            <div className=" mt-10 flex flex-wrap items-center justify-center gap-14 py-10 lg:px-40">

                {
                    projects.slice(pathname === '/projects' ? 0 : 0, pathname === '/projects' ? projects.length : 3).map(project => <div key={project?.id} data-aos={project?.Animation} className=" 2xl:w-[47%] sm:w-[45%] relative group cursor-pointer ">
                        <div className="rounded-xl overflow-hidden">
                            <Image src={project?.imgSrc} alt="project1" className="transition-all ease-linear duration-200  group-hover:scale-110" />
                        </div>
                        <div className=" absolute top-0 left-0 w-full h-full bg-[#121804] bg-opacity-50 z-[1] transition-all ease-linear duration-200 group-hover:opacity-100 opacity-0 group-hover:visible invisible"></div>
                        <div className="absolute left-0 top-0 h-full w-full flex flex-col items-center  justify-start 2xl:pt-28 xl:pt-20 pt-12">
                            <h1 className=" xl:text-xl text-lg font-medium text-white mt-[-10%] z-[12] relative group-hover:mt-[0%]  group-hover:opacity-100 opacity-0 group-hover:visible invisible transition-all ease-linear duration-200">{project?.title}</h1>

                            <div className=" relative z-[10] mt-[-2%]  group-hover:mt-[3%]  group-hover:opacity-100 opacity-0 group-hover:visible invisible transition-all ease-linear duration-200">
                                <Button type='button' text='See Live' isFill={true} icon={<BiCodeAlt />} />
                            </div>

                            <div className=" absolute transition-all ease-linear duration-200 invisible group-hover:visible bottom-10 group-hover:bottom-8 left-0 w-full group-hover:opacity-100 opacity-0  z-[10]">
                                <div className=" h-32 overflow-hidden rounded-b-lg w-full z-[10] relative">
                                    <Image src={project1} alt="project1" className=" absolute top-10 w-1/2 -rotate-12" />
                                    <Image src={project1} alt="project1" className="absolute right-0   top-10 w-1/2 rotate-12" />
                                </div>
                            </div>
                        </div>

                        <div className=" text-lime-400 z-[10] relative text-2xl flex items-center justify-between mt-2 ">
                            <div className=" flex items-center gap-7">
                                <BiLink className=" cursor-pointer hover:text-white" />

                                <BiLogoGithub className=" cursor-pointer hover:text-white" />
                            </div>
                            <BiCodeAlt className=" cursor-pointer hover:text-white" />
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