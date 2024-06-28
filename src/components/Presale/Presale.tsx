import { Button } from "../../common";
import styles from "./presale.module.css";
export const Presale = () => {
  return (
    <section className={`${styles.bg} w-full h-screen `}>
      <div className="w-full h-full relative">
        <div className="w-full container relative h-full flex">
          <div className="w-[40%] h-full relative">
            <img
              src="./presale-img.png"
              alt=""
              className="absolute bottom-10 -left-32"
            />
          </div>
          <div className="w-[60%]  relative h-full">
            <div className="absolute top-20">
              <div className="w-full h-full relative">
                <img src="./wood-card.png" alt="" />
                <div className="absolute top-0 left-0 w-full h-full flex justify-center flex-col items-center">
                  <p className="text-[40px] font-normal text-[#663C0C] luckiest leading-10 text-center">
                    presale
                  </p>
                  <p className="text-2xl w-[65%] mt-[21px] mb-[58px] text-[#263D6B] paytone font-normal leading-[33.5px] text-center">
                    Join our presale to be part of something big, and keep an
                    eye out for upcoming airdrops to fill your treasure chest
                    with valuable coins!
                  </p>
                  <Button className="paytone bg-[#070707] text-white ">
                    JOIN NOW
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className={`${styles.line} w-full h-[110px] absolute -bottom-14 `}
        ></div>
        <img src="./presale-line.png" alt="" className="absolute -bottom-10" />
      </div>
    </section>
  );
};
