"use client";

import Image from "next/image";
import PageTemplate from "./PageTemplate";
import PageProps from "@/interfaces/page-props";
import ReactVisibilitySensor from "react-visibility-sensor";
import { useTranslation } from "react-i18next";

export default function PageAbout(props: PageProps) {
  const { onVisible } = props;
  const { t } = useTranslation();
  return (
    <PageTemplate name="About" nextPageName="Skills" onVisible={onVisible}>
      <ReactVisibilitySensor partialVisibility>
        {({ isVisible }: any) => (
          <div
            className={`flex flex-col gap-3 my-6 ${
              isVisible
                ? "opacity-100 animate__animated animate__slideInLeft"
                : "opacity-0"
            }`}
          >
            <p>
              {t("About.intro")}{" "}
              <span className="text-hoolywood-cerise">Laravel</span> {t("and")}{" "}
              <span className="text-hoolywood-cerise">React.JS</span>{" "}
              {t("and many more")}.
            </p>
            <p>{t("About.personal")}.</p>
            <p>
              {t("About.cta")}{" "}
              <span className="text-hoolywood-cerise">
                {t("About.cta-take")}:
              </span>
            </p>
          </div>
        )}
      </ReactVisibilitySensor>
      <ReactVisibilitySensor partialVisibility>
        {({ isVisible }: any) => (
          <a
            href="https://www.linkedin.com/in/marcelo-zapatta/"
            target="_blank"
            className={`flex py-3 mb-6 px-6 bg-hoolywood-cerise rounded-lg w-fit mx-auto
            transition hover:bg-hoolywood-cerise-600 custom-cursor-pointer ${
              isVisible
                ? "opacity-100 animate__animated animate__slideInRight"
                : "opacity-0"
            }`}
          >
            <Image
              src="/portfolio/linkedin-icon.svg"
              width={24}
              height={24}
              alt="linkedin icon"
              className="mr-3.5"
            />
            {t("About.buttonLinkedIn")}
          </a>
        )}
      </ReactVisibilitySensor>
    </PageTemplate>
  );
}
