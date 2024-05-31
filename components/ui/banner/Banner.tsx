import { IMAGES } from "@/public";
import NextImage from "../next-image/NextImage";
import Button from "../button/Button";
import { fontNotoSerif } from "@/public/font";

function Banner() {
  return (
    <div>
      <div>
        <div className="grid grid-cols-12 bg-[#F0ECE9] p-20">
          <div className="col-span-8 grid items-center pr-[10%]">
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
                <h2 className="font-[500] text-[82px]">PLATFORM</h2>
              </div>
              <div className="pt-7">
                <p
                  className={` ${fontNotoSerif.className} font-[300] text-[28px]`}
                >
                  Step into the future of bridal shopping with our
                  groundbreaking platform, offering innovative features tailored
                  to elevate your experience.
                </p>
              </div>
              <div className="pt-10">
                <Button
                  text="JOIN OUR WAITLIST NOW"
                  className="w-auto py-[11px]"
                />
              </div>
              <div></div>
            </div>
          </div>
          <div className="col-span-4">
            <NextImage
              className="w-full"
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
