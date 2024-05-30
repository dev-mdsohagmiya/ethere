import { StaticImageData } from "next/image";

export interface NextImagePropsTypes {
  src: StaticImageData;
  alt: string;
  className?: string;
}
