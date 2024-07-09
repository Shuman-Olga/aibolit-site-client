import { Container } from "react-bootstrap";

import SeoPage from "../../components/Seo";
import { dataSeoPetuhova } from "../../data/Seo/dataSeoPages2Level";
import DoctorPage from "../../components/doctors/DoctorItem";
import { dataPetuhova } from "../../data/dataDoctor/dataPetuhova";

export default function DoctorPetuhova() {
  return (
    <Container fluid>
      <SeoPage data={dataSeoPetuhova} />
      <DoctorPage {...dataPetuhova} />
    </Container>
  );
}
