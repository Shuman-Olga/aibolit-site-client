import { Container } from "react-bootstrap";

import SeoPage from "../../components/Seo";
import DoctorPage from "../../components/doctors/DoctorItem";
import { dataSeoSadovnikova } from "../../data/Seo/dataSeoPages2Level";
import { dataSadovnikova } from "../../data/dataDoctor/dataSadovnikova";

export default function DoctorSadovnikova() {
  return (
    <Container fluid>
      <SeoPage data={dataSeoSadovnikova} />
      <DoctorPage {...dataSadovnikova} />
    </Container>
  );
}
