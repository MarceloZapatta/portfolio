import { useTranslation } from "react-i18next";

interface HeaderItemProps {
  children: string;
  active: boolean;
}

export default function HeaderItem(props: HeaderItemProps) {
  const { children, active } = props;
  const { t } = useTranslation();

  return (
    <a
      href={`/portfolio/#${t(["Menu." + children])}`}
      className="custom-cursor-pointer text-base header-item text-white"
    >
      ~/
      <span className={active ? "text-hoolywood-cerise" : ""}>
        {t([`Menu.${children}`])}
      </span>
      $
    </a>
  );
}
