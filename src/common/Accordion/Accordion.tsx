import { useState } from "react";
import { ArrowDown } from "../../icons";

type Props = {
  title: string;
  content: string;
};

export const Accordion = ({ content, title }: Props) => {
  const [open, setOpen] = useState(false);

  return (
    <div
      className={`w-full transition-all select-none duration-300 relative ${
        open ? "h-[127px]" : "h-[80px]"
      } border border-solid border-[#E8F4F1] rounded-md `}
      onClick={() => setOpen(!open)}
    >
      <div className="flex h-full px-3 xl:px-[29px] items-center justify-between ">
        <p
          className={` absolute  transition-all duration-300  pl-3 pr-6 ${
            open
              ? "-top-[15px] bg-[#005B81]  !text-[#C5FFA9] "
              : "top-1/2 -translate-y-1/2"
          } text-[14px] xl:text-base text-[#E8F4F1] paytone font-normal leading-6 text-left`}
        >
          {title}
        </p>
        <ArrowDown
          className={` transition-all duration-300 ${
            open ? "" : "-rotate-180 "
          } text-[#E8F4F1] absolute right-4 xl:right-[53px]`}
        />
        {open && (
          <div className=" text-[14px] xl:text-base paytone text-[#E8F4F1] font-normal leading-6 text-left">
            {content}
          </div>
        )}
      </div>
    </div>
  );
};
