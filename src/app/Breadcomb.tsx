import Image from "next/image";
import { useTranslation } from "react-i18next";

interface BreadcombProps {
  children: string;
}

export default function Breadcomb(props: BreadcombProps) {
  const { children } = props;
  const { t } = useTranslation();
  return (
    <div className="text-base text-white flex">
      <Image
        src="/portfolio/command.svg"
        width={24}
        height={24}
        alt="command line icon"
        className="mr-2"
      />
      {t("portfolio")}:~/
      <span className="text-hoolywood-cerise">{children}</span>$
    </div>
  );
}
