import Image from "next/image";
import { NextImagePropsTypes } from "./types";
function NextImage({ src, alt, className }: NextImagePropsTypes) {
  return <Image className={`select-none ${className}`} src={src} alt={alt} />;
}

export default NextImage;
