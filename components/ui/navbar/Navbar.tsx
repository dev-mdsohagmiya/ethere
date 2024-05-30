import NextImage from "../next-image/NextImage";
import { IMAGES } from "@/public";

function Navbar() {
  return (
    <div>
      <div className="px-5 md:px-10 lg:px-12 xl:px-14">
        <div className="flex justify-between py-6 items-center">
          <div>
            <div className="cursor-pointer  w-[22px] h-[22px]">
              <NextImage
                className="w-full h-full"
                alt=""
                src={IMAGES.navbar.search}
              />
            </div>
          </div>
          <div>
            <div className="w-[164px] h-[44px]">
              <NextImage
                className="w-full h-full"
                alt=""
                src={IMAGES.root.companyBlackLogo}
              />
            </div>
          </div>
          <div>
            <div className="cursor-pointer w-[28px] h-[20px]">
              <NextImage
                className="w-full h-full"
                alt=""
                src={IMAGES.navbar.manu}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
