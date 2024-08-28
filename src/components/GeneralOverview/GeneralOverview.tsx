import { Button } from "../../common";
import styles from "./GeneralOverview.module.css";
import gsap from "gsap";
import { useEffect, useRef } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export const GeneralOverview = () => {
  const person = useRef<HTMLImageElement>(null);
  const card = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.fromTo(
      person.current,
      { x: -100 },
      {
        x: 0,
        duration: 2,
        scrollTrigger: {
          trigger: person.current,
        },
      }
    );

    gsap.fromTo(
      card.current,
      { opacity: 0 },
      {
        x: 0,
        opacity: 1,
        duration: 3,
        scrollTrigger: {
          trigger: card.current,
        },
      }
    );
  }, []);

  return (
    <section className="w-full xl:h-[1200px] h-[1000px] relative ">
      <img
        src="/general-overview.png"
        alt=""
        className="w-full h-full object-cover object-left xl:object-fill absolute top-0 z-[-1]"
      />
      <div
        ref={person}
        className=" absolute z-[101] xl:left-[10%] bottom-[0px] xl:w-1/4 left-[5%]"
      >
        <img src="/general.png" alt="" />
      </div>
      <div
        ref={card}
        className="absolute z-[101] right-[5%]  xl:left-[60%]  top-[-200px] "
      >
        <div
          className={`h-[714px]  xl:pb-20  flex items-center justify-center flex-col relative w-[100%] xl:w-[600px] ${styles.bg} `}
        >
          <p className=" text-[12px] mt-10 xl:mt-[150px] xl:text-[18px] w-[40%] xl:w-[40%] font-normal paytone xl:leading-[23.83px] tracking-[-0.02em] text-center">
            Hiya, pals!{"\u00a0\u00a0\u00a0"}Spongy greetings from the Office!
          </p>
          <p className=" pb-[5px] xl:pb-[10px] text-[12px] xl:text-[18px]  text-[#FFFFFF] w-[50%] paytone font-normal xl:leading-[25.23px] tracking-[-0.03em] text-center">
            I’m Sponge, here to give you a cheerful overview of our fantastic
            Memecoin.
          </p>

          <Button
            className="montserrat transition-all duration-500 hover:!text-[#F3D583] hover:!bg-black !text-[8px] md:!text-[10px]  xl:!text-[18px] !px-5 !pt-1 !pb-2 xl:!px-[29px] xl:!pt-[14px] xl:!pb-[19px] !font-[600] !bg-[#F3D583] !text-black"
            borderColor="#F3D583"
          >
            MORE INFO
          </Button>
        </div>
      </div>
      <div
        className={`w-[300%] z-[100000] left-[-150px] translate-x-[-20%] h-[68px] absolute -bottom-10 ${styles.blur} `}
      ></div>
    </section>
  );
};
