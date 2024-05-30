import Button from "@/components/ui/button/Button";
import { thePaloma } from "@/public/font";

function RightCard() {
  return (
    <div>
      <div className="grid max-w-[70%]  mx-auto gap-5">
        <div>
          <h2 className="font-[500] text-[43px]  leading-[62px] text-black">
            The thread that binds every dream to its ethereal
          </h2>
        </div>
        <div>
          <h4
            className={`text-[24px] leading-[35px] text-end ${thePaloma.className}`}
          >
            A new place, where you&lsquo;ll discover and acquire your dream
            dress, perfectly matched.
          </h4>
        </div>
        <div className="flex justify-end pt-10">
          <Button text=" Learn More" />
        </div>
      </div>
    </div>
  );
}

export default RightCard;
