"use client";

import ReactVisibilitySensor from "react-visibility-sensor";
import Breadcomb from "./components/Breadcomb";
import NextPageButton from "./components/NextPageButton";
import { useTranslation } from "react-i18next";

interface PageTemplateProps {
  onVisible: (currentPage: string) => void;
  name: string;
  nextPageName: string;
  children: string | JSX.Element | JSX.Element[];
  nextPageButtonInverted?: boolean;
}

export default function PageTemplate(props: PageTemplateProps) {
  const { onVisible, name, nextPageName, children, nextPageButtonInverted } =
    props;
  const { t } = useTranslation();

  function handleChangeVisible(isVisible: Boolean) {
    if (isVisible) {
      onVisible(name);
    }
  }

  return (
    <div
      id={t(`Menu.${name}`) || ""}
      className={`flex flex-col justify-between min-h-screen min-w-screen bg-night pt-24 pb-6 text-white page-${name}`}
    >
      <ReactVisibilitySensor onChange={handleChangeVisible}>
        <Breadcomb>{t(`Menu.${name}`)}</Breadcomb>
      </ReactVisibilitySensor>
      {children}
      <NextPageButton inverted={nextPageButtonInverted}>
        {nextPageName}
      </NextPageButton>
    </div>
  );
}

PageTemplate.defaultProps = {
  nextPageButtonInverted: false,
};
