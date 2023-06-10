import type { Metadata } from "next";
import { Noto_Sans_JP, Merriweather_Sans } from "next/font/google";
import Header from "./components/layouts/Header";
import "./globals.css";

const notosan = Noto_Sans_JP ({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-notosan",
});

const merri = Merriweather_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-merri",
});

export const metadata: Metadata = {
  title: {
    default: "Solo Delights!",
    template: "%s | Solo Delights!",
  },
  description: "ひとり時間に愉しんだことを記事にしています。",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja" className={`${notosan.variable} ${merri.variable}`}>
      <body>
        <Header />
        <main className="mt-headerHeightMD md:mt-headerHeightPC">
          {children}
        </main>
      </body>
    </html>
  );
}
