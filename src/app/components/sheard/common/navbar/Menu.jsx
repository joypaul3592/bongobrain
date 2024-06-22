"use client"
import Link from 'next/link'
import { usePathname } from 'next/navigation';
import menuList from '../../../../assets/json/menulist.json'
export default function Menu() {
    const pathname = usePathname();
    return (
        <div className=" hidden md:flex items-center xl:gap-14 gap-10 font-semibold text-[16px]">
            {
                menuList?.map(menu => <Link key={menu?.id}
                    href={menu?.link}
                    className={` hover:text-green-400  ${pathname === menu.link ? 'text-green-400' : 'text-gray-300'}`}
                >
                    {menu?.name}
                </Link>)
            }
        </div>
    )
}
