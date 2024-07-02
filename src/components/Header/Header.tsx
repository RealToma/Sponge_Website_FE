import { useEffect, useState } from "react";
import { Button } from "../../common";
import { LINKS } from "../../constants";
import styles from "./Header.module.css";
import { Link, useNavigate } from "react-router-dom";
export const Header = () => {
  const [open, setOpen] = useState(false);

  const navigate = useNavigate();

  const PrssaleHandle = () => {
    setOpen(false);
    navigate("/presale");
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [open]);

  return (
    <header
      className={`w-full fixed top-0 min-h-[100px] z-[999] flex items-center  ${styles.bg} `}
    >
      <div className="w-full h-full relative flex items-center ">
        <div className="container px-5 xl:px-0 justify-between flex items-center w-full h-full">
          <Link
            to="/"
            onClick={() => {
              window.scrollTo({
                top: 0,
                behavior: "smooth",
              });
            }}
          >
            <img src="./logo.svg" alt="logo" className="w-[73px] h-[73px]" />
          </Link>
          <ul
            className={` transition-all duration-300 ${
              open ? "left-0" : "left-[-100%]"
            } fixed w-full h-full xl:w-auto  xl:h-auto bg-[#663C0C] xl:bg-transparent pl-10 pt-20 xl:pt-0 gap-y-5 xl:pl-0 flex-col xl:flex-row items-start z-30 top-0 xl:static flex xl:items-center gap-x-[52px]`}
          >
            {LINKS.map((link, index) => (
              <li key={index}>
                <a
                  onClick={() => setOpen(false)}
                  href={link.path}
                  className="text-lg transition-all duration-300 hover:text-[#F3D583] paytone text-white font-normal leading-[25.13px]"
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li>
              <Button
                onClick={PrssaleHandle}
                className="text-[#AF6D27] transition-all duration-500 hover:bg-[#070707] hover:text-white  "
              >
                PRESALE TBA
              </Button>
            </li>
          </ul>
          <div
            onClick={() => setOpen(!open)}
            className="w-[35px] h-[26px] z-[999] flex xl:hidden flex-col justify-between"
          >
            <div
              className={`w-full h-[3px] rounded bg-[#F3D583] transition-transform duration-300 ${
                open ? "transform rotate-[46deg] translate-y-[13px]" : ""
              }`}
            />
            <div
              className={`w-full h-[3px] rounded bg-[#F3D583] transition-opacity duration-300 ${
                open ? "opacity-0" : ""
              }`}
            />
            <div
              className={`w-full h-[3px] rounded bg-[#F3D583] transition-transform duration-300 ${
                open ? "transform -rotate-[46deg] -translate-y-[10px]" : ""
              }`}
            />
          </div>
        </div>
      </div>
    </header>
  );
};
