import Link from "next/link";
import NextImage from "../next-image/NextImage";
import { IMAGES } from "@/public";
import { NavbarDesktopManuPropsType } from "./navbarMenu.types";

function NavbarManuDesktop({ setIsOpen }: NavbarDesktopManuPropsType) {
  return (
    <div
      className=" h-full overflow-hidden bg-gray  drop-shadow-xl shadow-2xl py-10"
      style={{ zIndex: 10 }}
    >
      <div className="px-12 flex justify-end">
        <div
          className="w-[25px] h-[25px] cursor-pointer"
          onClick={() => setIsOpen(false)}
        >
          <NextImage
            className="w-full h-full"
            src={IMAGES.navbar.close}
            alt=""
          />
        </div>
      </div>
      <div className="grid pr-[12%]  h-full items-center pb-10">
        <div className="grid gap-10 md:gap-14 pr-[15%]   items-center">
          <div className="text-end">
            <Link
              className="font-[500] text-[22px] md:text-[24px] text-black uppercase text-center"
              href={"#"}
            >
              Home
            </Link>
          </div>
          <div className="text-end">
            <Link
              className="font-[500] text-[22px] md:text-[24px] text-black uppercase text-end"
              href={"#"}
            >
              SHOP
            </Link>
          </div>
          <div className="text-end">
            <Link
              className="font-[500] text-[22px] md:text-[24px] text-black uppercase text-end"
              href={"#"}
            >
              ABOUT
            </Link>
          </div>
          <div className="text-end">
            <Link
              className="font-[500] text-[22px] md:text-[24px] text-black uppercase text-end"
              href={"#"}
            >
              CONTACT
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NavbarManuDesktop;
