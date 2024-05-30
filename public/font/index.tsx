import { Kumbh_Sans } from "next/font/google";
import localFont from "next/font/local";
export const fontKumbhSans = Kumbh_Sans({
  subsets: ["latin"],
  weight: ["500"],
});

export const thePaloma = localFont({ src: "./the-paloma/ThePaloma.otf" });
