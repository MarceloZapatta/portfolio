import Image from "next/image";
import HeaderItem from "./HeaderItem";
import "./Header.scss";

export default function Header() {
  return (
    <nav
      id="Header"
      className="fixed top-0 flex border-b border-hoolywood-cerise text-xl
    justify-between items-center px-3 py-4 bg-night min-w-full"
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
        className="lg:hidden"
      />
      <div className="gap-8 items-center hidden lg:flex">
        <HeaderItem>Home</HeaderItem>
        <HeaderItem>About</HeaderItem>
        <HeaderItem>Skills</HeaderItem>
        <HeaderItem>Projects</HeaderItem>
        <HeaderItem>Contact</HeaderItem>
      </div>
    </nav>
  );
}
