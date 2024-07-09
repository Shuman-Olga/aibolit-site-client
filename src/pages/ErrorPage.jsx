import { Button, Container } from "react-bootstrap";
import { useRouteError } from "react-router-dom";

import SeoPage from "../components/Seo";
import { dataSeoError } from "../data/Seo/dataSeoPages1Level";

export default function ErrorPage() {
  const error = useRouteError();

  return (
    <Container fluid id="error">
      <SeoPage data={dataSeoError} />
      <Container className="my-5">
        <h1 className="text-4xl font-bold">404 - Упс! Такой страницы нет</h1>
        <p>Извините, произошла непредвиденная ошибка.</p>
        <p className="text-slate-400">
          <i>{error?.message || error?.statusText}</i>
        </p>
        {/* {error.status === 404 ? <p>Упс! Такой страницы нет</p> : ""} */}

        <Button
          variant="secondary"
          href="/"
          target="_top"
          rel="noopener noreferrer"
        >
          На главную
        </Button>
      </Container>
    </Container>
  );
}
