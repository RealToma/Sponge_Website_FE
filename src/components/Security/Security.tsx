import { Button } from "../../common";
import styles from "./Security.module.css";

import gsap from "gsap";
import { useEffect, useRef } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export const Security = () => {
  const textContent = useRef<HTMLDivElement>(null);

  const card1 = useRef<HTMLDivElement>(null);
  const card2 = useRef<HTMLDivElement>(null);
  const card3 = useRef<HTMLDivElement>(null);

  useEffect(() => {
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
      card1.current,
      { opacity: 0, rotateX: 50 },
      {
        opacity: 1,
        rotateX: 0,
        duration: 1.5,
        scrollTrigger: {
          trigger: card1.current,
        },
      }
    );

    gsap.fromTo(
      card2.current,
      { opacity: 0, rotateX: 50 },
      {
        opacity: 1,
        rotateX: 0,
        duration: 1.5,
        scrollTrigger: {
          trigger: card2.current,
        },
      }
    );

    gsap.fromTo(
      card3.current,
      { opacity: 0, rotateX: 50 },
      {
        opacity: 1,
        rotateX: 0,
        duration: 1.5,
        scrollTrigger: {
          trigger: card3.current,
        },
      }
    );
  }, []);

  return (
    <section className="w-full min-h-screen xl:h-[1078px] relative ">
      <img
        src="/security.jpg"
        alt=""
        className="w-full absolute top-0 left-0  z-[-1] h-full object-cover xl:object-fill"
      />
      <div className="container px-5 xl:px-0  flex-col-reverse md:flex-col-reverse flex h-full xl:flex-row items-end justify-end pb-[237px]">
        <div className="z-[101] h-full flex items-end w-full md:w-full xl:w-[30%] relative">
          <img
            src="./securty-person.png"
            alt=""
            className=" h-[400px] xl:h-[600px]  static md:static xl:absolute xl:bottom-[-130px] bottom-[-200px]"
          />
        </div>
        <div className="z-[101]  w-full md:w-full xl:w-[70%]">
          <h1
            ref={textContent}
            className="text-[28px] xl:text-7xl font-normal text-white luckiest leading-[72px] text-center"
          >
            Security
          </h1>
          <p
            ref={textContent}
            className="text-[14px] xl:text-xl paytone mb-4 xl:mb-[10px] text-white font-normal xl:leading-[34.23px] tracking-[-0.01em] text-center"
          >
            Stay vigilant and secure, and you'll enjoy the benefits <br /> of
            our memecoin without worries
          </p>
          <div className=" flex justify-evenly w-full flex-wrap gap-x-[61px] relative  gap-y-[61px] ">
            <div
              ref={card1}
              className="bg-[#F3D583] w-full md:w-full xl:w-[45%]  rounded-[21px]  py-[35px] px-[34px]"
            >
              <h1 className=" text-[24px] xl:text-2xl font-normal xl:leading-6 text-left luckiest">
                Secure <br /> Transactions
              </h1>
              <p className=" text-sm xl:text-base paytone mt-[9px] font-normal xl:leading-[27.39px] tracking-[-0.01em] text-left">
                Advanced encryption protects your <br /> transactions.
              </p>

              <div className="absolute -bottom-4 xl:-bottom-8 left-1/2 -translate-x-1/2">
                <Button
                  className="montserrat transition-all duration-500 hover:!bg-white hover:!text-[#070707] text-[8px] md:!text-[10px]  xl:!text-[16px] !px-5 !pt-1 !pb-2 xl:!px-[29px] xl:!pt-[14px] xl:!pb-[19px] !font-[600] !bg-[#070707] !text-white"
                  borderColor="#F3D583"
                >
                  LEARN MORE
                </Button>
              </div>
            </div>

            <div
              ref={card2}
              className="bg-[#F3D583] w-full md:w-full xl:w-[45%] relative rounded-[21px]  py-[35px] px-[34px]"
            >
              <h1 className=" text-[24px] xl:text-2xl font-normal xl:leading-6 text-left luckiest">
                Secure <br /> Transactions
              </h1>
              <p className=" text-sm xl:text-base paytone mt-[9px] font-normal xl:leading-[27.39px] tracking-[-0.01em] text-left">
                Use reputable wallets and enable <br /> two-factor
                authentication
              </p>

              <div className="absolute -bottom-4 xl:-bottom-8 left-1/2 -translate-x-1/2">
                <Button
                  className="montserrat transition-all duration-500 hover:!bg-white hover:!text-[#070707] text-[8px] md:!text-[10px]  xl:!text-[16px] !px-5 !pt-1 !pb-2 xl:!px-[29px] xl:!pt-[14px] xl:!pb-[19px] !font-[600] !bg-[#070707] !text-white"
                  borderColor="#F3D583"
                >
                  LEARN MORE
                </Button>
              </div>
            </div>

            <div
              ref={card3}
              className="bg-[#F3D583] w-full md:w-full xl:w-[45%] relative rounded-[21px]  py-[35px] px-[34px]"
            >
              <h1 className=" text-[24px] xl:text-2xl font-normal xl:leading-6 text-left luckiest">
                Wallet <br /> Safety
              </h1>
              <p className=" text-sm xl:text-base paytone mt-[9px] font-normal xl:leading-[27.39px] tracking-[-0.01em] text-left">
                Never share your private keys and <br /> be cautious of phishing
                attempts
              </p>

              <div className="absolute -bottom-4 xl:-bottom-8 left-1/2 -translate-x-1/2">
                <Button
                  className="montserrat transition-all duration-500 hover:!bg-white hover:!text-[#070707] text-[8px] md:!text-[10px]  xl:!text-[16px] !px-5 !pt-1 !pb-2 xl:!px-[29px] xl:!pt-[14px] xl:!pb-[19px] !font-[600] !bg-[#070707] !text-white"
                  borderColor="#F3D583"
                >
                  LEARN MORE
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className={`z-[103] w-[300%] left-[-20%] h-[70px] xl:h-[122px] absolute -bottom-8 xl:-bottom-14 ${styles.blur}`}
      ></div>
    </section>
  );
};
