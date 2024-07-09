import { Container } from "react-bootstrap";

import BlockAdvantages from "../components/home/BlockAdvantages";
import BlockDoctors from "../components/home/BlockDoctors";
import BlockContacts from "../components/home/BlockContacts";
import BlockImg from "../components/home/BlockImg";
import BlockInfo from "../components/home/BlockInfo";
import SeoPage from "../components/Seo";
import { dataSeoHome } from "../data/Seo/dataSeoPages1Level";
// import WorkOnHolidays from "../components/WorkOnHolidays";

export default function App() {
  return (
    <Container fluid id="home">
      <SeoPage data={dataSeoHome} />
      {/* <WorkOnHolidays /> */}
      <BlockImg />
      <BlockInfo />
      <BlockAdvantages />
      <BlockDoctors />
      <BlockContacts />
    </Container>
  );
}
