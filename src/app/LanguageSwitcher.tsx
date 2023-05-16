"use client";

import { useTranslation } from "react-i18next";

export default function LanguageSwitcher() {
  const { i18n } = useTranslation();

  function handleChangeLanguage(lang: string) {
    i18n.changeLanguage(lang);
  }

  const isLangEnglish = i18n.language === "en";

  return (
    <div className="text-white fixed bottom-2 right-6">
      <span
        onClick={() => handleChangeLanguage("en")}
        className={`custom-cursor-pointer drop-shadow ${
          isLangEnglish ? "text-hoolywood-cerise" : ""
        }`}
      >
        EN
      </span>{" "}
      |{" "}
      <span
        onClick={() => handleChangeLanguage("pt-BR")}
        className={`custom-cursor-pointer drop-shadow ${
          isLangEnglish ? "" : "text-hoolywood-cerise"
        }`}
      >
        PT-BR
      </span>
    </div>
  );
}
