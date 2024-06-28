import styles from "./RoadMap.module.css";
export const RoadMap = () => (
  <section className={`${styles.bg} w-full min-h-[2421px] `}>
    <div className="w-full h-full relative">
      <img
        src="./welcome.png"
        alt=""
        className="w-[576px] absolute left-1/2 -translate-x-1/2"
      />
      {/*
       <div className="flex absolute top-[300px] left-[300px] gap-x-[7px] items-start">
        <div className="flex items-start">
          <img src="./avatar.png" alt="" />
          <div className="w-[184px] h-full flex flex-col justify-start">
            <p className="text-white paytone text-3xl font-normal leading-[100px] tracking-[11%] text-left">
              Phase 1
            </p>
            <div className="w-full flex items-center">
              <div className=" w-full border-b-[2px] border-b-[#9A9A9A] border-dashed  "></div>
              <div className="w-[5px] h-[5px] rounded-full bg-[#9A9A9A]"></div>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-y-[37px]">
          <p className="flex gap-x-[13px] text-white paytone items-center text-xl font-normal leading-[27.92px] text-left ">
            <img src="./avatar.png" className="w-[39px] h-[39px]" />
            Presale: Launch $SWS token with heavy presale Limits (200 SOL per
            wallet)
          </p>
          <p className="flex gap-x-[13px] text-white paytone items-center text-xl font-normal leading-[27.92px] text-left ">
            <img src="./avatar.png" className="w-[39px] h-[39px]" />
            DEX Listing: List $SWS on decentralized exchanges
          </p>
          <p className="flex gap-x-[13px] text-white paytone items-center text-xl font-normal leading-[27.92px] text-left ">
            <img src="./avatar.png" className="w-[39px] h-[39px]" />
            Markting Campaign: a huge Marketing Campaign
          </p>
          <p className="flex gap-x-[13px] text-white paytone items-center text-xl font-normal leading-[27.92px] text-left ">
            <img src="./avatar.png" className="w-[39px] h-[39px]" />
            CMC & Coingecko: Get Listed on CoinMarketCap and CoinGecko
          </p>
        </div>
       </div> 
      {/* 
      <div className="flex absolute bottom-[100px] left-[360px] gap-x-[7px] items-start">
        <div className="flex items-start">
          <img src="./avatar.png" alt="" />
          <div className="w-[184px] h-full flex flex-col justify-start">
            <p className="text-white paytone text-3xl font-normal leading-[100px] tracking-[11%] text-left">
              Phase 3
            </p>
            <div className="w-full flex items-center">
              <div className=" w-full border-b-[2px] border-b-[#9A9A9A] border-dashed  "></div>
              <div className="w-[5px] h-[5px] rounded-full bg-[#9A9A9A]"></div>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-y-[37px]">
          <p className="flex gap-x-[13px] text-white paytone items-center text-xl font-normal leading-[27.92px] text-left ">
            <img src="./avatar.png" className="w-[39px] h-[39px]" />
            CEX Listings: List $SWS on centralized exchanges
          </p>
          <p className="flex gap-x-[13px] text-white paytone items-center text-xl font-normal leading-[27.92px] text-left ">
            <img src="./avatar.png" className="w-[39px] h-[39px]" />
            Influecers: Engage the biggest world of Influencers to promote $SWS
          </p>
          <p className="flex gap-x-[13px] text-white paytone items-center text-xl font-normal leading-[27.92px] text-left ">
            <img src="./avatar.png" className="w-[39px] h-[39px]" />
            Scarcity: Implement Freezing (Staking) and Vaporing (Burning)
            mechanics
          </p>
          <p className="flex gap-x-[13px] text-white paytone items-center text-xl font-normal leading-[27.92px] text-left ">
            <img src="./avatar.png" className="w-[39px] h-[39px]" />
            Airdrop Campaign: holder incentive campaigns for $SWS holders
          </p>
        </div>
      </div>
      <div className="flex absolute bottom-[100px] left-[360px] gap-x-[7px] items-start">
        <div className="flex items-start">
          <img src="./avatar.png" alt="" />
          <div className="w-[184px] h-full flex flex-col justify-start">
            <p className="text-white paytone text-3xl font-normal leading-[100px] tracking-[11%] text-left">
              Phase 4
            </p>
            <div className="w-full flex items-center">
              <div className=" w-full border-b-[2px] border-b-[#9A9A9A] border-dashed  "></div>
              <div className="w-[5px] h-[5px] rounded-full bg-[#9A9A9A]"></div>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-y-[37px]">
          <p className="flex gap-x-[13px] text-white paytone items-center text-xl font-normal leading-[27.92px] text-left ">
            <img src="./avatar.png" className="w-[39px] h-[39px]" />
            CEX Listings: List $SWS on centralized exchanges
          </p>
          <p className="flex gap-x-[13px] text-white paytone items-center text-xl font-normal leading-[27.92px] text-left ">
            <img src="./avatar.png" className="w-[39px] h-[39px]" />
            Influecers: Engage the biggest world of Influencers to promote $SWS
          </p>
          <p className="flex gap-x-[13px] text-white paytone items-center text-xl font-normal leading-[27.92px] text-left ">
            <img src="./avatar.png" className="w-[39px] h-[39px]" />
            Scarcity: Implement Freezing (Staking) and Vaporing (Burning)
            mechanics
          </p>
          <p className="flex gap-x-[13px] text-white paytone items-center text-xl font-normal leading-[27.92px] text-left ">
            <img src="./avatar.png" className="w-[39px] h-[39px]" />
            Airdrop Campaign: holder incentive campaigns for $SWS holders
          </p>
        </div>
      </div>
      <div className="flex absolute bottom-[0px] left-[360px] gap-x-[7px] items-start">
        <div className="flex items-start">
          <img src="./avatar.png" alt="" />
          <div className="w-[184px] h-full flex flex-col justify-start">
            <p className="text-white paytone text-3xl font-normal leading-[100px] tracking-[11%] text-left">
              Phase 4
            </p>
            <div className="w-full flex items-center">
              <div className=" w-full border-b-[2px] border-b-[#9A9A9A] border-dashed  "></div>
              <div className="w-[5px] h-[5px] rounded-full bg-[#9A9A9A]"></div>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-y-[37px]">
          <p className="flex gap-x-[13px] text-white paytone items-center text-xl font-normal leading-[27.92px] text-left ">
            <img src="./avatar.png" className="w-[39px] h-[39px]" />
            CEX Listings: List $SWS on centralized exchanges
          </p>
          <p className="flex gap-x-[13px] text-white paytone items-center text-xl font-normal leading-[27.92px] text-left ">
            <img src="./avatar.png" className="w-[39px] h-[39px]" />
            Influecers: Engage the biggest world of Influencers to promote $SWS
          </p>
          <p className="flex gap-x-[13px] text-white paytone items-center text-xl font-normal leading-[27.92px] text-left ">
            <img src="./avatar.png" className="w-[39px] h-[39px]" />
            Scarcity: Implement Freezing (Staking) and Vaporing (Burning)
            mechanics
          </p>
          <p className="flex gap-x-[13px] text-white paytone items-center text-xl font-normal leading-[27.92px] text-left ">
            <img src="./avatar.png" className="w-[39px] h-[39px]" />
            Airdrop Campaign: holder incentive campaigns for $SWS holders
          </p>
        </div>
      </div> 
      */}
      <img src="./road-map-line.png" alt="" className="" />
    </div>
  </section>
);
