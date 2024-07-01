import {
  JoinNow,
  PresaleAbout,
  ReasonToHave,
  Time,
  Welcome,
} from '../../components'
import { Layout } from '../../layout'

export const Presale = () => {
  return (
    <Layout>
      <Welcome />
      <PresaleAbout />
      <Time />
      <JoinNow />
      <ReasonToHave />
    </Layout>
  )
}

export default Presale
