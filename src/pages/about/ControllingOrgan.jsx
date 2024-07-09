import { Container } from "react-bootstrap";

import SeoPage from "../../components/Seo";
import { dataSeoControlingOrgan } from "../../data/Seo/dataSeoPages2Level";
import ControlingOrganItem from "../../components/about/ControlingOrganItem";
import { useGetControllingQuery } from "../../redux/api/Api";
import Spinner from "../../components/Spinner";

export default function ControllingOrgan() {
  const { data, isSuccess, isLoading } = useGetControllingQuery();
  return (
    <Container fluid id="controlling">
      <SeoPage data={dataSeoControlingOrgan} />
      <div className="page-h1">
        <Container>
          <h1>Контролирующие организации</h1>
        </Container>
      </div>
      <Container className="mt-4 position-block">
        <div className="d-flex flex-wrap">
          {!isLoading ? (
            <>
              {isSuccess && (
                <>
                  {data.map((item, index) => (
                    <ControlingOrganItem {...item} key={index} />
                  ))}
                </>
              )}
            </>
          ) : (
            <Spinner />
          )}
        </div>
      </Container>
      <Container className="text-center my-5 ">
        <iframe
          title="Баннер Министерства здравоохранения по независимой оценки качества оказания услуг медицинскими организациями"
          src="https://nok.minzdrav.gov.ru/ogv/GetBannerNok/23/1"
          width="400"
          height="200"
        ></iframe>
      </Container>
    </Container>
  );
}
