import { Button } from "../../common";
import { LINKS } from "../../constants";
import styles from "./header.module.css";
export const Header = () => {
  return (
    <header
      className={`w-full relative min-h-[144px] flex items-center ${styles.bg} `}
    >
      <div className="container  justify-between flex items-center w-full h-full">
        <a href="">
          <img src="./logo.svg" alt="logo" />
        </a>
        <ul className="flex items-center gap-x-[52px] ">
          {LINKS.map((link, index) => (
            <li key={index}>
              <a
                href={link.path}
                className="text-lg transition-all duration-300 hover:text-[#F3D583] paytone text-white font-normal leading-[25.13px]"
              >
                {link.label}
              </a>
            </li>
          ))}
          <li>
            <Button className="text-[#AF6D27]">PRESALE TBA</Button>
          </li>
        </ul>
      </div>
      <div className={styles.blur}></div>
    </header>
  );
};
