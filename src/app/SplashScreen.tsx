"use client";

import "./SplashScreen.scss";

export default function SplashScreen() {
  return (
    <div
      id="splash-screen"
      className="flex text-6xl justify-center items-center bg-night h-screen min-h-screen 
      w-screen min-w-screen fixed z-50 animate__animated animate__fadeOut animate__delay-4s"
      style={{ color: "white" }}
    >
      <div className="short-logo short-logo--shadow-highlight-animation short-logo--rotate-animation">
        &lt;<span className="text-hoolywood-cerise">MZ</span>/&gt;
      </div>
    </div>
  );
}
