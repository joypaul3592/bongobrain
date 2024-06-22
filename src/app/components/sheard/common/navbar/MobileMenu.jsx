"use client"
import Link from "next/link";
import menuList from '../../../../assets/json/menulist.json';
import Logo from "./Logo";
import Button from "../../button/Button";
import { usePathname } from "next/navigation";
// icons
import { RxCross2 } from "react-icons/rx";
import { RiUser3Line } from "react-icons/ri";
import { HiOutlineHome } from "react-icons/hi";
import { PiSlideshowBold } from "react-icons/pi";
import { MdOutlineAddIcCall, MdOutlineSpaceDashboard } from "react-icons/md";

export default function MobileMenu({ setOpen, open }) {
  const pathname = usePathname();
  const icons = {
    Home: <HiOutlineHome />,
    About: <RiUser3Line />,
    Service: <MdOutlineSpaceDashboard />,
    Projects: <PiSlideshowBold />,
  };

  return (
    <>
      <div onClick={() => setOpen(false)} className={`fixed top-0 left-0 w-screen h-screen bg-[#1112044b] z-[1] md:hidden ${open ? "visible opacity-100" : "invisible  opacity-0"}`}></div>
      <div onClick={(e) => e.stopPropagation()} className={`fixed  top-0 sm:w-1/2 w-2/3 h-screen bg-[#111204] bg-opacity-50 backdrop-blur-xl flex flex-col justify-between p-10 z-[2] border-r-[1px] border-[#b8fd505e] transition-all ease-linear duration-200 md:hidden ${open ? "visible left-0 opacity-100" : "invisible -left-52 opacity-0"}`}>
        <RxCross2 onClick={() => setOpen(false)} className=" absolute top-5 right-5 text-[#B9FD50] hover:text-red-500 cursor-pointer text-2xl" />
        <div className="flex justify-center mt-10">
          <Logo />
        </div>
        <div className="md:hidden flex flex-col items-start xl:gap-14 gap-10 font-semibold text-[16px]">
          {menuList?.map(menu => (
            <Link key={menu?.id}
              href={menu?.link}
              className={`hover:text-[#B9FD50] flex items-center gap-2.5 ${pathname === menu.link ? 'text-[#B9FD50]' : 'text-gray-300 '}`}
            >
              {icons[menu.name]}
              {menu?.name}
            </Link>
          ))}
        </div>
        <Button type='button' text='Contact' isFill={true} icon={<MdOutlineAddIcCall />} />
      </div>

    </>
  );
}
