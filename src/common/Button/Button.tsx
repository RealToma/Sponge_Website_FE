import styles from "./Button.module.css";
import { Props } from "./types";
export const Button = ({
  children,
  className,
  leftIcon,
  borderColor = "#000000",
  onClick,
}: Props) => {
  return (
    <button
      style={{ background: borderColor }}
      className={` ${styles.button} p-[1px] `}
      onClick={onClick}
    >
      <span
        className={`${styles.button} ${
          leftIcon ? "flex items-center gap-x-[5px]" : ""
        } paytone font-normal leading-[27.92px] text-center inline-block bg-[#F3D583] px-[29px] pt-[14px] pb-[19px] ${className} `}
      >
        {leftIcon}
        {children}
      </span>
    </button>
  );
};
