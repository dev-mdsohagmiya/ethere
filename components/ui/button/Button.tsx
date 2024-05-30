import { fontKumbhSans } from "@/public/font";
import { buttonPropesTypes } from "./types";

function Button({ text, className }: buttonPropesTypes) {
  return (
    <button
      className={`py-[6px] w-[171px] text-end  border-black text-black border-b-[2px]  ${fontKumbhSans.className}  text-[22px] ${className}`}
    >
      {text}
    </button>
  );
}

export default Button;
