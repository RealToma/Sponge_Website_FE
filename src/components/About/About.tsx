import { Button } from "../../common";
// import { PlayIcon } from "../../icons";
import styles from "./About.module.css";
import gsap from "gsap";
import { useEffect, useRef } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export const About = () => {
  const container = useRef<HTMLDivElement>(null);
  const aboutVideo = useRef<HTMLDivElement>(null);
  // const [isPlay, setIsPlay] = useState(false);

  useEffect(() => {
    gsap.fromTo(
      container.current,
      { opacity: 0 },
      {
        opacity: 1,
        y: 0,
        duration: 2,
        scrollTrigger: {
          trigger: container.current,
        },
      }
    );

    gsap.fromTo(
      aboutVideo.current,
      { opacity: 0, y: 200 },
      {
        opacity: 1,
        y: 0,
        duration: 1.5,
        scrollTrigger: {
          trigger: aboutVideo.current,
        },
      }
    );
  }, []);

  return (
    <section id="about" className="w-full relative min-h-screen xl:h-[1017px]">
      <div className="w-full relative h-full">
        <img
          src="/about-bg.jpg"
          className="absolute top-0 z-[-1] left-0 w-full h-full object-cover xl:object-fill"
        />
        <div className="w-full flex-col xl:flex-row flex h-full pt-0 xl:pt-32 pb-0 xl:pb-96 items-center gap-x-[20px] px-5 xl:px-0  container">
          <div className=" z-[101] w-full py-8 xl:w-[60%]">
            <div
              ref={container}
              className={`${styles.card}  z-[101] h-[430px] xl:h-[500px] xl:min-h-[698px] xl:pt-[162px] xl:pb-[143px] flex px-0 xl:px-[142px]  flex-col items-center justify-center`}
            >
              <h1 className=" text-[18px] sm:text-[35px] md:text-[35px] lg:text-[40px] text-[#AF6D27] font-normal xl:leading-10 text-center luckiest">
                About Sponge
              </h1>
              <p className=" w-[60%] md:w-[40%]  xl:w-auto leading-[8px] md:leading-3  text-[9px]  md:text-[12px] xl:text-[14px] mt-[5px] xl:mt-[10px] mb-[5px] text-[#263D6B]  font-normal xl:leading-[28px] text-center paytone">
                The Tale of Sponge of Wall Street on the Solana Blockchain
                (Continuation) After Sponge creating, Sponge of Wall Street
                ($SOW), Sponge's life took an exciting turn. The coin's
                popularity soared, and Sponge became famous underwater. Everyone
                on Wall Street and beyond wanted a piece of $SOW. With $SOW's
                success, Sponge's ambitions grew. He wanted to make his mark not
                only underwater but also on the real Wall Street.{" "}
              </p>
              <Button
                className="montserrat transition-all duration-500 text-[9px] md:!text-[10px]  xl:!text-xl !px-4 !pt-[1px] !pb-[1px] xl:!px-[29px] xl:!pt-[14px] xl:!pb-[19px] !font-[600] !bg-[#070707] hover:!text-[#070707] hover:!bg-white !text-white items-center justify-center"
                borderColor="#F3D583"
              >
                LEARN MORE
              </Button>
            </div>
          </div>
          <div
            ref={aboutVideo}
            className="w-full pb-40 xl:pb-0 xl:w-[30%] z-[101]"
          >
            <div className="py-[20px] bg-[#F3D583] px-[20px] xl:py-[20px] rounded-[27px]">
              <div className="w-full relative">
                {/* {isPlay ? (
                  <video
                    src='./video.mp4'
                    muted
                    autoPlay
                    loop
                    className='!w-full h-[450px] object-cover rounded-[13px]'
                  ></video>
                ) : (
                  <>
                    <img
                      className='w-full rounded-[13px]'
                      src='./about-video-img.png'
                      alt=''
                    />
                    <button
                      onClick={() => setIsPlay(true)}
                      className='absolute top-1/2 -translate-y-1/2 text-white left-1/2 -translate-x-1/2'
                    >
                      <PlayIcon />
                    </button>
                    <div
                      className={`m-auto rotate-[3.73deg] w-[80%] h-[34.52px] ${styles.about_card_shadow} `}
                    ></div>
                  </>
                )} */}
                <video
                  src="/video/sponge_adver.mp4"
                  // muted
                  autoPlay
                  loop
                  controls
                  className="!w-full h-[450px] object-cover rounded-[12px]"
                ></video>
              </div>
              <h1 className="text-[18px] xl:text-[20px] luckiest text-[#AF6D27] my-2 xl:my-[10px] font-normal xl:leading-0 text-center">
                The Wolf of Wall Street PATRICK one
              </h1>
            </div>
          </div>
        </div>
      </div>
      <div
        className={`${styles.blur} w-[300%] left-[-150px] translate-x-[-20%] h-[100px] xl:h-[150px] absolute -bottom-7 xl:-bottom-14 `}
      ></div>
    </section>
  );
};
