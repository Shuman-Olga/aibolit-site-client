import { Container } from "react-bootstrap";

import BlockReklama1 from "../../../components/reklama/BlockReklama1";
import BlockReklama3 from "../../../components/reklama/BlockReklama3";
import BlockReklama4 from "../../../components/reklama/BlockReklama4";
import SeoPage from "../../../components/Seo";
import { dataSeoSpravkavShkolu } from "../../../data/Seo/dataSeoPages3Level";

export default function SpravkavShkolu() {
  return (
    <Container id="spravkavshkolu" fluid>
      <SeoPage data={dataSeoSpravkavShkolu} />
      <div className="page-h1">
        <Container>
          <h1>Справка в школу</h1>
        </Container>
      </div>
      <Container>
        <BlockReklama3 />
        <div className="mt-4">
          <div>
            <p>
              Для поступления в школу и во время обучения в ней ребенку
              понадобится ряд медицинских справок.
            </p>
            <h5>Детская справка для поступления в школу (форма №026/у)</h5>
            <p>
              Детская справка для поступления в школу (форма №026/у) Этот
              документ напоминает амбулаторную карту. Он состоит из множества
              страниц, на которых фиксируются данные обследований, изменения в
              состоянии здоровья и другое.
            </p>
            <p>
              Для оформления такой справки ребенку нужно пройти: педиатра,
              хирурга, невролога, офтальмолога, отоларинголога,
              гинеколога/уролога, травматолога-ортопеда. Если есть показания,
              понадобится также консультация кардиолога.
            </p>
            <p>
              Справка №026/у — обязательный документ. Карта диспансеризации без
              заполнения унифицированной формы не является документом,
              заменяющим справку №026/у.
            </p>
            <h5>
              Помимо врачебных осмотров, проводятся лабораторные исследования:
            </h5>
            <ul>
              <li>
                общий анализ мочи (если здоровый ребенок, в течении 6 мес);
              </li>
              <li>
                клинический анализ крови (если здоровый ребенок, в течении 6
                мес);
              </li>
              <li>соскоб на энтеробиоз;</li>
              <li>исследование кала на яйца гельминтов;</li>
              <li>бакпосев кала.</li>
            </ul>
            <p>
              Результаты заносятся в справку врачом-педиатром. Специалист также
              анализирует заключения пройденных специалистов. На основании них
              определяется общая клиническая картина, группа здоровья. При
              необходимости педиатр дает рекомендации по коррекции отклонений и
              условиям обучения в школе (например, запрет на физкультуру или
              только некоторые упражнения).
            </p>
            <p>
              <span className="fw-bold"> Важно!</span> Результаты исследования
              на энтеробиоз и анализа кала на яйца гельминтов действительны 10
              дней.
            </p>
            заболеванийВ этот документ вносятся также данные о прививках,
            аллергии на медицинские препараты, продукты питания, перенесенных
            инфекционных болезнях (ветряная оспа, скарлатина, корь).
            <p>
              Форма №026/у называется «Медицинская карта ребенка для
              образовательных учреждений». Ее можно оформлять по месту
              жительства либо в частном медицинском центре, который имеет на это
              соответствующую лицензию.
            </p>
          </div>
        </div>
        <BlockReklama1 />
        <div className="block-table my-4">
          <table className="table table-light table-striped text-start ">
            <thead className="table-success px-3">
              <tr>
                <th scope="col">Наименование услуги (прайс не полный)</th>
                <th scope="col">Цена</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="px-3">
                  <p className="ms-5">
                    Справка 026/у для поступления в школу (ПРИ НАЛИЧИИ ЗАПИСИ
                    ОСМОТРА ЛОР, ХИРУРГА, НЕВРОЛОГА, в течении 6 мес и
                    результатов анализов )
                  </p>
                </td>
                <td>
                  <p>1 500 руб.</p>
                </td>
              </tr>
              <tr>
                <td className="px-3">
                  <p className="ms-5">Анализ соскоб на энтеробиоз</p>
                </td>
                <td>
                  <p>600 руб.</p>
                </td>
              </tr>
              <tr>
                <td className="px-3">
                  <p className="ms-5">Исследование кала на яйца гельминтов</p>
                </td>
                <td>
                  <p>600 руб.</p>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="my-5">
          <h5>Медсправка для школы по болезни </h5>
          <div className="d-flex my-4 block-foto">
            <div className="me-4">
              <img
                className="size-img"
                src={require(`../../../assets/img/deti6.jpg`)}
                alt="spravka-v-shkolu"
                title="Медсправка для школы по болезни"
                width="300"
              />
            </div>
            <div>
              <p>
                Одна из самых востребованных справок. Она нужна в том случае,
                если ребенок пропускает занятия по причине хронического или
                острого заболевания. Отсчет «больничного» идет со дня первого
                посещения врача. Если болезнь продолжается более 21 дня, то
                понадобится еще выписка из истории болезни, где указываются:
                диагноз, даты начала заболевания и выздоровления, результаты
                анализов и обследований, полученное ребенком лечение.
              </p>
            </div>
          </div>
        </div>
        <div className="block-table my-4">
          <table className="table table-light table-striped text-start ">
            <thead className="table-success px-3">
              <tr>
                <th scope="col">Наименование услуги (прайс не полный)</th>
                <th scope="col">Цена</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="px-3">
                  <p className="ms-5">
                    Прием педиатра, с выдачей медсправки для школы по болезни
                  </p>
                </td>
                <td>
                  <p>1 500 руб.</p>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <BlockReklama4 />
      </Container>
    </Container>
  );
}
