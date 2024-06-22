'use client'
/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import Image from "next/image";
import team1 from '../../../assets/image/team/team1.jpg';
import team2 from '../../../assets/image/team/team2.jpg';
import team3 from '../../../assets/image/team/team3.jpg';
import team4 from '../../../assets/image/team/team4.jpg';
import team5 from '../../../assets/image/team/team5.jpg';
import team6 from '../../../assets/image/team/team6.jpg';
import team7 from '../../../assets/image/team/team7.jpg';
import team8 from '../../../assets/image/team/team8.jpg';
import TitleBox from "../../uiKit/TitleBox";


const Team = () => {
    const [isHover, setIsHover] = useState(null);
    const teamsData = [
        {
            id: 1,
            name: 'Stacey Cooper',
            designation: 'Software Developer',
            text: 'As our dedicated team lead, Arif Islam guides with expertise, fostering collaboration and driving innovation, ensuring project success and client satisfaction.',
            img: team1
        },
        {
            id: 2,
            name: 'John Doe',
            designation: 'Frontend Developer',
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
            img: team2
        },
        {
            id: 3,
            name: 'Jane Smith',
            designation: 'Backend Developer',
            text: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
            img: team3
        },
        {
            id: 4,
            name: 'Alex Johnson',
            designation: 'UI/UX Designer',
            text: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
            img: team4
        },
        {
            id: 5,
            name: 'Emily Davis',
            designation: 'Project Manager',
            text: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
            img: team5
        },
        {
            id: 6,
            name: 'Mike Brown',
            designation: 'Quality Assurance',
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
            img: team6
        },
        {
            id: 7,
            name: 'Amanda White',
            designation: 'Data Scientist',
            text: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
            img: team7
        },
        {
            id: 8,
            name: 'Chris Wilson',
            designation: 'DevOps Engineer',
            text: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
            img: team8
        }
    ];

    useEffect(() => {
        const intervalId = setInterval(() => {
            if (!isHover) {
                const random = Math.floor(Math.random() * teamsData.length);
                setIsHover(teamsData[random]?.id);
            }
        }, 3000);
        return () => clearInterval(intervalId);
    }, [isHover, teamsData]);

    useEffect(() => {
        const changeIsHoverAfterDelay = setTimeout(() => {
            const random = Math.floor(Math.random() * teamsData.length);
            setIsHover(teamsData[random]?.id);
        }, 3000);
        return () => clearTimeout(changeIsHoverAfterDelay);
    }, [isHover, teamsData]);

    return (
        <div>
            <TitleBox tag='Team' title1='Our' title2=' Creative Minds' />
            <div className="pt-48  pb-0 2xl:w-9/12 xl:w-10/12 w-full mx-auto z-[10] relative sm:flex grid grid-cols-2 gap-16  flex-wrap justify-center ">
                {teamsData?.map((team) => (
                    <div key={team?.id} className="relative sm:flex-none flex sm:justify-normal justify-center ">
                        <Image
                            onMouseEnter={() => setIsHover(team?.id)}
                            onMouseLeave={() => setIsHover(null)}
                            src={team?.img}
                            alt={`team${team?.id}`}
                            className={`rounded-full border-2 border-lime-400 w-20 h-20 cursor-pointer  ${team?.id % 2 ? '-mt-16' : 'mt-16'}`}
                        />
                        <div className={`absolute sm:w-[22rem] w-[16rem]  transition-all ease-linear duration-200 z-[100] ${team?.id % 2 ? 'bottom-[14rem] sm:-left-36 left-0 ' : 'sm:bottom-24 bottom-[6rem] sm:-left-36 -left-[8.8rem] '}  ${isHover === team?.id ? 'visible  scale-100' : 'invisible  scale-0'}`}>
                            <div className="bg-gradient-to-r from-[#10110f48] via-[#a3f8053b] to-[#0000] w-full rounded-md p-3 text-center relative border border-lime-900 bg-[#111204]">
                                <h3 className="text-xl font-medium text-lime-400">{team?.name}</h3>
                                <div className="text-sm text-gray-300">{team?.designation}</div>
                                <div className="border-b border-dashed border-lime-400 mb-4 mt-3"></div>
                                <p className="text-white">
                                    {team?.text}
                                </p>
                                <svg className={`w-6 h-3 rotate-90 absolute -bottom-[13px] ${team?.id % 2 ? 'sm:left-[49%] left-[10%]' : 'sm:left-[49%] left-[75%]'} `} viewBox="0 0 100 100">
                                    <path d="M0 0 L100 50 L0 100 Z" fill="#a3f80548" className="z-[-1]" />
                                </svg>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Team;