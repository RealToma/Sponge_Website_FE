import styles from "./tokenomics.module.css";

import gsap from "gsap";
import { useEffect, useRef } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export const Tokenomics = () => {
  const welcome = useRef<HTMLDivElement>(null);

  const textContent = useRef<HTMLDivElement>(null);
  const tokenomics = useRef<HTMLDivElement>(null);
  const tokenGirl = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.fromTo(
      welcome.current,
      { opacity: 0, scale: 0.2 },
      {
        opacity: 1,
        scale: 1,
        duration: 1.5,
        scrollTrigger: {
          trigger: welcome.current,
        },
      }
    );

    gsap.fromTo(
      textContent.current,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1.5,
        scrollTrigger: {
          trigger: textContent.current,
        },
      }
    );

    gsap.fromTo(
      tokenomics.current,
      { opacity: 0 },
      {
        opacity: 1,
        y: 0,
        duration: 1.5,
        scrollTrigger: {
          trigger: tokenomics.current,
        },
      }
    );

    gsap.fromTo(
      tokenGirl.current,
      { opacity: 0, x: 50 },
      {
        opacity: 1,
        x: 0,
        duration: 1.5,
        scrollTrigger: {
          trigger: tokenGirl.current,
        },
      }
    );
  }, []);

  return (
    <section
      id="tokenomics"
      className="w-full min-h-screen xl:max-h-[1467px] relative"
    >
      <div className=" translate-y-8 xl:-translate-y-[198px]">
        <div
          ref={textContent}
          className="flex flex-col pt-[60px] xl:pt-[125px] items-center container px-5 xl:px-0"
        >
          <h1 className="text-[38px] xl:text-7xl text-white luckiest font-normal leading-[72px] text-center">
            Total Supply
          </h1>
          <p className="text-[10px] xl:text-[26px] w-full xl:w-[75%] paytone text-[#F3D583] font-normal xl:leading-[36.3px] text-center">
            We have a fixed supply, ensuring scarcity and value. Circulating
            Supply: The number of coins in circulation, available for trading.
            Burn Mechanism: To increase scarcity, a percentage of coins are
            regularly burned. Rewards and Incentives: Earn rewards through
            staking, farming, and participating in the community. Dive deep into
            the world of tokenomics with me!
          </p>
        </div>
      </div>
      <div className="container px-8 xl:px-0 flex-col-reverse xl:flex-row flex h-full">
        <div
          ref={tokenomics}
          className="w-full xl:w-1/2 flex relative h-auto xl:h-full "
        >
          <img
            src="./tokenomics.png"
            alt=""
            className="w-[600px] -translate-y-16 xl:translate-y-0 static xl:absolute  xl:top-[200px] left-0"
          />
        </div>
        <div
          ref={tokenGirl}
          className="w-[400px] md:w-[900px] xl:w-1/2 relative pt-16 xl:pt-0 flex items-center h-auto: xl:h-full "
        >
          <img
            src="./total-girl.png"
            alt=""
            className=" translate-x-[0px] md:translate-x-[-140px] xl:translate-x-0  w-full xl:w-auto"
          />
        </div>
      </div>
      <img
        src="./tokenomics-bg.png"
        alt=""
        className="absolute top-0 left-0 z-[-1] w-full h-full  object-cover xl:object-center "
      />
      <div
        ref={welcome}
        className="absolute w-full md:w-auto top-[-50px] xl:-top-[280px] left-1/2 -translate-x-1/2 z-10 "
      >
        <img
          id="welcome"
          src="./welcome.png"
          className="w-[850px] xl:w-[622px] "
        />
      </div>
      <div
        className={`${styles.blur} absolute -bottom-10 h-[70px]  xl:h-[110px] `}
      ></div>
    </section>
  );
};
