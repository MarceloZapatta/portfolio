"use client";

import Image from "next/image";
import HeaderItem from "./HeaderItem";
import HeaderMobile from "./HeaderMobile";
import "./Header.scss";
import { useState } from "react";
import LanguageSwitcher from "./LanguageSwitcher";
import { useTranslation } from "react-i18next";

interface HeaderProps {
  activePage: string;
}

export default function Header(props: HeaderProps) {
  const { activePage } = props;

  const navItems = ["Home", "About", "Skills", "Projects", "Contact"];

  const [mobileHeaderOpen, setMobileHeaderOpen] = useState(false);
  const { t } = useTranslation();

  return (
    <>
      <nav
        id="Header"
        className="fixed top-0 flex border-b border-hoolywood-cerise z-40 text-xl
    justify-between items-center px-4 bg-night min-w-full h-14"
      >
        <a
          href={`#${t("Menu.Home")}`}
          className="text-white logo custom-cursor-pointer"
        >
          &lt;
          <span className="text-hoolywood-cerise">MarceloZapatta</span>
          /&gt;
        </a>
        <Image
          src="/portfolio/hamburguer.svg"
          width={24}
          height={24}
          priority
          alt="Menu mobile"
          className="lg:hidden custom-cursor-pointer"
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
      <LanguageSwitcher />
    </>
  );
}
