import Image from "next/image";
import { useTranslation } from "react-i18next";

interface HeaderMobileItemProps {
  children: string;
  active: boolean;
  onClick: () => void;
}

export default function HeaderMobileItem(props: HeaderMobileItemProps) {
  const { children, active, onClick } = props;
  const { t } = useTranslation();

  function handleClick(e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) {
    e.preventDefault();
    onClick();
    window.location.href = `/portfolio/#${t(["Menu." + children])}`;
  }

  return (
    <a href="#" className={`flex text-white`} onClick={(e) => handleClick(e)}>
      <Image
        src="/portfolio/command.svg"
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
