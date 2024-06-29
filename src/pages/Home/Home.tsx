import {
  About,
  Airdrop,
  Contact,
  Faq,
  GeneralOverview,
  Hero,
  Presale,
  Roadmap,
  Security,
  Team,
  Tokenomics,
} from "../../components";
import { Layout } from "../../layout";

export const Home = () => (
  <Layout>
    <Hero />
    <About />
    <Tokenomics />
    <Airdrop />
    <Presale />
    <Roadmap />
    <Team />
    <GeneralOverview />
    <Faq />
    <Security />
    <Contact />
  </Layout>
);
