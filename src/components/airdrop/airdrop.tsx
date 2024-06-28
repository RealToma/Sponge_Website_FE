export const Airdrop = () => {
  return (
    <section className="w-full min-h-screen xl:h-[1308px] relative">
      <div className="w-full flex flex-col  xl:flex-row h-full container">
        <div className=" relative w-full pt-20 xl:pt-0 xl:w-1/2 h-full flex flex-col items-center justify-center">
          <div className="w-full xl:w-[462px] relative">
            <img src="./shell.png" alt="" />
            <div className="absolute flex justify-center flex-col items-center pr-10 top-[40%] -translate-y-1/2">
              <h1 className=" text-[17px]  md:text-[24px]  xl:text-[32px] text-[#723D00] paytone font-normal xl:leading-[44.67px] text-center">
                Airdrops
              </h1>
              <p className=" text-[10px] xl:text-sm w-[60%] text-[#263D6B] paytone font-normal xl:leading-[19.54px] text-center">
                Get free coins by participating in community activities, holding
                a certain amount of our memecoin, or completing simple tasks.
              </p>
            </div>
          </div>

          <div className="w-full xl:w-[462px] relative">
            <img src="./shell.png" alt="" />
            <div className="absolute flex justify-center flex-col items-center pr-10 top-[40%] -translate-y-1/2">
              <h1 className=" text-[17px] md:text-[24px] xl:text-[32px] text-[#723D00] paytone font-normal xl:leading-[44.67px] text-center">
                Presale
              </h1>
              <p className="text-[10px]  xl:text-sm w-[60%] text-[#263D6B] paytone font-normal xl:leading-[19.54px] text-center">
                Be an early bird! Buy coins at a discounted rate before they hit
                the market.
              </p>
            </div>
          </div>
        </div>
        <div className=" w-full xl:w-1/2 h-full flex items-end">
          <img src="./air-drop-img-1.png" alt="" />
        </div>
      </div>
      <img
        src="./airdrop-bg.png"
        alt=""
        className="z-[-1] w-full h-full absolute top-0  object-cover xl:object-fill"
      />
    </section>
  );
};
