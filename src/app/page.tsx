"use client";

import { useState } from "react";
import About from "./About";
import Header from "./Header";
import Home from "./Home";
import SplashScreen from "./SplashScreen";

export default function Main() {
  const [activePage, setActivePage] = useState("Home");

  return (
    <main className="min-h-full min-w-full bg-night">
      <SplashScreen />
      <Header activePage={activePage} />
      <div className="container mx-auto px-11 bg-night min-w-screen">
        <Home onVisible={setActivePage} />
        <About onVisible={setActivePage} />
      </div>
    </main>
  );
}
