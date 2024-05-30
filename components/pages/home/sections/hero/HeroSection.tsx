import LeftCard from "./components/LeftCard";
import RightCard from "./components/RightCard";

function HeroSection() {
  return (
    <div className="pt-[75px]">
      <div className="grid grid-cols-12 h-[91vh]  md:h-[93vh]  lg:h-[93vh] xl:overflow-hidden">
        <div className="col-span-12 md:col-span-6 h-full">
          <div className="h-full">
            <LeftCard />
          </div>
        </div>
        <div className="col-span-6 hidden md:flex items-center md:pb-0 lg:pb-[10%] xl:pb-[20%] 2xl:pb-[35%]">
          <RightCard />
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
