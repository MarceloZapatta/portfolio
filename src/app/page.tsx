"use client";

import { useState } from "react";
import Header from "./Header";
import SplashScreen from "./SplashScreen";
import PageHome from "./PageHome";
import PageAbout from "./PageAbout";
import PageSkills from "./PageSkills";
import PageProjects from "./PageProjects";

export default function Main() {
  const [activePage, setActivePage] = useState("Home");

  return (
    <main className="min-h-full min-w-full bg-night">
      <SplashScreen />
      <Header activePage={activePage} />
      <div className="container mx-auto px-11 bg-night min-w-screen">
        <PageHome onVisible={setActivePage} />
        <PageAbout onVisible={setActivePage} />
        <PageSkills onVisible={setActivePage} />
        <PageProjects onVisible={setActivePage} />
      </div>
    </main>
  );
}
