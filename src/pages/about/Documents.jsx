import { Container } from "react-bootstrap";

// import NavMini from "../../components/navigations/NavMini";
import SeoPage from "../../components/Seo";
import { dataSeoDocuments } from "../../data/Seo/dataSeoPages2Level";
import { dataPDFDocuments } from "../../data/dataDocumentsList";
import PDFItem from "../../components/PDFItem";

export default function Documents() {
  return (
    <Container fluid id="documents" className="mb-3">
      <SeoPage data={dataSeoDocuments} />
      <div className="page-h1">
        <Container>
          <h1>Документы</h1>
        </Container>
      </div>
      <Container className="d-flex justify-content-between mt-4 position-block">
        <div>
          {dataPDFDocuments.map((item, index) => (
            <div className="my-5" key={index}>
              <PDFItem {...item} />
            </div>
          ))}
        </div>
        {/* <NavMini path={"o-nas"} /> */}
      </Container>
    </Container>
  );
}
