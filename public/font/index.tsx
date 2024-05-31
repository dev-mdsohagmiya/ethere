import { Kumbh_Sans, Noto_Serif } from "next/font/google";
import localFont from "next/font/local";
export const fontKumbhSans = Kumbh_Sans({
  subsets: ["latin"],
  weight: ["500"],
});

export const fontNotoSerif = Noto_Serif({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700"],
});

export const thePaloma = localFont({ src: "./the-paloma/ThePaloma.otf" });
