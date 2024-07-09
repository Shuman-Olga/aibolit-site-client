import { Container } from "react-bootstrap";

import SeoPage from "../components/Seo";
import { dataSeoContacts } from "../data/Seo/dataSeoPages1Level";

export default function Contacts() {
  return (
    <Container id="contacts" fluid>
      <SeoPage data={dataSeoContacts} />
      <div className="page-h1">
        <Container>
          <h1>ООО "Айболит" Детская медицинская служба - Kонтакты</h1>
        </Container>
      </div>
      <Container className="my-4">
        <div className="d-flex justify-content-between fs-6 position">
          <div>
            <p>
              <span className="fw-bold">Наши контакты:</span>
            </p>
            <p>
              <span className="fw-bold">Телефон:</span> +7 (3822) 60-92-43
            </p>
            <p>
              <span className="fw-bold">Адрес:</span> 634021, г. Томск, ул.
              Герцена, д. 68, стр.2 (вход в "Томоко", 3 эт)
            </p>
            <p>
              <span className="fw-bold pe-2">E-mail:</span>
              <a
                href="mailto:aibolittom70@gmail.com?subject=С сайта Айболита"
                target="_self"
              >
                aibolittom70@gmail.com
              </a>
            </p>
          </div>
          <div>
            <p>
              <span className="fw-bold">Наши реквизиты:</span>
            </p>
            <p>ООО "Айболит" </p>
            <p>ИНН 7017262021</p>
            <p>КПП 701701001</p>
            <p>ОГРН 1107017009164</p>
            <p>ОКАТО 69401000000 </p>
            <p>Р/С 40702810706290004715</p>
            <p>Корсчет 30101810500000000728</p>
            <p>ОАО "ТОМСКПРОМСТРОЙБАНК" г. Томск</p>
            <p>БИК 046902728</p>
          </div>
        </div>
        <div className="text-center mt-5 fs-6">
          <h3 className="fs-4">
            <img
              src={require(`../assets/img/time.png`)}
              alt="clock"
              className="clock-png"
              title="Режим работы Айболит"
            />
            Режим работы детской медицинской слжбы "Айболит"
          </h3>
          <div className="d-flex justify-content-center">
            <hr className="w-50" />
          </div>

          <div>
            <p>Пн-пт: 08:00 - 19:00</p>
            <p>Суббота: 09:00 - 14:00</p>
            <p>Воскресенье : выходной</p>
          </div>
        </div>
        <div className="block-map my-3">
          <iframe
            title="Embedded Content"
            src="https://yandex.ru/map-widget/v1/?z=12&ol=biz&oid=1788754562"
            width="560"
            height="400"
          ></iframe>
        </div>
        <hr />
        <div className="mb-2 fs-6">
          <p>
            <span className="fw-bold">Как проехать:</span>
          </p>
          <p>
            <img
              src={require(`../assets/img/auto.png`)}
              alt="auto-png"
              className="auto-png"
              title="Ближайшие остановки общественного транспорта"
            />
            Ближайшие остановки общественного транспорта:
          </p>
          <ul>
            <li>
              <p>Енисейская (трамвай №1, 2а, 4)</p>
            </li>
            <li>
              <p>
                Енисейская (троллейбусы 7; автобусы 3, 26, 27, 29, 31, 401, 510)
              </p>
            </li>
            <li>
              <p>
                пр. Комсомольский (троллейбусы 2, 6; автобусы 5, 8, 13, 16, 52,
                53, 131)
              </p>
            </li>
          </ul>
          <p>
            <br />
            <img
              src={require(`../assets/img/door.png`)}
              alt="door-png"
              className="door-img"
              title="вход"
            />
            Торговый центр Extra, вход с торца через "ТомОко", 3 этаж. <br />
            Возле Extra есть парковка.
          </p>
        </div>
      </Container>
    </Container>
  );
}
