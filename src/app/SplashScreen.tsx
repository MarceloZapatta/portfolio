"use client";

import { useEffect, useState } from "react";
import "./SplashScreen.scss";

export default function SplashScreen() {
  const [active, setActive] = useState(true);

  useEffect(() => {
    setTimeout(() => setActive(false), 4000);
  }, []);

  return (
    <div
      id="splash-screen"
      className={`flex text-6xl justify-center items-center bg-night h-screen min-h-screen 
      w-screen min-w-screen fixed z-50 ${
        active ? "animate__animated animate__fadeOut animate__delay-4s" : ""
      } ${!active ? "hidden" : ""}`}
      style={{ color: "white" }}
    >
      <div
        className={`short-logo ${
          active
            ? "short-logo--shadow-highlight-animation short-logo--rotate-animation"
            : ""
        }`}
      >
        &lt;<span className="text-hoolywood-cerise">MZ</span>/&gt;
      </div>
    </div>
  );
}
