import Image from "next/image";
import HeaderMobileItem from "./HeaderMobileItem";
import { useState } from "react";
import { NavItem } from "./Header";

interface HeaderMobileProps {
  activePage: string;
  navItems: string[];
  show: boolean;
  onClose: () => void;
}

export default function HeaderMobile(props: HeaderMobileProps) {
  const { navItems, show, onClose, activePage } = props;
  const [onClosing, setOnClosing] = useState(false);

  function handleOnClose() {
    setOnClosing(true);

    setTimeout(() => {
      setOnClosing(false);
      onClose();
    }, 1000);
  }

  return (
    <nav
      className={`fixed top-0 min-h-full min-w-full bg-night z-50 ${
        show ? "animate__animated animate__slideInRight" : "hidden"
      }
      ${onClosing ? "animate__animated animate__slideOutRight" : ""}`}
    >
      <div className="flex justify-end items-center h-14 text-white border-b border-hoolywood-cerise px-3 cursor-pointer">
        <Image
          src="/close.svg"
          width={24}
          height={24}
          alt="close navbar"
          onClick={handleOnClose}
        />
      </div>
      <div className="container mx-auto px-11">
        <div className="flex flex-col gap-12 mt-8">
          {navItems.map((navItem) => (
            <HeaderMobileItem key={navItem} active={navItem === activePage}>
              {navItem}
            </HeaderMobileItem>
          ))}
        </div>
      </div>
    </nav>
  );
}
