import styles from "./airdrop.module.css";

import gsap from "gsap";
import { useEffect, useRef } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export const Airdrop = () => {
  const shell1 = useRef<HTMLDivElement>(null);
  const shell2 = useRef<HTMLDivElement>(null);
  const person = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.fromTo(
      shell1.current,
      { opacity: 0, rotateX: 50 },
      {
        opacity: 1,
        rotateX: 0,
        duration: 1.5,
        scrollTrigger: {
          trigger: shell1.current,
        },
      }
    );

    gsap.fromTo(
      shell2.current,
      { opacity: 0, rotateX: 50 },
      {
        opacity: 1,
        rotateX: 0,
        duration: 1.5,
        scrollTrigger: {
          trigger: shell2.current,
        },
      }
    );

    gsap.fromTo(
      person.current,
      { opacity: 0, x: 100 },
      {
        opacity: 1,
        x: 0,
        duration: 1.5,
        scrollTrigger: {
          trigger: person.current,
        },
      }
    );
  }, []);

  return (
    <section className="w-full min-h-screen xl:h-screen relative">
      <div className="w-full flex flex-col px-5 xl:px-0 xl:flex-row h-full container">
        <div className="z-[101] relative w-full pt-44 xl:pt-0 xl:w-1/2 h-full flex flex-col items-end justify-end pb-20 ">
          <div ref={shell1} className="w-full xl:w-[462px] relative">
            <img src="/shell.png" alt="" />
            <div className="absolute pl-0 left-1/2 xl:left-[50%] -translate-x-1/2 md:pl-8 xl:pl-0 flex justify-center flex-col items-center  top-[40%] -translate-y-1/2">
              <h1 className=" text-[15px]  md:text-[24px]  xl:text-[32px] text-[#c23631] paytone font-normal xl:leading-[44.67px] text-center">
                Airdrops
              </h1>
              <p className="text-[11px] xl:text-sm w-[100%] text-[#263D6B] paytone font-normal xl:leading-[19.54px] text-center">
                Get free coins by participating in community activities, holding
                a certain amount of our memecoin, or completing simple tasks.
              </p>
            </div>
          </div>

          <div
            ref={shell2}
            className="w-full xl:w-[462px] relative mt-[30px]  lg:mt-[100px]"
          >
            <img src="/shell.png" alt="" />
            <div className="absolute pl-0 left-1/2 xl:left-[50%] -translate-x-1/2 md:pl-8 xl:pl-0 flex justify-center flex-col items-center  top-[40%] -translate-y-1/2">
              <h1 className=" text-[15px]  md:text-[24px]  xl:text-[32px] text-[#c23631] paytone font-normal xl:leading-[44.67px] text-center">
                Buy Now
              </h1>
              <p className="text-[11px] xl:text-sm m-auto w-[100%] text-[#263D6B] paytone font-normal xl:leading-[19.54px] text-center">
                Be an early bird! Buy coins at a discounted rate before they hit
                the market.
              </p>
            </div>
          </div>
        </div>
        <div
          ref={person}
          className="z-[101] w-full relative  h-[600px] xl:h-full xl:w-1/2 justify-center flex items-end pb-8"
        >
          <img
            src="/air-drop-img-1.png"
            alt=""
            className=" w-full xl:w-[900px] absolute bottom-[50px] xl:bottom-[-35px]  xl:h-[800px] "
          />
        </div>
      </div>
      <img
        src="/airdrop-bg.jpg"
        alt=""
        className="z-[-1] w-full h-full  absolute top-0  xl:object-right-bottom object-cover xl:object-fill"
      />
      <div
        className={`w-[300%] left-[-150px] translate-x-[-20%] h-[104px] absolute -bottom-10 ${styles.blur}`}
      ></div>
    </section>
  );
};
