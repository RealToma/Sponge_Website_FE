import { Button } from "../../common";
import styles from "./PresaleAbout.module.css";

import gsap from "gsap";
import { useEffect, useRef } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { shortAddress } from "../../libs/functions";
gsap.registerPlugin(ScrollTrigger);

export const PresaleAbout = () => {
  const presaleAbout = useRef<HTMLDivElement>(null);

  const cards = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.fromTo(
      presaleAbout.current,
      { opacity: 0 },
      {
        opacity: 1,
        scale: 1,
        duration: 2,
        scrollTrigger: {
          trigger: presaleAbout.current,
        },
      }
    );

    gsap.fromTo(
      cards.current,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 2,
        scrollTrigger: {
          trigger: cards.current,
        },
      }
    );
  }, []);

  return (
    <section className="w-full h-[898px] relative">
      <img
        src="/presale-about-bg.png"
        alt=""
        className=" absolute top-0  z-[-1] w-full h-full object-cover xl:object-fill"
      />
      <div className="w-full gap-x-[23px] pb-10 xl:pb-0 pt-10 gap-y-4 xl:gap-y-0 h-full container px-5 xl:px-0 grid  md:grid-cols-2 grid-cols-1 ">
        <div className={`z-[101] flex justify-center items-center flex-1`}>
          <div
            ref={presaleAbout}
            className={`flex items-center flex-col justify-center aspect-[1.35] p-20 xl:p-24 w-full ${styles.card}`}
          >
            <h1 className=" text-[24px] xl:text-[35px] text-[#AF6D27] luckiest font-normal leading-[35px] text-center">
              Presale
            </h1>
            <div className="w-full text-[12px] lg:text-[15px] sm:text-[12px] md:text-[13px] xl:text-2xl mt-3 xl:mt-[18px] mb-2 xl:mb-[37px] paytone text-[#263D6B] font-normal xl:leading-[33.5px] text-center">
              Get ready to be part of an exciting journey with our memecoin.
              Here’s everything you need to know about our presale
            </div>
            <Button
              className="montserrat transition-all duration-500 hover:!bg-white hover:!text-[#070707] text-[10px] md:!text-[10px]  xl:!text-xl  xl:w-[200px]  w-[150px] !font-[600] !bg-[#070707] !text-white"
              borderColor="#F3D583"
            >
              Presale now
            </Button>
          </div>
        </div>
        <div className="z-[101] flex items-center justify-center">
          <div
            ref={cards}
            className="flex flex-col xl:flex-row flex-wrap justify-around gap-x-[26px] gap-y-[29px]"
          >
            <div className="w-full xl:w-[45%] xl:p-[25px] md:p-[20px] p-[15px]  flex flex-col justify-center items-center rounded-[27px] bg-[#F3D583]">
              <Button
                className="luckiest transition-all duration-500 hover:!bg-white  hover:!text-[#070707]  text-[11px] md:!text-[12px]  xl:!text-[15px] xl:w-[180px]  w-[150px] !font-[500] !bg-[#070707] !text-[#C57E33]"
                borderColor="#FEBA00"
              >
                Presale Wallet
              </Button>
              <p className="text-base xl:text-[16px] font-normal paytone leading-[27.92px] text-center pt-[10px]">
                Deposit your investment to our official Solana wallet address:{" "}
                {"\u00a0"}
                {shortAddress("8m5GRo5jgJGfK2NQt9BuWR8FxmAzoQbf5n99X3joAcen")}
              </p>
            </div>
            <div className="w-full xl:w-[45%] xl:p-[25px] md:p-[20px] p-[15px]  flex flex-col justify-center items-center rounded-[27px] bg-[#F3D583]">
              <Button
                className="luckiest transition-all duration-500 hover:!bg-white  hover:!text-[#070707]  text-[11px] md:!text-[12px]  xl:!text-[15px] xl:w-[180px]  w-[150px] !font-[500] !bg-[#070707] !text-[#C57E33]"
                borderColor="#FEBA00"
              >
                Limited Supply
              </Button>
              <p className="text-base xl:text-[16px] font-normal paytone leading-[27.92px] text-center pt-[10px]">
                Only a fixed number of coins will be available during the
                presale.
              </p>
            </div>
            <div className="w-full xl:w-[45%] xl:p-[25px] md:p-[20px] p-[15px]  flex flex-col justify-center items-center rounded-[27px] bg-[#F3D583]">
              <Button
                className="luckiest transition-all duration-500 hover:!bg-white  hover:!text-[#070707]  text-[11px] md:!text-[12px]  xl:!text-[15px] xl:w-[180px]  w-[150px] !font-[500] !bg-[#070707] !text-[#C57E33]"
                borderColor="#FEBA00"
              >
                Bonus
              </Button>
              <p className="text-base xl:text-[16px]font-normal paytone leading-[27.92px] text-center pt-[10px]">
                Early participants will receive a bonus percentage of coins.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div
        className={`${styles.blur} w-[300%] left-[-150px] translate-x-[-20%] h-[100px] xl:h-[150px] absolute -bottom-7 xl:-bottom-14`}
      ></div>
    </section>
  );
};
