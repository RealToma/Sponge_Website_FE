import { Button } from "../../common";
import { BuyIcon } from "../../icons";
import styles from "./Hero.module.css";
export const Hero = () => {
  return (
    <section className={`${styles.bg} w-full h-screen  `}>
      <div className="container w-full h-full  flex items-center">
        <div className="w-[55%]">
          <h1
            className={` ${styles.hero_shadow} luckiest drop-shadow-2xl text-7xl text-white  font-normal leading-[72px] text-left`}
          >
            Bikini Bottom style combined w ith Wall Street.
          </h1>
          <p
            className={`flex ${styles.hero_shadow} mt-5 mb-8 drop-shadow-2xl items-center gap-x-[13px] text-white text-2xl font-bold leading-[29.26px] text-left`}
          >
            <div className="w-[72px] h-[3px] bg-white rounded-[5px]" /> Missed
            Sponge? This Is Your Final Chance.
          </p>
          <Button
            leftIcon={<BuyIcon />}
            className="text-base font-semibold leading-[19.5px] text-left"
          >
            BUY NOW
          </Button>
        </div>
      </div>
      <div
        className={`${styles.hero_line} w-full absolute -bottom-[90px]`}
      ></div>
    </section>
  );
};
