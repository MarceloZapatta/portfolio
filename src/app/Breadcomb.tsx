import Image from "next/image";

interface BreadcombProps {
  children: string;
}

export default function Breadcomb(props: BreadcombProps) {
  const { children } = props;
  return (
    <div className="text-base text-white flex">
      <Image
        src="/command.svg"
        width={24}
        height={24}
        alt="command line icon"
        className="mr-2"
      />
      portfolio:~/<span className="text-hoolywood-cerise">{children}</span>$
    </div>
  );
}
