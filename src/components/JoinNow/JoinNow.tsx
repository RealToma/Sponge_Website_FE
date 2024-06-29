import { Button } from "../../common";
import styles from "./JoinNow.module.css";

export const JoinNow = () => {
  return (
    <section className="w-full pt-20 bg-[#1E1E1E]">
      <h1
        data-aos="zoom-in"
        className=" text-[28px] xl:text-[65px] luckiest text-white font-normal leading-[65px] text-center"
      >
        How to Join the Presale
      </h1>
      <div className="w-full flex justify-center">
        <div
          data-aos="fade-up"
          className={`${styles.card} flex justify-center items-center flex-col w-[1107px] h-[500px] xl:h-[853px] `}
        >
          <h1 className="text-[#AF6D27] text-[28px] xl:text-[40px] font-normal leading-10 text-center luckiest">
            Join Now Presale
          </h1>
          <p className="w-[70%] mt-3 text-[10px] xl:text-xl font-normal paytone xl:leading-[35px] text-center text-[#263D6B]">
            The Tale of Sponge of Wallstreet on the Solana Blockchain
            (Continuation) After Sponge creating, Sponge of Wallstreet ($SWS),
            Sponge's life took an exciting turn. The coin's popularity soared,
            and Sponge became famous underwater. Everyone on Wall Street and
            beyond wanted a piece of $SWS. With $SWS's success, Sponge's
            ambitions grew. He wanted to make his mark not only underwater but
            also on the real Wall Street.
          </p>
          <div className=" pt-3 xl:pt-10">
            <Button className="text-[8px] md:!text-[10px]  xl:!text-xl !px-5 !pt-1 !pb-2 xl:!px-[29px] xl:!pt-[14px] xl:!pb-[19px] !font-[600] !bg-[#070707] !text-white">
              Join Now
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
