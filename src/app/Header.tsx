"use client";

import Image from "next/image";
import HeaderItem from "./HeaderItem";
import HeaderMobile from "./HeaderMobile";
import "./Header.scss";
import { useState } from "react";

interface HeaderProps {
  activePage: string;
}

export default function Header(props: HeaderProps) {
  const { activePage } = props;

  const navItems = ["Home", "About", "Skills", "Projects", "Contact"];

  const [mobileHeaderOpen, setMobileHeaderOpen] = useState(false);

  return (
    <>
      <nav
        id="Header"
        className="fixed top-0 flex border-b border-hoolywood-cerise z-40 text-xl
    justify-between items-center px-4 bg-night min-w-full h-14"
      >
        <a href="#Home" className="text-white logo">
          &lt;
          <span className="text-hoolywood-cerise">MarceloZapatta</span>
          /&gt;
        </a>
        <Image
          src="/hamburguer.svg"
          width={24}
          height={24}
          priority
          alt="Menu mobile"
          className="lg:hidden cursor-pointer"
          onClick={() => setMobileHeaderOpen(true)}
        />
        <div className="gap-8 items-center hidden lg:flex">
          {navItems.map((navItem) => (
            <HeaderItem key={navItem} active={activePage === navItem}>
              {navItem}
            </HeaderItem>
          ))}
        </div>
      </nav>
      <HeaderMobile
        navItems={navItems}
        activePage={activePage}
        show={mobileHeaderOpen}
        onClose={() => setMobileHeaderOpen(false)}
      />
    </>
  );
}
