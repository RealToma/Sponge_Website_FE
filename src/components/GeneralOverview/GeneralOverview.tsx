import { Button } from "../../common";
import styles from "./GeneralOverview.module.css";
export const GeneralOverview = () => {
  return (
    <section className={`${styles.bg} w-full min-h-screen `}>
      <div className="w-full h-full flex">
        <div className="w-1/2 h-full">
          <img src="./general.png" alt="general overview" />
        </div>
        <div className="w-1/2 h-full relative">
          <div className="absolute top-0">
            <div className="relative">
              <img src="./general-info.png" alt="" />
              <div className="absolute flex pr-5 pt-[100px] flex-col items-center justify-end top-0">
                <p className="text-3xl w-[60%] paytone font-normal leading-[40.83px] tracking-[-0.02em] text-center">
                  Hiya, pals! Welcome to my pineapple under the sea!
                </p>
                <p className="text-[25px] w-[60%] my-[13px] paytone font-normal text-white leading-[32.23px] tracking-[-0.03em] text-center">
                  I’m Spongebob, here to give you a cheerful overview of our
                  fantastic memecoin project.
                </p>
                <Button className="paytone text-white bg-[#070707] ">
                  MORE INFO
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
