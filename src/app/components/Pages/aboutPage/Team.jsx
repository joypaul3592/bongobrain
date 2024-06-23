'use client'
/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import Image from "next/image";
import team1 from '../../../assets/image/team/team1.jpg';
import team2 from '../../../assets/image/team/team2.jpg';
import team3 from '../../../assets/image/team/team3.jpg';
import team4 from '../../../assets/image/team/team4.jpg';
import team5 from '../../../assets/image/team/team5.jpg';
import team6 from '../../../assets/image/team/team6.png';
import team7 from '../../../assets/image/team/team7.jpeg';
import team8 from '../../../assets/image/team/team8.jpg';

import TitleBox from "../../uiKit/TitleBox";


const Team = () => {
    const [isHover, setIsHover] = useState(null);
    const teamsData = [
        {
            id: 1,
            name: 'SHAHREAR ALAM MARUF',
            designation: 'Project Manager',
            text: 'Shahrear Alam Maruf is a skilled project manager and developer known for delivering high-quality projects on time and within budget.',
            img: team1
        },
        {
            id: 2,
            name: 'SANJID HASAN',
            designation: 'RND & CTO',
            text: 'Shanjid Hasan is the R&D and CTO, driving innovation and technology advancements.',
            img: team2
        },
        {
            id: 3,
            name: 'JOY PAUl',
            designation: 'Frontend Developer',
            text: 'Joy Paul is a experience frontend developer, specializing in creating responsive and user-friendly web interfaces.',
            img: team3
        },
        {
            id: 4,
            name: 'G K ANIM',
            designation: 'Business Executive',
            text: 'G K Anim is a strategic and results-driven business executive with a strong track record of driving growth and innovation.',
            img: team4
        },
        {
            id: 5,
            name: 'TARIKUL ISLAM SHYKAT',
            designation: 'App Developer',
            text: 'Tarikul Islam Shykat is an innovative app developer with a talent for creating user-friendly and high-performance mobile applications.',
            img: team5
        },
        {
            id: 6,
            name: 'KAWSER AHMED',
            designation: 'Backend Developer',
            text: 'Kawser Ahmed is an experienced backend developer specializing in building robust and scalable server-side applications.',
            img: team6
        },
        {
            id: 7,
            name: 'TASEEN IMAM TURJO',
            designation: 'WordPress DevelopeR',
            text: 'Taseen Imam Turjo is a passionate and dedicated WordPress developer committed to creating visually appealing, highly functional, and user-friendly websites.',
            img: team7
        },

        {
            id: 8,
            name: 'SHARFORAZ RAHMAN SWACHA',
            designation: 'Backend DevelopeR',
            text: 'Sharforaz Rahman Swacha is a backend developer, specializing in server-side logic and database management.',
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
                            className={`rounded-full border-2 border-green-400 w-20 h-20 cursor-pointer  ${team?.id % 2 ? '-mt-16' : 'mt-16'}`}
                        />
                        <div className={`absolute sm:w-[22rem] w-[16rem]  transition-all ease-linear duration-200 z-[100] ${team?.id % 2 ? 'bottom-[14rem] sm:-left-36 left-0 ' : 'sm:bottom-24 bottom-[6rem] sm:-left-36 -left-[8.8rem] '}  ${isHover === team?.id ? 'visible  scale-100' : 'invisible  scale-0'}`}>
                            <div className="bg-gradient-to-r from-[#10110f48] via-[#3ef8053b] to-[#0000] w-full rounded-md p-3 text-center relative border border-green-900 bg-[#111204]">
                                <h3 className="text-xl font-medium text-green-400">{team?.name}</h3>
                                <div className="text-sm text-gray-300">{team?.designation}</div>
                                <div className="border-b border-dashed border-green-400 mb-4 mt-3"></div>
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