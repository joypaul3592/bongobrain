import Link from "next/link";
import Image from "next/image";
import logo from '../../../../assets/image/logo/logoWhite.png'

export default function Logo() {
    return (
        <Link href={`/`}>
            <Image
                src={logo}
                alt="logo image"
                className="w-32"
            />
        </Link>
    )
}
