import { IMAGES } from "@/public";
import NextImage from "../next-image/NextImage";
import Button from "../button/Button";
import { fontNotoSerif } from "@/public/font";

function Banner() {
  return (
    <div>
      <div>
        <div className="grid grid-cols-12 bg-[#F0ECE9] md:p-16 lg:p-20 py-10 md:py-auto px-5 md:px-auto">
          <div className="col-span-12 md:col-span-8 grid items-center md:pr-[10%] pb-5 md:pb-auto">
            <div>
              <div>
                <div>
                  <NextImage
                    className=""
                    alt=""
                    src={IMAGES.root.companyBlackLogo}
                  />
                </div>
              </div>
              <div>
                <h2
                  className="-translate-y-1 md:-translate-y-0 font-[500] text-[56px] md:text-[60px]  lg:text-[70px] xl:text-[82px]"
                  style={{ zIndex: 1 }}
                >
                  PLATFORM
                </h2>
              </div>
              <div className="pt-1 md:pt-2 xl:pt-3 2xl:pt-7">
                <p
                  className={` ${fontNotoSerif.className} font-[300] text-[16px] md:text-[22px] lg:text-[25px] xl:text-[28px]`}
                >
                  Step into the future of bridal shopping with our
                  groundbreaking platform, offering innovative features tailored
                  to elevate your experience.
                </p>
              </div>
              <div className="md:pt-5 xl:pt-5 2xl:pt-10 flex justify-center md:block py-5 md:py-auto">
                <Button
                  text="JOIN OUR WAITLIST NOW"
                  className="w-auto py-[11px]"
                />
              </div>
              <div></div>
            </div>
          </div>
          <div className="col-span-12 md:col-span-4">
            <NextImage
              className="w-full h-full object-cover"
              alt=""
              src={IMAGES.ui.banner.bannerImg1}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Banner;
