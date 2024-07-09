import { Container } from "react-bootstrap";
import { NavLink } from "react-router-dom";

export default function BlockReklama2() {
  return (
    <Container
      id="blockreklamatwo"
      className="d-flex justify-content-center my-5"
    >
      <div className="block-reklama d-flex">
        <img
          src={require("../../assets/img/reklama2.png")}
          alt="img-reklama "
          title="reklama"
        />
        <div className="blockback text-center px-5 py-3">
          <p>Программы наблюдения </p>
          <p>на дому за детьми</p>
          <NavLink
            to="/programmy-nablyudeniya-za-zdorovem/"
            target="_top"
            rel="noopener noreferrer"
          >
            <button type="button" className="btn btn-outline-secondary">
              Подробнее
            </button>
          </NavLink>
        </div>
      </div>
    </Container>
  );
}
