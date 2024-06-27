import { Props } from "./types";

export const ListItem = ({
  label,
  percent,
  itemClassName,
  percentClassName,
}: Props) => {
  return (
    <div className="pt-[13px] overflow-hidden pr-[19px] relative pl-[41px] flex justify-between pb-[10px] w-[363px] bg-[#1F1F21] rounded-[4px]">
      <p className="text-lg paytone font-normal text-white leading-[25.13px] text-right">
        {label}
      </p>
      <p
        className={`text-2xl paytone font-normal leading-[33.5px] text-left ${percentClassName} `}
      >
        {percent}
      </p>
      <div
        className={` ${itemClassName} rounded-[4px] left-0 top-0 absolute w-[21px] h-full`}
      ></div>
    </div>
  );
};
