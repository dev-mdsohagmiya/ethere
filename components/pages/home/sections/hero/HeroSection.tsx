import LeftCard from "./components/LeftCard";

function HeroSection() {
  return (
    <div>
      <div className="grid grid-cols-12 xl:h-[91vh] xl:overflow-hidden">
        <div className="col-span-6">
          <div className="">
            <LeftCard />
          </div>
        </div>
        <div></div>
      </div>
    </div>
  );
}

export default HeroSection;
