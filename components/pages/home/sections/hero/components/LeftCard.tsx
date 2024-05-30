import NextImage from "@/components/ui/next-image/NextImage";
import { IMAGES } from "@/public";

function LeftCard() {
  return (
    <div>
      <NextImage
        className="w-full"
        src={IMAGES.home.hero.heroLeftImage}
        alt=""
      />
    </div>
  );
}

export default LeftCard;
