import { Button } from "../../common";
import styles from "./GeneralOverview.module.css";
export const GeneralOverview = () => {
  return (
    <section className="w-full xl:h-[1419px] relative ">
      <img
        src="./general-overview.png"
        alt=""
        className="w-full h-full object-cover xl:object-fill absolute top-0 left-0 z-[-1]"
      />
      <div className="w-full flex flex-col xl:flex-row items-end h-full container px-8 xl:px-0 ">
        <div className=" w-full xl:w-1/2 h-full flex items-end pb-10">
          <img src="./general.png" alt="" />
        </div>
        <div className=" w-full xl:w-1/2 h-full flex justify-end items-end pb-20">
          <div
            className={`h-[614px] pb-20 flex items-center justify-center flex-col relative w-[80%] xl:w-[798px] ${styles.bg} `}
          >
            <p className=" text-[10px] xl:text-[20px] w-[40%] xl:w-[50%] font-normal paytone xl:leading-[23.83px] tracking-[-0.02em] text-center">
              Hiya, pals! Welcome to my pineapple under the sea!
            </p>
            <p className=" text-[10px] xl:text-[20px] my-[13px] text-[#FFFFFF] w-[55%] paytone font-normal xl:leading-[25.23px] tracking-[-0.03em] text-center">
              I’m Spongebob, here to give you a cheerful overview of our
              fantastic memecoin project.
            </p>

            <Button
              className="montserrat !text-[8px] md:!text-[10px]  xl:!text-[18px] !px-5 !pt-1 !pb-2 xl:!px-[29px] xl:!pt-[14px] xl:!pb-[19px] !font-[600] !bg-[#070707] !text-white"
              borderColor="#F3D583"
            >
              MORE INFO
            </Button>
          </div>
        </div>
      </div>
      <div
        className={`w-full h-[68px] absolute -bottom-10 ${styles.blur} `}
      ></div>
    </section>
  );
};
