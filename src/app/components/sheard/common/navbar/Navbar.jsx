"use client"
import { useState } from "react";
// components
import Menu from "./Menu";
import Logo from "./Logo";
import Row from "../../row/Row";
import MobileMenu from "./MobileMenu";
import Button from "../../button/Button";
// icons
import { CgMenuLeft } from "react-icons/cg";
import { MdOutlineAddIcCall } from "react-icons/md";

export default function Navbar() {
    const [open, setOpen] = useState(false)
    return (
        <div data-aos="fade-down"
            data-aos-easing="linear"
            data-aos-duration="1000" className="bg-[#111204] sticky top-0 z-[100] bg-opacity-50 backdrop-blur-lg">
            <div className='container mx-auto 2xl:px-20 xl:px-10 px-2 py-3 flex items-center justify-between '>
                <CgMenuLeft onClick={() => setOpen(true)} className=' text-2xl text-[#B9FD50] cursor-pointer md:hidden' />
                <Logo />
                <Menu />
                <MobileMenu setOpen={setOpen} open={open} />
                <Button type='button' text='Contact' isFill={true} href='/contact' icon={<MdOutlineAddIcCall />} />
            </div>
            <Row />
        </div>
    )
}
