import {
  About,
  JoinNow,
  PresaleAbout,
  ReasonToHave,
  Time,
  Tokenomics,
  Welcome,
} from "../../components";
import { Layout } from "../../layout";

export const Presale = () => {
  return (
    <Layout>
      <Welcome />
      <About />
      <Tokenomics />
      <PresaleAbout />
      <Time />
      <JoinNow />
      <ReasonToHave />
    </Layout>
  );
};

export default Presale;
