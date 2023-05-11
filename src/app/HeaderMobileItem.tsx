import Image from "next/image";

interface HeaderMobileItemProps {
  children: string;
  active: boolean;
}

export default function HeaderMobileItem(props: HeaderMobileItemProps) {
  const { children, active } = props;

  return (
    <a href={`/#${children}`} className={`text-xl flex text-white`}>
      <Image
        src="/command.svg"
        width={24}
        height={24}
        alt="command line icon"
        className="mr-2"
      />
      portfolio:~/
      <span className={active ? "text-hoolywood-cerise" : ""}>{children}</span>$
    </a>
  );
}
