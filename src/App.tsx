import {
  About,
  Airdrops,
  GeneralOverview,
  Header,
  Hero,
  Presale,
  RoadMap,
  Team,
  Tokenomics,
} from "./components";

export const App = () => {
  return (
    <div>
      <Header />
      <Hero />
      <About />
      <Tokenomics />
      <Airdrops />
      <Presale />
      {/* <RoadMap /> */}
      {/* <Team /> */}
      <GeneralOverview />
    </div>
  );
};
