import { Fira_Mono } from "next/font/google";

import "./globals.scss";
import "animate.css";

const firaMono = Fira_Mono({ subsets: ["latin"], weight: ["400"] });

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
