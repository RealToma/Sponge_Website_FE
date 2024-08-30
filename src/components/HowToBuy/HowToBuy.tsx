// import { Button } from "../../common";
import styles from "./HowToBuy.module.css";

export const HowToBuy = () => {
  return (
    <section className="w-full min-h-screen  xl:h-[1000px]  pb-[50px] pt-[100px] lg:pt-[160px] relative ">
      <div className=" z-[10000] relative container px-5 xl:px-0">
        <h1
          className={`${styles.title_shadow} text-[#c23631] text-center luckiest text-[32px] xl:text-7xl not-italic font-normal leading-[normal] `}
        >
          How To Buy
        </h1>
        <h1
          className={`${styles.text_border01} text-[#ffffff] mt-[17px] luckiest text-center text-[25px] sm:text-[30px] md:text-[35px] lg:text-[40px] xl:text-[50px]  not-italic font-normal leading-[normal]`}
        >
          How to Buy $SPONGE on the Tron Chain
        </h1>
        <div className="grid gap-x-[40px] mt-[50px] lg:mt-[100px] gap-y-6 grid-cols-1 md:grid-cols-2 xl:grid-cols-5">
          <div className="z-[101] hover:shadow-[0px_11px_8.7px_9px_rgba(255,214,0,0.40)] xl:p-[20px] lg:p-[18px] md:p-[15px] sm:p-[12px] p-[10px] rounded-[19px] border-4 border-solid border-[#FFC700] bg-[#FFC70050] transition duration-300 transform hover:scale-105 ">
            <p className="text-white m-auto text-center text-[15px] xl:text-xl paytone not-italic font-normal leading-[35px]">
              Download a Crypto Wallet: To purchase $SPONGE, you’ll need a
              Tron-compatible wallet like TronLink or TokenPocket. These apps
              are available for both desktop and mobile devices.
            </p>
          </div>
          <div className="z-[101]  xl:p-[20px] lg:p-[18px] md:p-[15px] sm:p-[12px] p-[10px] hover:shadow-[0px_11px_8.7px_9px_rgba(220,3,4,0.30)] rounded-[19px] border-4 border-solid border-[#A33737]  bg-[#A3373750] transition duration-300 transform hover:scale-105">
            <p className="text-white m-auto text-center text-[15px] xl:text-xl paytone not-italic font-normal leading-[35px]">
              Add TRX to Your Wallet: To buy $SPONGE, make sure you have Tron
              (TRX) in your wallet. You can purchase TRX on various platforms
              like Binance, KuCoin, or directly through your wallet using a
              credit card.
            </p>
          </div>
          <div className="z-[101]  xl:p-[20px] lg:p-[18px] md:p-[15px] sm:p-[12px] p-[10px] hover:shadow-[0px_11px_8.7px_9px_rgba(83,59,189,0.40)] rounded-[19px] border-4 border-solid border-[#533bbd] bg-[#533bbd50] transition duration-300 transform hover:scale-105">
            <p className="text-white m-auto text-center text-[15px] xl:text-xl paytone not-italic font-normal leading-[35px]">
              Connect Your Wallet to Sun Pump: Visit the Sun Pump website and
              click on “Connect Wallet.” Select your wallet and follow the
              instructions to establish the connection.
            </p>
          </div>

          <div className="z-[101]  xl:p-[20px] lg:p-[18px] md:p-[15px] sm:p-[12px] p-[10px] hover:shadow-[0px_11px_8.7px_9px_rgba(7,142,10,0.40)] rounded-[19px] border-4 border-solid border-[#02AE3D] bg-[#02AE3D50] transition duration-300 transform hover:scale-105">
            <p className="text-white m-auto text-center text-[15px] xl:text-xl paytone not-italic font-normal leading-[35px]">
              Swap TRX for $SPONGE: Once your wallet is connected, you can swap
              the desired amount of TRX for $SPONGE. Enter the amount, review
              the details, and confirm the transaction. Congratulations, you're
              now a proud owner of $SPONGE!
            </p>
          </div>

          <div className="z-[101]  xl:p-[20px] lg:p-[18px] md:p-[15px] sm:p-[12px] p-[10px] hover:shadow-[0px_11px_8.7px_9px_rgba(7,142,10,0.40)] rounded-[19px] border-4 border-solid border-[#02AE3D] bg-[#02AE3D50] transition duration-300 transform hover:scale-105">
            <p className="text-white m-auto text-center text-[15px] xl:text-xl paytone not-italic font-normal leading-[35px]">
              Monitor Your $SPONGE Balance: After your purchase, you can check
              your $SPONGE balance in your wallet anytime. Stay tuned for future
              updates and announcements from "Sponge of Wallstreet" to make the
              most of your investment!
            </p>
          </div>
        </div>
        {/* <div className="flex flex-col  items-center pb-[50px] pt-[100px] md:pt-[120px] md:pb-[100px] xl:pt-[200px] xl:pb-[200px] justify-center">
          <h1 className="text-white luckiest text-center text-[40px] md:text-[50px] xl:text-[65px] not-italic font-normal leading-[normal] z-[101] ">
            HAVE ANY QUESTIONS?
          </h1>
          <p className="text-white paytone text-center  text-[16px] md:text-[20px] xl:text-[25px] not-italic font-normal leading-[35px] z-[101] ">
            More of detailed information can also be found in our Sponge
          </p>
          <div className="my-[38px] z-[101] ">
            <Button className="montserrat transition-all duration-500 text-[9px] md:!text-[10px]  xl:!text-xl !px-5 !pt-1 !pb-2 xl:!px-[29px] xl:!pt-[14px] xl:!pb-[19px] !font-[600] !bg-[#070707] hover:!text-[#070707] hover:!bg-white !text-white">
              More Sponge
            </Button>
          </div>
        </div> */}
      </div>
      <img
        src="/reason-to-have.png"
        className="paytone object-cover xl:object-fill absolute luckiest top-0 left-0 w-full h-full z-[-1]"
      />
      <div
        className={`z-[103] w-[300%] left-[-20%] h-[100px] xl:h-[150px] absolute -bottom-8 xl:-bottom-14 ${styles.blur}`}
      ></div>
    </section>
  );
};
