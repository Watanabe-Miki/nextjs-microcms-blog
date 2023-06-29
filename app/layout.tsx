import type { Metadata } from "next";
import { notosan, merri } from "./fonts"
import Header from "./components/layouts/Header";
import "./globals.css";

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
