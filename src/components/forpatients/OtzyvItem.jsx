import { Container } from "react-bootstrap";

import { useGetOtzyvyQuery } from "../../redux/api/Api";
import Spinner from "../Spinner";

export default function OtzyvItem() {
  const { data, isSuccess, isLoading } = useGetOtzyvyQuery();

  return (
    <Container className="">
      {!isLoading ? (
        <>
          {isSuccess && (
            <>
              {[...data].reverse().map((item) => (
                <Container key={item.id} className="border my-4 p-4">
                  <p className="fw-bold">{item.name}</p>
                  <p className="fw-light">Отзыв о </p>
                  <p className="fw-bold"> {item.forname}</p>
                  <p>{item.otzyv}</p>
                  <p className="fw-light">{item.date} г.</p>
                </Container>
              ))}
            </>
          )}
        </>
      ) : (
        <Spinner />
      )}
    </Container>
  );
}
