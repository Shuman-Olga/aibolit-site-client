import { Container } from "react-bootstrap";

import SeoPage from "../../components/Seo";
import { dataSeoOstrouhova } from "../../data/Seo/dataSeoPages2Level";
import DoctorPage from "../../components/doctors/DoctorItem";
import { dataOstrouhova } from "../../data/dataDoctor/dataOstrouhova";

export default function DoctorOstrouhova() {
  return (
    <Container fluid id="doctor">
      <SeoPage data={dataSeoOstrouhova} />
      <DoctorPage {...dataOstrouhova} />
    </Container>
  );
}
