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
    <section className="w-full relative min-h-screen xl:h-[1200px]">
      <img
        src="/faq-bg.png"
        alt=""
        className="absolute w-full h-full z-[-1] top-0 left-0 object-cover xl:object-fill"
      />
      <div className="w-full container px-5 pt-44 xl:pt-0  xl:px-0 flex items-end h-full flex-col-reverse xl:flex-row pb-[50px]">
        <img
          ref={person}
          src="/faq-person.png"
          alt=""
          className="z-[101]  w-[70%] xl:w-[30%] "
        />
        <div
          ref={card}
          className="z-[101]  w-full xl:w-[70%] pt-5 pb-5 xl:pt-[27px] xl:pb-[46px] pl-4 xl:pl-[48px] pr-4 xl:pr-[54px] bg-[#c23631] rounded-xl xl:rounded-[38px]"
        >
          <h1 className=" text-[28px] xl:text-[60px] text-center luckiest font-normal leading-[77px] text-[#F3D583] mb-[15px]">
            F.A.Q
          </h1>
          <div className="flex flex-col gap-y-6">
            <Accordion
              title="1. What is a memecoin?"
              content="A cryptocurrency inspired by internet memes and pop culture. It can have real-world value and uses."
            />

            <Accordion
              title="2. How do I buy memecoins?"
              content="You can buy our memecoins on popular cryptocurrency exchanges or during our presale."
            />

            <Accordion
              title="3. Are memecoins safe?"
              content="Like all investments, memecoins come with risks. We recommend doing your research and investing wisely.
Hopefully, that covers your questions. If not, well, feel free to ask more."
            />

            {/* <Accordion
              title="3.How to buy sponge?"
              content="3.what  sponge is different than others?"
            /> */}
          </div>
        </div>
      </div>
      <div
        className={`${styles.blur} w-[300%] left-[-150px] translate-x-[-20%] h-[100px] xl:h-[150px] absolute -bottom-7 xl:-bottom-14`}
      ></div>
    </section>
  );
};
