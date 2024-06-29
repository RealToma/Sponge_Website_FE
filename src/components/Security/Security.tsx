import { Button } from "../../common";
import styles from "./Security.module.css";

export const Security = () => {
  return (
    <section className="w-full h-[1078px] relative ">
      <img
        src="/security.png"
        alt=""
        className="w-full absolute top-0 left-0  z-[-1] h-full object-fill"
      />
      <div className="container px-8 xl:px-0 flex h-full flex-col justify-end pb-[137px]">
        <h1 className=" text-[28px] xl:text-7xl font-normal text-white luckiest leading-[72px] text-center">
          Security
        </h1>
        <p className=" text-[14px] xl:text-xl paytone mb-4 xl:mb-[10px] text-white font-normal xl:leading-[34.23px] tracking-[-0.01em] text-center">
          Stay vigilant and secure, and you'll enjoy the benefits <br /> of our
          memecoin without worries
        </p>
        <div className="grid gap-x-[61px] grid-cols-1 gap-y-[61px] xl:grid-cols-3">
          <div className="bg-[#F3D583] relative rounded-[21px]  py-[35px] px-[34px]">
            <h1 className=" text-[24px] xl:text-2xl font-normal xl:leading-6 text-left luckiest">
              Secure <br /> Transactions
            </h1>
            <p className=" text-sm xl:text-base paytone mt-[9px] font-normal xl:leading-[27.39px] tracking-[-0.01em] text-left">
              Advanced encryption protects your <br /> transactions.
            </p>

            <div className="absolute -bottom-4 xl:-bottom-8 left-1/2 -translate-x-1/2">
              <Button
                className="montserrat text-[8px] md:!text-[10px]  xl:!text-xl !px-5 !pt-1 !pb-2 xl:!px-[29px] xl:!pt-[14px] xl:!pb-[19px] !font-[600] !bg-[#070707] !text-white"
                borderColor="#F3D583"
              >
                LEARN MORE
              </Button>
            </div>
          </div>

          <div className="bg-[#F3D583] relative rounded-[21px]  py-[35px] px-[34px]">
            <h1 className=" text-[24px] xl:text-2xl font-normal xl:leading-6 text-left luckiest">
              Secure <br /> Transactions
            </h1>
            <p className=" text-sm xl:text-base paytone mt-[9px] font-normal xl:leading-[27.39px] tracking-[-0.01em] text-left">
              Use reputable wallets and enable <br /> two-factor authentication
            </p>

            <div className="absolute -bottom-4 xl:-bottom-8 left-1/2 -translate-x-1/2">
              <Button
                className="montserrat text-[8px] md:!text-[10px]  xl:!text-xl !px-5 !pt-1 !pb-2 xl:!px-[29px] xl:!pt-[14px] xl:!pb-[19px] !font-[600] !bg-[#070707] !text-white"
                borderColor="#F3D583"
              >
                LEARN MORE
              </Button>
            </div>
          </div>

          <div className="bg-[#F3D583] relative rounded-[21px]  py-[35px] px-[34px]">
            <h1 className=" text-[24px] xl:text-2xl font-normal xl:leading-6 text-left luckiest">
              Wallet <br /> Safety
            </h1>
            <p className=" text-sm xl:text-base paytone mt-[9px] font-normal xl:leading-[27.39px] tracking-[-0.01em] text-left">
              Never share your private keys and <br /> be cautious of phishing
              attempts
            </p>

            <div className="absolute -bottom-4 xl:-bottom-8 left-1/2 -translate-x-1/2">
              <Button
                className="montserrat text-[8px] md:!text-[10px]  xl:!text-xl !px-5 !pt-1 !pb-2 xl:!px-[29px] xl:!pt-[14px] xl:!pb-[19px] !font-[600] !bg-[#070707] !text-white"
                borderColor="#F3D583"
              >
                LEARN MORE
              </Button>
            </div>
          </div>
        </div>
      </div>
      <div
        className={` w-full h-[70px] xl:h-[122px] absolute -bottom-8 xl:-bottom-14 ${styles.blur}`}
      ></div>
    </section>
  );
};
