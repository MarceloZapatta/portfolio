import Image from "next/image";
import { useTranslation } from "react-i18next";

interface NextPageButtonProps {
  children: string;
  inverted?: boolean;
}

export default function NextPageButton(props: NextPageButtonProps) {
  const { children, inverted } = { inverted: false, ...props };
  const { t } = useTranslation();

  return (
    <a
      href={`/portfolio/#${t("Menu." + children)}`}
      className={`mx-auto custom-cursor-pointer hover:opacity-70 transition ${
        inverted ? "rotate-180" : ""
      }`}
    >
      <Image
        src="/portfolio/chevron-down.svg"
        width={24}
        height={24}
        alt="next page button"
      />
    </a>
  );
}
