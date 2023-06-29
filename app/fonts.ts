import { Noto_Sans_JP, Merriweather_Sans } from "next/font/google"

export const notosan = Noto_Sans_JP({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-notosan",
})

export const merri = Merriweather_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-merri",
})