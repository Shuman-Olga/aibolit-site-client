import { Container } from "react-bootstrap";

import BlockReklama3 from "../../components/reklama/BlockReklama3";
import SeoPage from "../../components/Seo";
import { dataSeoPost2 } from "../../data/Seo/dataSeoPosts";

export default function Post2() {
  return (
    <Container id="post" fluid>
      <SeoPage data={dataSeoPost2} />
      <Container className="d-flex justify-content-center">
        <div className="size-cont border mb-4">
          <h1 className="my-4">Календарь вакцинаций</h1>
          <div className="d-inline-flex">
            <img
              className="size-img"
              src={require(`../../assets/img/kalendar_vakcinaci.jpg`)}
              alt="kalendar_vakcinacii"
              title="Календарь вакцинаций<"
            />
            <p>
              <span className="fst-italic">Вакцинация</span> детей в возрасте до
              18 лет, согласно действующему национальному календарю
              профилактических прививок и календарю профилактических прививок по
              эпидпоказаниям
            </p>
          </div>
          <table className="table mt-3">
            <thead>
              <tr>
                <th scope="col">Возраст</th>
                <th scope="col">Прививки</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Дети в первые 24 часа</td>
                <td>Первая прививка против вирусного гепатита B</td>
              </tr>
              <tr>
                <td>Дети на 3 - 7 день</td>
                <td>Прививка против туберкулеза</td>
              </tr>
              <tr>
                <td>Дети в 1 месяц</td>
                <td>Вторая прививка от вирусного гепатита B</td>
              </tr>
              <tr>
                <td>Дети в 2 месяца</td>
                <td>
                  Третья прививка против вирусного гепатита B (группы риска){" "}
                  <br />
                  Первая прививка против пневмококковой инфекции
                </td>
              </tr>
              <tr>
                <td>Дети в 3 месяца</td>
                <td>
                  Первая прививка против дифтерии, коклюша, столбняка <br />
                  Первая прививка против полиомиелита <br />
                  Первая прививка против гемофильной инфекции (группы риска)
                </td>
              </tr>
              <tr>
                <td>Дети в 4,5 месяца</td>
                <td>
                  Вторая прививка против дифтерии, коклюша, столбняка <br />
                  Вторая прививка против гемофильной инфекции (группы риска)
                  <br />
                  Вторая прививка против полиомиелита <br />
                  Вторая прививка против пневмококковой инфекции
                </td>
              </tr>
              <tr>
                <td>Дети в 6 месяцев</td>
                <td>
                  Третья прививка против дифтерии, коклюша, столбняка <br />
                  Третья прививка против вирусного гепатита B <br />
                  Третья прививка против полиомиелита <br />
                  Третья прививка против гемофильной инфекции (группа риска)
                </td>
              </tr>
              <tr>
                <td>Дети в 12 месяцев</td>
                <td>
                  Прививка против кори, краснухи, эпидемического паротита <br />
                  Четвертая прививка против вирусного гепатита B (группы риска)
                </td>
              </tr>
              <tr>
                <td>Дети в 15 месяцев</td>
                <td>Ревакцинация против пневмококковой инфекции</td>
              </tr>
              <tr>
                <td>Дети в 18 месяцев</td>
                <td>
                  Первая ревакцинация против полиомиелита <br />
                  Первая ревакцинация против дифтерии, коклюша, столбняка <br />{" "}
                  Ревакцинация против гемофильной инфекции (группы риска)
                </td>
              </tr>
              <tr>
                <td>Дети в 20 месяцев</td>
                <td>Вторая ревакцинация против полиомиелита</td>
              </tr>
              <tr>
                <td>Дети в 6 лет</td>
                <td>
                  Ревакцинация против кори, краснухи, эпидемического паротита
                </td>
              </tr>
              <tr>
                <td>Дети в 6 - 7 лет</td>
                <td>
                  Вторая ревакцинация против дифтерии, столбняка <br />
                  Ревакцинация против туберкулеза
                </td>
              </tr>
              <tr>
                <td>Дети в 14 лет</td>
                <td>
                  Третья ревакцинация против дифтерии, столбняка <br />
                  Третья ревакцинация против полиомиелита
                </td>
              </tr>
              <tr>
                <td>Взрослые от 18 лет</td>
                <td>
                  Ревакцинация против дифтерии, столбняка - каждые 10 лет от
                  момента последней ревакцинаци
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </Container>
      <BlockReklama3 />
    </Container>
  );
}