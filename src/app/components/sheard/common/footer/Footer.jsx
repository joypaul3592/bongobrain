'use client'
import Link from "next/link";
import Logo from "../navbar/Logo";
import Row from "../../row/Row";
import menuList from '../../../../assets/json/menulist.json'
import { usePathname } from "next/navigation";

export default function Footer() {
    const pathname = usePathname();
    return (
        <footer data-aos="fade-down"
            data-aos-easing="linear"
            data-aos-duration="1000" className=" container mx-auto py-4 md:py-8 mt-14 2xl:px-20 xl:px-10 px-2">
            <div className="flex sm:flex-row flex-col items-center justify-center sm:justify-between mb-3">
                <Logo />
                <div className=" flex flex-wrap sm:flex-nowrap items-center sm:gap-10 gap-5 gap-y-1 sm:gap-y-0 mt-3 sm:mt-0 justify-center sm:justify-normal">
                    {menuList.map((menu, index) => (
                        <Link key={index} className={`text-[14px] hover:text-green-400 font-medium ${pathname === menu.link ? 'text-green-400' : 'text-gray-300'}`} href={menu.link}>{menu.name}</Link>
                    ))}
                </div>
            </div>
            <Row />
            <span className="block text-sm text-gray-500 text-center dark:text-gray-400 mt-3"><span className=" text-green-400">© </span>2023 <span className=" text-green-400">Notex</span> . All Rights Reserved.</span>
        </footer >
    )
}
