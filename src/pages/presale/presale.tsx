import { JoinNow, PresaleAbout, Time, Welcome } from "../../components";
import { Layout } from "../../layout";

export const Presale = () => {
  return (
    <Layout>
      <Welcome />
      <PresaleAbout />
      <Time />
      <JoinNow />
    </Layout>
  );
};
