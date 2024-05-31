"use client";
import NextImage from "../next-image/NextImage";
import { IMAGES } from "@/public";
import NavbarManuDesktop from "./NavbarMenu.desktop";
import { useState } from "react";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="fixed top-0 w-full bg-white" style={{ zIndex: 5 }}>
      <div className="px-5 md:px-10 lg:px-12 xl:px-14">
        <div className="flex justify-between py-4 items-center">
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
            <div
              className="cursor-pointer w-[28px] h-[20px]"
              onClick={() => setIsOpen(true)}
            >
              <NextImage
                className="w-full h-full"
                alt=""
                src={IMAGES.navbar.manu}
              />
            </div>
          </div>
        </div>
      </div>
      <div
        style={{ zIndex: 100 }}
        className={`fixed top-0 right-0 w-[60%] md:w-[30%] transition ease-in-out delay-300 h-full ${
          isOpen ? "translate-x-[0%]" : "translate-x-[100%] "
        }`}
      >
        <NavbarManuDesktop setIsOpen={setIsOpen} />
      </div>
    </div>
  );
}

export default Navbar;
