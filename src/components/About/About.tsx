import { Button } from "../../common";
import styles from "./about.module.css";
export const About = () => {
  return (
    <section className="w-full h-[1017px]">
      <div className="w-full relative h-full">
        <img
          src="./about-bg.png"
          className="absolute top-0 z-[-1] left-0 w-full h-full object-fill"
        />
        <div className="w-full flex container">
          <div className="w-[60%]">
            <div
              className={`${styles.card} flex px-[142px]  flex-col items-center justify-center `}
            >
              <h1 className="text-[40px] text-[#AF6D27] font-normal leading-10 text-center luckiest">
                About Sponge{" "}
              </h1>
              <p className="text-[18px] text-[#263D6B]  font-normal leading-[35px] text-center paytone">
                The Tale of Sponge of Wallstreet on the Solana Blockchain
                (Continuation) After Sponge creating, Sponge of Wallstreet
                ($SWS), Sponge's life took an exciting turn. The coin's
                popularity soared, and Sponge became famous underwater. Everyone
                on Wall Street and beyond wanted a piece of $SWS. With $SWS's
                success, Sponge's ambitions grew. He wanted to make his mark not
                only underwater but also on the real Wall Street.{" "}
              </p>
              <Button
                className="montserrat  font-[600] bg-[#070707] text-white"
                borderColor="#F3D583"
              >
                LEARN MORE
              </Button>
            </div>
          </div>
          <div className="w-[40%]"></div>
        </div>
      </div>
    </section>
  );
};
