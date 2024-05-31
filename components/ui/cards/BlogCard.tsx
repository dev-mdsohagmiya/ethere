import { IMAGES } from "@/public";
import NextImage from "../next-image/NextImage";
import Link from "next/link";
import { fontNotoSerif } from "@/public/font";
import { blogCardPropsTypes } from "./blogCard.types";

function BlogCard({ src, title, topic, dsc, href }: blogCardPropsTypes) {
  return (
    <div>
      <Link href={href ? href : "#"}>
        <div>
          <NextImage className="w-full" alt="" src={src} />
        </div>
        <div className="py-8 md:py-10 grid gap-3 md:gap-4">
          <div>
            <h2 className="uppercase text-[22px] md:text-[22px]  lg:text-[24px] lg:leading-[37px] font-[500]">
              {title}
            </h2>
          </div>
          <div>
            <h4 className={`text-[17px] font-[700] ${fontNotoSerif.className}`}>
              {topic}
            </h4>
          </div>
          <div className="">
            <p
              className={` text-[18px] lg:text-[21px] font-[300] lg:leading-[29px] ${fontNotoSerif.className}`}
            >
              {dsc}
            </p>
          </div>
        </div>
      </Link>
    </div>
  );
}

export default BlogCard;
