"use client"
import Image from "next/image";
import { useState, useEffect } from "react";

import Logo from "@/public/Logo.svg";
import emptyCart from "@/public/cart-svgrepo-com 1.svg";
import cartFilled from "@/public/FilledCart.svg";

export default function Navbar() {
  // Simulated backend response (will be set dynamically later)
  const isCartEmpty = true; // Set to 'false' to simulate a filled cart

  const [empty, setEmpty] = useState(isCartEmpty);
  const [cart, setCart] = useState(emptyCart);

  useEffect(() => {
    if (empty) {
      setCart(emptyCart);
    } else {
      setCart(cartFilled);
    }
  }, [empty]);

  const styling = "text-base font-regular cursor-pointer hover:text-[#52525B] ease-in-out transition-colors duration-300 hover:underline";
  const backgroundColor = "text-[#A1A1AA]";

  return (
    <nav className="w-full px-[96px] py-[16px] flex flex-row justify-between">
      <Image src={Logo} height={52} width={104} alt="Logo" />
      <div className="flex flex-row gap-[48px] items-center">
      <ul className="flex flex-row gap-[32px] items-center">
        <li className={`${styling} ${backgroundColor}`}>
          Store
        </li>
        <li className={`${styling} ${backgroundColor}`}>
          Custom Request
        </li>
        <li className={`${styling} ${backgroundColor}`}>
          About
        </li>

      </ul>
      <Image src={cart} height={24} width={24} alt="Cart"  className="cursor-pointer"/>
      </div>
      
    </nav>
  );
}
