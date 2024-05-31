import { StaticImageData } from "next/image";

export interface blogCardPropsTypes {
  src: StaticImageData;
  title: string;
  topic: string;
  dsc: string;
  href?: string;
}
