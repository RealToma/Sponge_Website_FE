import styles from "./Roadmap.module.css";
import { UserItem } from "./components/UserItem";

const PHASE1 = [
  "Presale: Launch $SWS token with heavy presale Limits (200 SOL per wallet)",
  "DEX Listing: List $SWS on decentralized exchanges",
  "Markting Campaign: a huge Marketing Campaign",
  "CMC & Coingecko: Get Listed on CoinMarketCap and CoinGecko",
];

const PHASE2 = [
  "CEX Listings: List $SWS on centralized exchanges",
  "Influecers: Engage the biggest world of Influencers to promote $SWS",
  "Scarcity: Implement Freezing (Staking) and Vaporing (Burning) mechanics",
  "Airdrop Campaign: holder incentive campaigns for $SWS holders",
];

const PHASE3 = [
  "Tier-1 CEX Listings: Secure listings on Tier-1 centralized exchanges",
  "Partnerships: Form HUGE partnerships with global entities and clebrities",
  "NFT Collection: Release Exclusive $SWS NFT Collection",
];

const PHASE4 = [
  "Global Adoption: Drive global mass Adoption of $SWS ",
  "Future Development",
  "Rewards: Offer massive rewards for $SWS holders",
];

export const Roadmap = () => {
  return (
    <section className="w-full relative h-[2421px]">
      <img
        src="./roadmap-bg.png"
        alt=""
        className="absolute top-0 left-0 w-full h-full object-fill z-[-1]"
      />
      <img
        src="./welcome.png"
        alt=""
        className="w-[250px] xl:w-[576px] absolute top-0 z-30 left-1/2 -translate-x-1/2"
      />
      <div className="absolute w-full h-[1656px]  xl:overflow-x-hidden top-1/2 -translate-y-1/2 left-0 ">
        <div className="w-full px-8  xl:px-0 h-full mt-44 xl:mt-0 relative">
          <img
            src="./road-map-line.png"
            alt=""
            className="w-auto h-full hidden xl:inline-block "
          />
          <UserItem
            title="Phase 1"
            lists={PHASE1}
            className="top-[180px] right-[-200px] w-full"
          />
          <UserItem
            title="Phase 2"
            lists={PHASE2}
            className="top-[570px] right-[-450px] w-full"
          />
          <UserItem
            title="Phase 3"
            lists={PHASE3}
            className="bottom-[520px] right-[-400px] w-full"
          />
          <UserItem
            title="Phase 4"
            lists={PHASE4}
            className="bottom-[200px] right-[-210px] w-full"
          />
        </div>
      </div>
      <img
        src="./road-map-person.png"
        alt=""
        className="absolute hidden xl:inline-block left-0 top-1/2 -translate-y-1/2"
      />
      <div className="container px-8 xl:px-0 pt-32 xl:pt-[240px]">
        <h1 className=" text-[23px] xl:text-7xl text-[#D9D9D9] luckiest font-normal xl:leading-[100px] text-left">
          OUR ROAD MAP
        </h1>
        <p className="text-lg w-full xl:w-[60%] paytone text-[#F3D583] font-normal leading-[30px] text-left">
          Patrick, Mr. Krabs, and even Squidward invested in $SWS, each dreaming
          of riches. As word spread, $SWS became popular across the ocean,
          bringing the whimsical world of Bikini Bottom to the high-stakes arena
          of digital finance, transforming SpongeBob into the Sponge of
          Wallstreet.
        </p>
      </div>
      <div
        className={`${styles.blur} h-[118px] w-full absolute -bottom-8`}
      ></div>
    </section>
  );
};
