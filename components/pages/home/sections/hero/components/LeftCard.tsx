import NextImage from "@/components/ui/next-image/NextImage";
import { IMAGES } from "@/public";

function LeftCard() {
  return (
    <div className="h-full">
      <NextImage
        className="w-full h-full object-cover"
        src={IMAGES.home.hero.heroLeftImage}
        alt=""
      />
    </div>
  );
}

export default LeftCard;
