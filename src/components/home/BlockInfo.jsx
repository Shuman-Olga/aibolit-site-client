import { NavLink } from "react-router-dom";
import { Container } from "react-bootstrap";

export default function BlockInfo() {
  return (
    <Container fluid id="blockinfo">
      <Container>
        <h1 className="h1-font">Айболит-детская медицинская служба В Томске</h1>
        <div className="d-flex justify-content-around">
          <img
            src={require("../../assets/img/foto.jpg")}
            alt="foto"
            className="img-foto"
            title="foto"
          />
          <div className="w-50 text-md-start fst-italic fs-5">
            <div className="width-svg">
              <svg
                preserveAspectRatio="none"
                data-bbox="30.5 43.999 139 112"
                viewBox="30.5 43.999 139 112"
                height="100%"
                width="100%"
                xmlns="http://www.w3.org/2000/svg"
                data-type="shape"
                role="img"
                aria-labelledby="svgcid--bt2udfbeio6w"
              >
                <title id="svgcid--bt2udfbeio6w">Педиатры в Томске</title>
                <g>
                  <path d="M84.463 44.235c2.428 4.024 4.786 8.047 7.352 12.348-1.179.694-2.358 1.457-3.537 2.081-9.294 5.411-18.242 11.169-25.525 19.355-7.422 8.325-11.028 18.037-12.069 29.344.971 0 1.942-.069 2.913 0 5.757.416 11.653.139 17.202 1.457 13.109 3.052 18.103 13.111 17.202 25.39-.902 11.724-10.612 21.159-22.126 21.713-8.462.416-16.577-.763-23.236-6.59-6.034-5.272-8.74-12.418-10.474-19.979-4.995-22.337 1.456-41.414 16.577-57.994 7.63-8.325 16.508-15.123 26.08-21.02 3.121-1.942 6.104-4.024 9.225-6.105h.416z"></path>
                  <path d="M162.148 44c2.428 4.024 4.786 8.047 7.352 12.348-1.179.694-2.358 1.457-3.537 2.081-9.294 5.411-18.242 11.169-25.525 19.355-7.422 8.325-11.028 18.037-12.069 29.344.971 0 1.942-.069 2.913 0 5.757.416 11.653.139 17.202 1.457 13.109 3.052 18.103 13.111 17.202 25.39-.902 11.724-10.612 21.159-22.126 21.713-8.462.416-16.577-.763-23.236-6.59-6.034-5.272-8.74-12.418-10.474-19.979-4.994-22.338 1.457-41.415 16.577-57.995 7.63-8.325 16.508-15.123 26.08-21.02 3.121-1.942 6.104-4.024 9.225-6.105l.416.001z"></path>
                </g>
              </svg>
            </div>
            <p>
              «Здоровье малыша закладывается с первых дней жизни. Контроль за
              ростом детского организма, всестороннее наблюдение врачей,
              вакцинация – необходимые меры для его правильного развития.
              Доверяя нам здоровье ребенка, Вы можете быть уверены, что он будет
              окружен заботой и вниманием опытных врачей».
            </p>
            <NavLink
              to="/o-nas/"
              className="nav-link"
              target="_top"
              rel="noopener noreferrer"
            >
              <div className="btn-detailed">
                Подробнее <span className="material-icons">trending_flat</span>
              </div>
            </NavLink>
          </div>
        </div>
      </Container>
    </Container>
  );
}
