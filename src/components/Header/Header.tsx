import { Button } from "../../common";
import { LINKS } from "../../constants";
import styles from "./Header.module.css";

export const Header = () => {
  return (
    <header className={` ${styles.header_bg} w-full h-[144px] relative z-10`}>
      <div className="w-full h-full container flex items-center justify-between">
        <a href="#">
          <img src="./logo.svg" alt="sponge" />
        </a>
        <ul className="flex gap-x-[52px] items-center">
          {LINKS.map((link) => (
            <li key={link.path}>
              <a
                href={link.path}
                className="text-[18px] paytone transition-all duration-300 hover:text-[#F3D583] text-white font-[400] leading-[25.13px] text-left"
              >
                {link.label}
              </a>
            </li>
          ))}
          <li>
            <Button className="paytone">PRESALE TBA</Button>
          </li>
        </ul>
      </div>
      <div className={`w-full ${styles.bg} absolute left-0 -bottom-2 `}></div>
    </header>
  );
};
