import styles from "./Airdrops.module.css";

export const Airdrops = () => {
  return (
    <section className={`${styles.bg} w-full h-screen `}>
      <div className="w-full h-full relative">
        <div className="w-full h-full flex container">
          <div className="w-1/2 flex flex-col justify-center">
            <div className="w-[462px] flex justify-center relative">
              <img src="./shell.png" alt="shell" className="w-full h-full" />
              <div className="absolute w-[80%] flex-col flex items-center top-[40%] left-[46%] -translate-x-1/2 -translate-y-1/2">
                <h1 className="paytone text-[32px] text-[#673700] font-normal leading-[44.67px] text-center">
                  Airdrops
                </h1>
                <p className="paytone mt-[3px] text-[#263D6B] text-sm font-normal leading-[19.54px] text-center">
                  Get free coins by participating in community activities,
                  holding a certain amount of our memecoin, or completing simple
                  tasks.
                </p>
              </div>
            </div>
            <div className="w-[462px] flex justify-center relative">
              <img src="./shell.png" alt="shell" className="w-full h-full" />
              <div className="absolute w-full flex-col flex items-center top-[40%] left-[48%] -translate-x-1/2 -translate-y-1/2">
                <h1 className="paytone text-[32px] text-[#673700] font-normal leading-[44.67px] text-center">
                  Presale
                </h1>
                <p className="paytone w-[80%]  text-center text-[#263D6B] text-sm font-normal leading-[19.54px]">
                  Be an early bird! Buy coins at a discounted rate before they
                  hit the market.
                </p>
              </div>
            </div>
          </div>
          <div className="w-1/2 h-full flex justify-center items-end">
            <img src="./air-drop-img-1.png" alt="" />
          </div>
        </div>
        <div
          className={`${styles.airdrop_line}  w-full h-[110px] absolute -bottom-10`}
        ></div>
      </div>
    </section>
  );
};
