import LeftCard from "./components/LeftCard";
import RightCard from "./components/RightCard";

function HeroSection() {
  return (
    <div>
      <div className="grid grid-cols-12 xl:h-[91vh] xl:overflow-hidden">
        <div className="col-span-6">
          <div className="">
            <LeftCard />
          </div>
        </div>
        <div className="col-span-6 flex items-center pb-[35%]">
          <RightCard />
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
