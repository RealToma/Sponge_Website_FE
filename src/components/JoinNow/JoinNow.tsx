import { Button } from "../../common";
import styles from "./JoinNow.module.css";

import gsap from "gsap";
import { useEffect, useRef } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export const JoinNow = () => {
  const joinNow = useRef<HTMLDivElement>(null);
  const card = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.fromTo(
      joinNow.current,
      { opacity: 0, scale: 0.3 },
      {
        opacity: 1,
        scale: 1,
        duration: 1.5,
        scrollTrigger: {
          trigger: joinNow.current,
        },
      }
    );

    gsap.fromTo(
      card.current,
      { opacity: 0, y: 50 },
      {
        y: 0,
        opacity: 1,
        duration: 1.5,
        scrollTrigger: {
          trigger: card.current,
        },
      }
    );
  }, []);

  return (
    <section className="w-full pt-20 relative pb-20">
      <h1
        ref={joinNow}
        className=" text-[28px] md:text[40px] xl:text-[65px] luckiest text-white font-normal xl:leading-[65px] text-center"
      >
        How to Join the Presale
      </h1>
      <div className="w-full flex justify-center">
        <div
          ref={card}
          className={`${styles.card} z-[101]  flex justify-center items-center flex-col w-[1107px] h-[500px] xl:h-[853px] `}
        >
          <h1 className="text-[#AF6D27] text-[18px] md:text-[30px] xl:text-[40px] font-normal leading-10 text-center luckiest">
            Join Now Presale
          </h1>
          <p className="xl:w-[70%] lg:w-[30%] md:w-[50%] sm:w-[50%] w-[70%] text-[8px] sm:text-[12px] lg:text-[12px] md:text-[12px] mt-0 xl:mt-3 xl:text-xl font-normal paytone xl:leading-[35px] text-center text-[#263D6B]">
            The Tale of Sponge of Wall Street on the Solana Blockchain
            (Continuation) After Sponge creating, Sponge of Wall Street ($SOW),
            Sponge's life took an exciting turn. The coin's popularity soared,
            and Sponge became famous underwater. Everyone on Wall Street and
            beyond wanted a piece of $SOW. With $SOW's success, Sponge's
            ambitions grew. He wanted to make his mark not only underwater but
            also on the real Wall Street.
          </p>
          <div className=" pt-0 xl:pt-10">
            <Button className="text-[8px] transition-all duration-500 hover:!text-[#070707]  hover:!bg-white md:!text-[10px]  xl:!text-xl !px-5 !pt-1 !pb-2 xl:!px-[29px] xl:!pt-[14px] xl:!pb-[19px] !font-[600] !bg-[#070707] !text-white">
              Join Now
            </Button>
          </div>
        </div>
      </div>
      <img
        src="/join-now-bg.jpg"
        className=" absolute top-0 left-0 w-full z-[-1] h-full object-cover"
      />
      <div
        className={`${styles.blur} w-[300%] left-[-150px] translate-x-[-20%] h-[100px] xl:h-[150px] absolute -bottom-7 xl:-bottom-14`}
      ></div>
    </section>
  );
};
