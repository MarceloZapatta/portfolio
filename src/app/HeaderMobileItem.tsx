import Image from "next/image";

interface HeaderMobileItemProps {
  children: string;
}

export default function HeaderMobileItem(props: HeaderMobileItemProps) {
  const { children } = props;

  return (
    <a href={`/#${children}`} className="text-xl text-white flex">
      <Image
        src="/command.svg"
        width={24}
        height={24}
        alt="command line icon"
        className="mr-2"
      />
      portfolio:~/<span className="text-hoolywood-cerise">{children}</span>$
    </a>
  );
}
