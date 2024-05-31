import { Kumbh_Sans, Noto_Serif, Noto_Serif_TC } from "next/font/google";
import localFont from "next/font/local";
export const fontKumbhSans = Kumbh_Sans({
  subsets: ["latin"],
  weight: ["500"],
});

export const fontNotoSerif = Noto_Serif({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700"],
});

export const fontNotoSerifTC = Noto_Serif_TC({
  subsets: ["latin"],
  weight: ["400"],
});

export const thePaloma = localFont({ src: "./the-paloma/ThePaloma.otf" });
