import { Accordion } from "../../common";
import styles from "./Faq.module.css";
import gsap from "gsap";
import { useEffect, useRef } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export const Faq = () => {
  const person = useRef<HTMLImageElement>(null);
  const card = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.fromTo(
      person.current,
      { x: -50 },
      {
        x: 0,
        duration: 1.5,
        scrollTrigger: {
          trigger: person.current,
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
    <section className="w-full relative min-h-screen xl:h-[1533px]">
      <img
        src="./faq-bg.png"
        alt=""
        className="absolute h-full z-[-1] top-0 left-0 object-cover xl:object-fill"
      />
      <div className="w-full container px-5 pt-44 xl:pt-0  xl:px-0 flex items-end h-full flex-col-reverse xl:flex-row pb-[50px]">
        <img
          ref={person}
          src="./faq-person.png"
          alt=""
          className="z-[101]  w-[70%] xl:w-[30%] "
        />
        <div
          ref={card}
          className="z-[101]  w-full xl:w-[70%] pt-5 pb-5 xl:pt-[27px] xl:pb-[46px] pl-4 xl:pl-[48px] pr-4 xl:pr-[54px] bg-[#005B81] rounded-xl xl:rounded-[38px]"
        >
          <h1 className=" text-[28px] xl:text-7xl text-center luckiest font-normal leading-[77px] text-[#D9D9D9]">
            F.A.Q
          </h1>
          <div className="flex flex-col gap-y-6">
            <Accordion
              title="1.What services  offer?"
              content="1.what  sponge is different than others?"
            />

            <Accordion
              title="2.Why sponge is different than others?"
              content="2.what  sponge is different than others?"
            />

            <Accordion
              title="3.What is your working process?"
              content="3.what  sponge is different than others?"
            />

            <Accordion
              title="3.How to buy sponge?"
              content="3.what  sponge is different than others?"
            />
          </div>
        </div>
      </div>
      <div
        className={` ${styles.blur} w-[300%] left-[-150px]  absolute -bottom-5 h-[47px]`}
      ></div>
    </section>
  );
};
