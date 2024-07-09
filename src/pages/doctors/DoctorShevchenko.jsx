import { Container } from "react-bootstrap";

import SeoPage from "../../components/Seo";
import { dataSeoSevchenko } from "../../data/Seo/dataSeoPages2Level";
import DoctorPage from "../../components/doctors/DoctorItem";
import { dataShevchenko } from "../../data/dataDoctor/dataShevchenko";

export default function DoctorShevchenko() {
  return (
    <Container fluid>
      <SeoPage data={dataSeoSevchenko} />
      <DoctorPage {...dataShevchenko} />
    </Container>
  );
}
