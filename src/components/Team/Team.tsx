import styles from "./Team.module.css";
import gsap from "gsap";
import { useEffect, useRef } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export const Team = () => {
  const person = useRef<HTMLDivElement>(null);
  const team = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.fromTo(
      person.current,
      { opacity: 0 },
      {
        opacity: 1,
        duration: 1.5,
        scrollTrigger: {
          trigger: person.current,
        },
      }
    );

    gsap.fromTo(
      team.current,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1.5,
        scrollTrigger: {
          trigger: team.current,
        },
      }
    );
  }, []);

  return (
    <section id="team" className="w-full h-screen md:h-[1471px] relative">
      <img
        src="./team-bg.png"
        alt=""
        className="w-full h-full z-[-1] object-cover xl:object-fill"
      />
      <div
        ref={person}
        className="absolute w-[500px] top-[-270px] md:top-[-170px] xl:top-[-150px] left-[38%] xl:left-[43%] -translate-x-1/2 "
      >
        <img src="./team-img-1.png" alt="" className="w-full h-full" />
      </div>
      <div
        ref={team}
        className="absolute bottom-[100px] md:bottom-[250px] xl:bottom-[100px] w-full flex flex-col items-center"
      >
        <h1 className=" text-[28px] xl:text-7xl font-normal xl:leading-[100px] text-left text-white luckiest">
          Team
        </h1>
        <img src="./team.png" alt="" className="w-full xl:w-[901px]" />
      </div>
      <div
        className={`w-full h-[81px] ${styles.blur} absolute -bottom-5 `}
      ></div>
    </section>
  );
};
