import Image from "next/image";
import { useTranslation } from "react-i18next";

interface HeaderMobileItemProps {
  children: string;
  active: boolean;
}

export default function HeaderMobileItem(props: HeaderMobileItemProps) {
  const { children, active } = props;
  const { t } = useTranslation();

  return (
    <a href={`/#${t(["Menu." + children])}`} className={`flex text-white`}>
      <Image
        src="/command.svg"
        width={24}
        height={24}
        alt="command line icon"
        className="mr-2"
      />
      {t("portfolio")}:~/
      <span className={active ? "text-hoolywood-cerise" : ""}>
        {t([`Menu.${children}`])}
      </span>
      $
    </a>
  );
}
