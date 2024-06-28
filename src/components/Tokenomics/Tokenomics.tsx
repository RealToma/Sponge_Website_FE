import styles from "./Tokenomics.module.css";

export const Tokenomics = () => {
  return (
    <section className={`${styles.bg}  w-full min-h-screen `}>
      <div className="w-full h-full relative">
        <div className="pt-[85px] w-full flex flex-col items-center">
          <h1 className="paytone text-7xl text-white te font-normal leading-[72px] text-center">
            Total Supply
          </h1>
          <p className="paytone mt-2 w-[60%] text-2xl text-[#F3D583] font-normal leading-[33.5px] text-center">
            We have a fixed supply, ensuring scarcity and value. Circulating
            Supply: The number of coins in circulation, available for trading.
            Burn Mechanism: To increase scarcity, a percentage of coins are
            regularly burned. Rewards and Incentives: Earn rewards through
            staking, farming, and participating in the community. Dive deep into
            the world of tokenomics with me!
          </p>
        </div>
        <div className="flex h-full items-center">
          <div className="w-1/2  h-full relative">
            <div className="absolute -top-[200px]">
              <img src="./tokenomics.png" alt="" className="w-full" />
            </div>
          </div>
          <div className="w-1/2 h-full">
            <img src="./total-gril.png" alt="" />
          </div>
        </div>
        <div className={`${styles.line} w-full absolute bottom-[-60px] `}></div>
      </div>
    </section>
  );
};
