import { Button } from "../../common";

export const ReasonToHave = () => {
  return (
    <section className="w-full min-h-screen xl:h-[1456px] pt-[160px] relative">
      <div className="container px-5 xl:px-0">
        <h1 className="text-white text-center luckiest text-[24px] xl:text-[65px] not-italic font-normal leading-[normal]">
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
          <div className="hover:shadow-[0px_11px_8.7px_9px_rgba(255,214,0,0.40)] px-[44px] py-[43px] rounded-[19px] border-4 border-solid border-[#FFC700] transition duration-300 transform hover:scale-105">
            <h1 className="text-[#F3D583] mb-[27px] luckiest text-center text-3xl not-italic font-normal leading-[normal]">
              Financial Fitness:
            </h1>
            <p className="text-white m-auto text-center text-xl paytone not-italic font-normal leading-[35px]">
              Like Spongebob's unyielding optimism, holding $Sponge keeps your
              portfolio in peak condition, offering presale perks and regular
              bonuses.
            </p>
          </div>

          <div className=" px-[44px] py-[43px] hover:shadow-[0px_11px_8.7px_9px_rgba(220,3,4,0.30)] rounded-[19px] border-4 border-solid border-[#A33737] transition duration-300 transform hover:scale-105">
            <h1 className="text-[#F3D583] mb-[27px] luckiest text-center text-3xl not-italic font-normal leading-[normal]">
              Peace of Mind:
            </h1>
            <p className="text-white m-auto text-center text-xl paytone not-italic font-normal leading-[35px]">
              Navigate the choppy waters of crypto witth the ease of Spongebob
              $sponge’s straigtforward mrchanics ensure a stress-free
              investment.
            </p>
          </div>

          <div className=" px-[44px] py-[43px] hover:shadow-[0px_11px_8.7px_9px_rgba(7,142,10,0.40)] rounded-[19px] border-4 border-solid border-[#02AE3D] transition duration-300 transform hover:scale-105">
            <h1 className="text-[#F3D583] mb-[27px] luckiest text-center text-3xl not-italic font-normal leading-[normal]">
              Community Suppor
            </h1>
            <p className="text-white m-auto text-center text-xl paytone not-italic font-normal leading-[35px]">
              Just as Bikini Bottom residents support each other, the $Sponge
              community provides mutual support and guidance. Roadmap
            </p>
          </div>

          <div className=" px-[44px] py-[43px] hover:shadow-[0px_11px_8.7px_9px_rgba(7,142,10,0.40)] rounded-[19px] border-4 border-solid border-[#02AE3D] transition duration-300 transform hover:scale-105">
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
        <div className="flex flex-col  items-center pt-[269px] justify-center">
          <h1 className="text-white luckiest text-center text-[65px] not-italic font-normal leading-[normal]">
            HAVE ANY QUESTIONS?
          </h1>
          <p className="text-white paytone text-center text-xl not-italic font-normal leading-[35px]">
            More of detailed information can also be found in our Sponge
          </p>
          <div className="my-[38px]">
            <Button className="montserrat transition-all duration-500 text-[8px] md:!text-[10px]  xl:!text-xl !px-5 !pt-1 !pb-2 xl:!px-[29px] xl:!pt-[14px] xl:!pb-[19px] !font-[600] !bg-[#070707] hover:!text-[#070707] hover:!bg-white !text-white">
              More Sponge
            </Button>
          </div>
        </div>
      </div>
      <img
        src="./reason-to-have.png"
        className="paytone object-cover xl:object-fill absolute luckiest top-0 left-0 w-full h-full z-[-1]"
      />
    </section>
  );
};
