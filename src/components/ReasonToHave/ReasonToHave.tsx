import { Button } from "../../common";
import styles from "./ReasonToHave.module.css";

export const ReasonToHave = () => {
  return (
    <section className="w-full min-h-screen xl:h-[1456px] pt-[160px] relative">
      <div className="container px-5 xl:px-0">
        <h1 className="text-white text-center luckiest text-[24px] xl:text-[65px] not-italic font-normal leading-[normal] ">
          REASON TO HAVE
        </h1>
        <h1 className="text-[#AF6D27] mt-[17px] luckiest text-center text-[20px] xl:text-[65px] not-italic font-normal leading-[normal]">
          $Sponge
        </h1>
        <p className="text-white paytone m-auto text-center text-base xl:text-xl not-italic font-normal xl:leading-[35px]">
          Our goal is to create the cleanest and most ethical platform in the
          crypto space, treating our community with fairness and transparency.
        </p>
        <div className="grid gap-x-[49px] mt-[100px] gap-y-4 grid-cols-1 md:grid-cols-2 xl:grid-cols-4">
          <div className="z-[101] hover:shadow-[0px_11px_8.7px_9px_rgba(255,214,0,0.40)] px-[44px] py-[43px] rounded-[19px] border-4 border-solid border-[#FFC700] bg-[#FFC70050] transition duration-300 transform hover:scale-105 ">
            <h1 className="text-[#F3D583] mb-[27px] luckiest text-center text-3xl not-italic font-normal leading-[normal]">
              Financial Fitness:
            </h1>
            <p className="text-white m-auto text-center text-xl paytone not-italic font-normal leading-[35px]">
              Like Spongebob's unyielding optimism, holding $Sponge keeps your
              portfolio in peak condition, offering presale perks and regular
              bonuses.
            </p>
          </div>

          <div className="z-[101]  px-[44px] py-[43px] hover:shadow-[0px_11px_8.7px_9px_rgba(220,3,4,0.30)] rounded-[19px] border-4 border-solid border-[#A33737]  bg-[#A3373750] transition duration-300 transform hover:scale-105">
            <h1 className="text-[#F3D583] mb-[27px] luckiest text-center text-3xl not-italic font-normal leading-[normal]">
              Peace of Mind:
            </h1>
            <p className="text-white m-auto text-center text-xl paytone not-italic font-normal leading-[35px]">
              Navigate the choppy waters of crypto with the ease of Spongebob
              $sponge’s straight forward mechanics ensure a stress-free
              investment.
            </p>
          </div>

          <div className="z-[101]  px-[44px] py-[43px] hover:shadow-[0px_11px_8.7px_9px_rgba(83,59,189,0.40)] rounded-[19px] border-4 border-solid border-[#533bbd] bg-[#533bbd50] transition duration-300 transform hover:scale-105">
            <h1 className="text-[#F3D583] mb-[27px] luckiest text-center text-3xl not-italic font-normal leading-[normal]">
              Community Support
            </h1>
            <p className="text-white m-auto text-center text-xl paytone not-italic font-normal leading-[35px]">
              Just as Bikini Bottom residents support each other, the $Sponge
              community provides mutual support and guidance. Roadmap
            </p>
          </div>

          <div className="z-[101]  px-[44px] py-[43px] hover:shadow-[0px_11px_8.7px_9px_rgba(7,142,10,0.40)] rounded-[19px] border-4 border-solid border-[#02AE3D] bg-[#02AE3D50] transition duration-300 transform hover:scale-105">
            <h1 className="text-[#F3D583] mb-[27px] luckiest text-center text-3xl not-italic font-normal leading-[normal]">
              Nostalgic Value:
            </h1>
            <p className="text-white m-auto text-center text-xl paytone not-italic font-normal leading-[35px]">
              Embrace the fun and nostalgia of Bikini Bottom. $Sponge offers a
              playful yet lucrative investment, just like the beloved Spongebob
              series.
            </p>
          </div>
        </div>
        <div className="flex flex-col  items-center pb-[50px] pt-[100px] md:pt-[120px] md:pb-[100px] xl:pt-[200px] xl:pb-[200px] justify-center">
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
        </div>
      </div>
      <img
        src="/reason-to-have.png"
        className="paytone object-cover xl:object-fill absolute luckiest top-0 left-0 w-full h-full z-[-1]"
      />
      <div
        className={`z-[103] w-[300%] left-[-20%] h-[70px] xl:h-[100px] absolute -bottom-8 xl:-bottom-14 ${styles.blur}`}
      ></div>
    </section>
  );
};
