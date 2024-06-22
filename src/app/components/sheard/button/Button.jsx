import Link from "next/link";

export default function Button({ text, icon, isFill, href, ...res }) {
    return (
        <Link href={href ? href : ''}
            className={` ${isFill ? "bg-green-400 border border-green-400 text-black hover:bg-transparent hover:text-green-400" : "border border-green-400 hover:text-black text-green-400 hover:bg-green-400"}     text-center inline-block  transition-all ease-linear duration-100 md:py-[5px] py-1 md:px-[18px] px-3 text-[14px] md:text-base  rounded-full`}
            {...res}
        >
            <span className="relative font-medium flex items-center justify-center gap-1.5">
                {icon}
                {text}
            </span>
        </Link>
    );
}