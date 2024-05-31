import NextImage from "@/components/ui/next-image/NextImage";
import { IMAGES } from "@/public";
import MiddleCard from "./MiddleCard";

function LeftCard() {
  return (
    <div className="h-full relative md:block " style={{ zIndex: 4 }}>
      <NextImage
        className="w-full h-full object-cover"
        src={IMAGES.home.hero.heroLeftImage}
        alt=""
      />
      <div className="absolute md:hidden top-0  grid items-center h-full pb-14">
        <MiddleCard />
      </div>
    </div>
  );
}

export default LeftCard;
