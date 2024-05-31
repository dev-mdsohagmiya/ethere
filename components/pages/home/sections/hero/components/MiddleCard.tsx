import Button from "@/components/ui/button/Button";
import { thePaloma } from "@/public/font";

function MiddleCard() {
  return (
    <div>
      <div className="grid gap-2 px-5">
        <div>
          <h2 className="font-[500] text-[30px] text-black">
            The thread that binds every dream to its ethereal
          </h2>
        </div>
        <div>
          <h4
            className={`text-[20px] leading-[35px] text-end ${thePaloma.className}`}
          >
            A new place, where you&lsquo;ll discover and acquire your dream
            dress, perfectly matched.
          </h4>
        </div>
        <div className="flex justify-end pt-3">
          <Button text=" Learn More" />
        </div>
      </div>
    </div>
  );
}

export default MiddleCard;
