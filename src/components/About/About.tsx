import { Button } from "../../common";
import { PlayIcon } from "../../icons";
import styles from "./About.module.css";
export const About = () => {
  return (
    <section className={`${styles.bg} w-full h-screen`}>
      <div className="w-full relative h-full">
        <div className="w-full flex gap-x-[22px] container pt-[123px]">
          <div className="w-[60%]">
            <div className=" relative w-full h-full">
              <img src="./wood-card.png" alt="" className="w-full h-[698px]" />
              <div className="absolute top-1/2  -translate-y-1/2 left-1/2 -translate-x-1/2 w-[65%]">
                <h1 className="text-[40px] font-normal leading-10 text-center luckiest text-[#AF6D27]">
                  About Sponge{" "}
                </h1>
                <p className="text-xl mt-[10px] mb-[5px] luckiest text-[#263D6B] font-[400] leading-[35px] text-center">
                  The Tale of Sponge of Wallstreet on the Solana Blockchain
                  (Continuation) After Sponge creating, Sponge of Wallstreet
                  ($SWS), Sponge's life took an exciting turn. The coin's
                  popularity soared, and Sponge became famous underwater.
                  Everyone on Wall Street and beyond wanted a piece of $SWS.
                  With $SWS's success, Sponge's ambitions grew. He wanted to
                  make his mark not only underwater but also on the real Wall
                  Street.{" "}
                </p>
                <div className="w-full flex justify-center">
                  <Button className="bg-[#070707] text-white">
                    LEARN MORE
                  </Button>
                </div>
              </div>
            </div>
          </div>
          <div className="w-[40%]">
            <div className="py-[30px] rounded-[27px] w-full bg-[#F3D583] px-[31px]">
              <div className="relative rounded-[19px] ">
                <img src="/about-video-banner.png" alt="" className="w-full" />
                <button className="absolute text-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                  <PlayIcon />
                </button>
              </div>
              <div
                className={`m-auto rotate-[3.73deg] w-[80%] h-[34.52px] ${styles.about_card_shadow} `}
              ></div>

              <h1 className="luckiest my-[90px] text-[#AF6D27] text-[40px] font-normal leading-10 text-center">
                The Wolf of Wallstreet PETRIC one
              </h1>
            </div>
          </div>
        </div>
        <div
          className={`${styles.about_line}  w-full absolute -bottom-[90px]`}
        ></div>
      </div>
    </section>
  );
};
