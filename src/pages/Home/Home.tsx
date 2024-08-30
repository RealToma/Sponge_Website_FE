import {
  About,
  Airdrop,
  Faq,
  GeneralOverview,
  Hero,
  Presale,
  Roadmap,
  Security,
  Team,
  Tokenomics,
} from "../../components";
import { HowToBuy } from "../../components/HowToBuy";
import { Layout } from "../../layout";

export const Home = () => (
  <Layout>
    <Hero />
    <About />
    <Tokenomics />
    <Airdrop />
    <Presale />
    <HowToBuy />
    <Roadmap />
    <Team />
    <GeneralOverview />
    <Faq />
    <Security />
  </Layout>
);

export default Home;
