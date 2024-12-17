import Image from "next/image";

import Logo from "@/public/Logo.svg"
const styling = "text-base font-regular text-[#A1A1AA] cursor-pointer hover:text-[#52525B] ease-in-out trasition-colors duration-300 hover:underline"

export default function Navbar() {
  return (
    <nav className="w-full px-[96px] py-[16px] flex flex-row justify-between">
        <Image src={Logo} height={52} width={104} alt="Logo"/>
        <ul className="flex flex-row gap-[32px] items-center">
            <li className={styling}>
            Store
            </li>
            <li className={styling}>
               Custom Request 
            </li>
            <li className={styling}>
                About
            </li>
        </ul>
    </nav>
  )
}
