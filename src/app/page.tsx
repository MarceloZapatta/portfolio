"use client";

import { useState } from "react";
import Header from "./components/Header";
import SplashScreen from "./components/SplashScreen";
import PageHome from "./PageHome";
import PageAbout from "./PageAbout";
import PageSkills from "./PageSkills";
import PageProjects from "./PageProjects";
import PageContact from "./PageContact";

import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .use(LanguageDetector)
  .init({
    // the translations
    // (tip move them in a JSON file and import them,
    // or even better, manage them via a UI: https://react.i18next.com/guides/multiple-translation-files#manage-your-translations-with-a-management-gui)
    resources: {
      en: {
        translation: {
          and: "and",
          "and many more": "and many more",
          Menu: {
            Home: "Home",
            About: "About",
            Skills: "Skills",
            Projects: "Projects",
            Contact: "Contact",
          },
          portfolio: "portfolio",
          Home: {
            intro: "I'm a",
            transforming: "transforming",
            ideas: "ideas",
            into: "into",
            products: "products",
          },
          About: {
            intro:
              "Hello! I am a FullStack developer with over 5 years of professional experience. My expertise lies in technologies like",
            personal:
              "Apart from my dedication to software development, I am also passionate about maintaining a vegan lifestyle 🌱. In my free time, I enjoy watching TV shows and embarking on adventures to discover new places around the world ⛰️. Inspired by my love for travel and work, I am planing to have an digital nomad lifestyle 💻",
            cta: "If you're interested in delving deeper into my background and experience, I invite you to",
            "cta-take": "take a look at my full profile",
            buttonLinkedIn: "LinkedIn profile",
          },
          Skills: {
            intro: "Check out some of my main skills",
          },
        },
      },
      pt: {
        translation: {
          and: "e",
          "and many more": "e em outras tecnologias",
          Menu: {
            Home: "Início",
            About: "Sobre",
            Skills: "Habilidades",
            Projects: "Projetos",
            Contact: "Contato",
          },
          portfolio: "portfólio",
          Home: {
            intro: "Eu sou um",
            transforming: "transformando",
            ideas: "ideias",
            into: "em",
            products: "produtos",
          },
          About: {
            intro:
              "Olá! Eu sou um FullStack developer com 5 anos de experiência. Possuo proficiência em ",
            personal:
              "Além do meu comprometimento com o desenvolvimento de software, também sou apaixonado por manter um estilo de vida vegano 🌱. No meu tempo livre, gosto de assistir séries e embarcar em aventuras para descobrir novos lugares ao redor do mundo ⛰️. Inspirado pelo meu amor por viagens e trabalho, estou planejando ter um estilo de vida de nômade digital 💻",
            cta: "Se você está interessado em conhecer mais sobre meu perfil e experiências, eu te convido a ",
            "cta-take": "acessar meu perfil completo",
            buttonLinkedIn: "Perfil LinkedIn",
          },
          Skills: {
            intro: "Confira algumas das minhas principais habilidades",
          },
        },
      },
    },
    fallbackLng: "en",
    interpolation: {
      escapeValue: false, // react already safes from xss => https://www.i18next.com/translation-function/interpolation#unescape
    },
  });

export default function Main() {
  const [activePage, setActivePage] = useState("Home");

  return (
    <main className="min-h-full min-w-full bg-night overflow-x-hidden">
      <SplashScreen />
      <Header activePage={activePage} />
      <div className="container mx-auto px-11 bg-night min-w-screen">
        <PageHome onVisible={setActivePage} />
        <PageAbout onVisible={setActivePage} />
        <PageSkills onVisible={setActivePage} />
        <PageProjects onVisible={setActivePage} />
        <PageContact onVisible={setActivePage} />
      </div>
    </main>
  );
}
