import styles from "./Button.module.css";
import { Props } from "./types";
export const Button = ({ onClick, children, leftIcon, className }: Props) => {
  return (
    <button
      className={`${styles.button} text-[#AF6D27] bg-[#F3D583] ${
        leftIcon ? "flex items-center  bg-[#F3D583] gap-x-[5px]" : ""
      }   ${className} `}
      onClick={onClick}
    >
      {leftIcon}
      {children}
    </button>
  );
};
