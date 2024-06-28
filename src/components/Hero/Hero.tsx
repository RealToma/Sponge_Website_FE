import { Button } from "../../common";
import { BuyIcon } from "../../icons";
import styles from "./hero.module.css";
export const Hero = () => {
  return (
    <section className={`${styles.bg} h-screen `}>
      <div className="w-full container flex h-full">
        <div className="w-1/2 h-full flex flex-col justify-center items-start">
          <h1
            className={` ${styles.hero_shadow} relative text-7xl luckiest font-normal text-white tex leading-[72px] text-left`}
          >
            Bikini Bottom style combined w ith <br /> Wall Street.
            <span></span>
          </h1>
          <p
            className={`flex mt-[7px]  mb-[35px] paytone ${styles.hero_shadow} mt-5 mb-8 drop-shadow-2xl items-center gap-x-[13px] text-white text-2xl font-bold leading-[29.26px] text-left`}
          >
            <div className="w-[72px] h-[3px]  bg-white rounded-[5px]" /> Missed
            Sponge? This Is Your <br /> Final Chance.
          </p>
          <Button
            className="montserrat font-[600] bg-[#070707] text-white"
            leftIcon={<BuyIcon />}
            borderColor="#F3D583"
          >
            BUY NOW
          </Button>
        </div>
        <div className="w-1/2 h-full"></div>
      </div>
    </section>
  );
};
