import { Button } from "../../common";
import { PlayIcon } from "../../icons";
import styles from "./About.module.css";
export const About = () => {
  return (
    <section id="about" className="w-full relative min-h-screen xl:h-[1017px]">
      <div className="w-full relative h-full">
        <img
          src="./about-bg.png"
          className="absolute top-0 z-[-1] left-0 w-full h-full object-cover xl:object-fill"
        />
        <div className="w-full flex-col xl:flex-row flex h-full pt-0 xl:pt-32 pb-0 xl:pb-72 items-center gap-x-[20px] px-8 xl:px-0  container">
          <div className="w-full xl:w-[60%]">
            <div
              data-aos="zoom-in"
              className={`${styles.card} h-[500px] xl:min-h-[698px] xl:pt-[162px] xl:pb-[143px] flex px-0 xl:px-[142px]  flex-col items-center justify-center `}
            >
              <h1 className=" text-[15px] lg:text-[40px] text-[#AF6D27] font-normal xl:leading-10 text-center luckiest">
                About Sponge{" "}
              </h1>
              <p className=" w-[60%] md:w-[45%] xl:w-auto leading-[8px] md:leading-3  text-[7px] md:text-[10px] xl:text-[14px] mt-1 xl:mt-[10px] mb-[5px] text-[#263D6B]  font-normal xl:leading-[28px] text-center paytone">
                The Tale of Sponge of Wallstreet on the Solana Blockchain
                (Continuation) After Sponge creating, Sponge of Wallstreet
                ($SWS), Sponge's life took an exciting turn. The coin's
                popularity soared, and Sponge became famous underwater. Everyone
                on Wall Street and beyond wanted a piece of $SWS. With $SWS's
                success, Sponge's ambitions grew. He wanted to make his mark not
                only underwater but also on the real Wall Street.{" "}
              </p>
              <Button
                className="montserrat text-[8px] md:!text-[10px]  xl:!text-xl !px-5 !pt-1 !pb-2 xl:!px-[29px] xl:!pt-[14px] xl:!pb-[19px] !font-[600] !bg-[#070707] !text-white"
                borderColor="#F3D583"
              >
                LEARN MORE
              </Button>
            </div>
          </div>
          <div className=" w-full pb-40 xl:pb-0 xl:w-[40%]">
            <div className="py-[30px] bg-[#F3D583] px-[31px] rounded-[27px] bg-[">
              <div className="w-full relative">
                <img className="w-full" src="./about-video-img.png" alt="" />
                <button className="absolute top-1/2 -translate-y-1/2 text-white left-1/2 -translate-x-1/2">
                  <PlayIcon />
                </button>
                <div
                  className={`m-auto rotate-[3.73deg] w-[80%] h-[34.52px] ${styles.about_card_shadow} `}
                ></div>
              </div>
              <h1 className=" text-[20px] xl:text-[40px] luckiest text-[#AF6D27] my-5 xl:my-[90px] font-normal xl:leading-10 text-center">
                The Wolf of Wallstreet PETRIC one
              </h1>
            </div>
          </div>
        </div>
      </div>
      <div
        className={`${styles.blur} h-[200px] xl:h-[510px] absolute bottom-[-100px] xl:-bottom-[400px] `}
      ></div>
    </section>
  );
};
