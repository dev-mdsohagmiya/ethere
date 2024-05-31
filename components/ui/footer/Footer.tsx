import Link from "next/link";
import { footerData } from "./footer.data";
import NextImage from "../next-image/NextImage";
import { IMAGES } from "@/public";
import { fontNotoSerif, fontNotoSerifTC } from "@/public/font";
// About Us
// Brand Partnerships
// Submissions
// Careers
// Contact Us
// Membership
// Brands Login
// Legal
// Terms
// Privacy
function Footer() {
  return (
    <div className="bg-black pt-14 pb-3 md:pt-auto md:pb-auto md:py-10 px-20">
      <div className="flex">
        <div className="">
          <div className="grid gap-4">
            {footerData[0].map((item, index) => (
              <div key={index}>
                <Link
                  href={item.href}
                  className="text-white text-[14px] sm:text-[18px] md:text-[22px] lg:text-[24px] font-[400]"
                >
                  {item.name}
                </Link>
              </div>
            ))}
          </div>
        </div>
        <div className="flex justify-center w-full md:pr-[8%]">
          <div className="grid gap-4">
            {footerData[1].map((item, index) => (
              <div key={index}>
                <Link
                  href={item.href}
                  className="text-white text-[14px] sm:text-[18px] md:text-[22px] lg:text-[24px] font-[400]"
                >
                  {item.name}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="flex justify-center py-14 md:py-20">
        <div className="w-[248px] h-[67px]">
          <NextImage src={IMAGES.ui.footer.logowhite} alt="" />
        </div>
      </div>
      <div>
        <h2
          className={`${fontNotoSerifTC.className} text-[12px] md:text-[22px] lg:text-[24px]  text-center md:text-start font-[300] uppercase text-white`}
        >
          © 2024 ÉTHÉRÉ. All rights reserved.
        </h2>
      </div>
    </div>
  );
}

export default Footer;
