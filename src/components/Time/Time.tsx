import { Button } from "../../common";

export const Time = () => {
  return (
    <section className="w-full h-[1083px] relative ">
      <img
        src="./time-bg.png"
        alt=""
        className="absolute top-0 z-[-1] left-0 object-fill w-full h-full"
      />
      <div className="w-full container flex h-full">
        <div className="w-1/2 h-full relative">
          <img
            src="./presale-person.png"
            alt=""
            className="absolute -bottom-0 h-[600px] w-[400px] left-40"
          />
        </div>
        <div className="w-1/2 h-full flex items-center justify-center">
          <div className="bg-[#F9D68F] w-full flex flex-col items-center rounded-[40px] pb-[24px] pt-[42px]">
            <img
              src="./time-avatar.png"
              alt=""
              className="w-[345px] h-[345px]"
            />
            <div>
              <h1 className="text-[28px] mt-[14px] font-normal leading-10 paytone">
                Auction Ending in
              </h1>
            </div>
            <div className="flex mt-[17px] gap-x-[23px]">
              <div className="flex flex-col items-center">
                <div className="flex gap-x-[7px]">
                  <div className="w-[42px] gabriela h-[78px] bg-black  text-white flex items-center justify-center rounded-[4px] text-[28px] font-normal leading-5">
                    0
                  </div>
                  <div className="w-[42px] gabriela h-[78px] bg-black  text-white flex items-center justify-center rounded-[4px] text-[28px] font-normal leading-5">
                    0
                  </div>
                </div>
                <p className="text-xl font-normal leading-5 paytone mt-[17px]">
                  Day
                </p>
              </div>

              <div className="flex flex-col items-center">
                <div className="flex gap-x-[7px]">
                  <div className="w-[42px] gabriela h-[78px] bg-black  text-white flex items-center justify-center rounded-[4px] text-[28px] font-normal leading-5">
                    0
                  </div>
                  <div className="w-[42px] gabriela h-[78px] bg-black  text-white flex items-center justify-center rounded-[4px] text-[28px] font-normal leading-5">
                    0
                  </div>
                </div>
                <p className="text-xl font-normal leading-5 paytone mt-[17px]">
                  Hours
                </p>
              </div>

              <div className="flex flex-col items-center">
                <div className="flex gap-x-[7px]">
                  <div className="w-[42px] gabriela h-[78px] bg-black  text-white flex items-center justify-center rounded-[4px] text-[28px] font-normal leading-5">
                    0
                  </div>
                  <div className="w-[42px] gabriela h-[78px] bg-black  text-white flex items-center justify-center rounded-[4px] text-[28px] font-normal leading-5">
                    0
                  </div>
                </div>
                <p className="text-xl font-normal leading-5 paytone mt-[17px]">
                  Min
                </p>
              </div>

              <div className="flex flex-col items-center">
                <div className="flex gap-x-[7px]">
                  <div className="w-[42px] gabriela h-[78px] bg-black  text-white flex items-center justify-center rounded-[4px] text-[28px] font-normal leading-5">
                    0
                  </div>
                  <div className="w-[42px] gabriela h-[78px] bg-black  text-white flex items-center justify-center rounded-[4px] text-[28px] font-normal leading-5">
                    0
                  </div>
                </div>
                <p className="text-xl font-normal leading-5 paytone mt-[17px]">
                  Sec
                </p>
              </div>
            </div>

            <div className="w-[60%] mt-[28px] mb-[29px] h-[12px] bg-[#D9D9D9] overflow-hidden rounded-[20px] relative ">
              <div className="w-1/2 h-full bg-[#B89664] rounded-[20px]" />
            </div>

            <div className="grid gap-x-[52px] gap-y-[16px] mb-[27px] grid-cols-2">
              <Button
                borderColor="#FEBA00"
                className="!w-full !text-white  !bg-[#ED9D34]"
              >
                Start Date: 10.10.2024
              </Button>
              <Button
                borderColor="#FEBA00"
                className="!w-full !text-white !bg-[#ED9D34]"
              >
                End Date: 12.10.2024
              </Button>
              <Button
                borderColor="#FEBA00"
                className="!w-full !text-white !bg-[#ED9D34]"
              >
                Total coin : 5609089
              </Button>
              <Button
                borderColor="#FEBA00"
                className="!w-full !text-white !bg-[#ED9D34]"
              >
                Presale Price: 7698
              </Button>
            </div>

            <div className="w-full flex justify-center pt-[20px] border-t border-[#263D6B]">
              <Button>Presale now</Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
