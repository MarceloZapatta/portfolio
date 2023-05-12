import { Fira_Mono } from "next/font/google";

import "./globals.scss";
import "animate.css";
import { Metadata } from "next";

const firaMono = Fira_Mono({ subsets: ["latin"], weight: ["400"] });

export const metadata: Metadata = {
  title: "Marcelo Zapatta | Fullstack Developer | Portfolio",
  description:
    "Another portfolio for a developer, but maybe you will find it cool",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${firaMono.className} overflow-x-hidden`}>
        {children}
      </body>
    </html>
  );
}
