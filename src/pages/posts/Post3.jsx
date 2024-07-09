import { Container } from "react-bootstrap";

import SeoPage from "../../components/Seo";
import { dataSeoPost3 } from "../../data/Seo/dataSeoPosts";
import ModalWindows from "../../components/modal/Modal";
import FormCallingDoctor from "../../components/modal/FormСalling";
import BlockReklama3 from "../../components/reklama/BlockReklama3";

export default function Post3() {
  return (
    <Container id="post" className="d-flex justify-content-center">
      <SeoPage data={dataSeoPost3} />
      <div className="size-cont border mb-3">
        <h1 className="my-4">Детский хирург на дом</h1>
        <div>
          <img
            className="size-img"
            src={require(`../../assets/img/Petuhova_Olga_Viktorovna.jpg`)}
            alt="hirurg_na_dom"
            title="Детский невролог на дом"
          />
          <p>
            <span className="fw-bold">Хирург </span>
            занимается диагностикой, и лечением заболеваний, пороков и аномалий
            развития, требующих оперативного хирургического вмешательства, у
            детей и подростков. Осмотр хирурга требуется для новорожденного
            малыша, чтобы исключить или выявить врожденные аномалии и пороки
            развития, грыжи (паховые, пупочные, белой линии живота), проблемы
            паховых органов (неопущение или перекрут яичка, водянка яичка,
            варикоцеле). В течение жизни ребенка хирург наблюдает за правильным
            формированием организма, оказывает помощь при гнойных воспалительных
            заболеваниях, травмах и ранениях, проводит хирургическое лечение
            новообразований, сердечнососудистой патологии, ведет
            послеоперационное наблюдение и восстановительное лечение.
          </p>
        </div>
        <hr />
        <div>
          <h5 className="my-3">Вызов детского врача-хирурга на дом</h5>
          <p>
            В детской медицинской службе «АЙБОЛИТ» мы знаем, что самым удобным
            местом для консультаций
            <span className="fst-italic"> врача – хирурга</span> является свой
            собственный уютный дом:
          </p>
          <ul>
            <li>
              врач приедет быстро, не придется ехать в клинику и ждать в
              очереди;
            </li>
            <li>
              поскольку в домашней обстановке ребенок ведет себя спокойнее, врач
              сможет спокойно осмотреть ребенка и выполнить амбулаторные
              хирургические манипуляции;
            </li>
            <li>
              безопасность и комфорт дома особенно важен для эффективного
              осмотра при наличии сопутствующих проблем или особенностей в
              психической сфере ребенка, при определенных особенностях его
              характера и поведения;
            </li>
            <li>
              в домашних условиях врач сможет уделить больше времени и ребенку,
              и родителям.
            </li>
          </ul>
        </div>
        <hr />
        <BlockReklama3 />
        <hr />
        <div>
          <h5 className="mt-3">Профилактические осмотры у врача-хирурга</h5>
          <img
            src={require(`../../assets/img/hirurg2.jpg`)}
            alt="hirurg_na_dom_osmotr"
            className="size-img"
            title="Детский невролог на дом"
          />
          <p>
            Первый
            <span className="fst-italic">
              профилактический осмотр у хирурга{" "}
            </span>
            показан в течение месяца после родов, чтобы определить или исключить
            наличие врожденной хирургической патологии, аномалий и пороков
            развития. Однако не все проблемы могут быть выявлены сразу –
            отдельные аномалии развития могут проявиться лишь спустя некоторое
            время. Поэтому на первом году жизни проводится несколько плановых
            осмотров у хирурга, чтобы установить диагноз и провести
            хирургическое лечение в как можно более раннем возрасте, чтобы не
            допустить развития патологии и нарушения нормального развития
            ребенка. Плановые профилактические осмотры хирургом малышей первого
            года жизни детей производится в 1, 6 и 12 месяцев.
          </p>
        </div>
        <hr className="mt-5" />
        <div>
          <h5 className="my-3">В каких случаях вызвать врача-хирурга?</h5>
          <ul>
            <li>острые боли в животе;</li>
            <li>длительное отсутствие стула;</li>
            <li>признаки внутренних кровотечений:</li>
            <li>кал черного цвета, рвота с кровью;</li>
            <li>длительная тошнота и рвота;</li>
            <li>незначительные травмы;</li>
            <li>нарушения или ограничения подвижности конечностей;</li>
            <li>
              нарушения паховых органов у мальчиков: пустая мошонка, различие
              размеров правого и левого яичка, увеличение размеров мошонки в
              размерах, болезненность яичек;
            </li>
            <li>появление новообразований.</li>
          </ul>
          <p>
            В случае тяжелых травм, потери сознания, ранений, кровотечений,
            нарушения целостности органов и тканей, нарушения дыхания и
            сердечной деятельности, сочетания болей в животе с повышением
            температуры –
            <span className="fw-bold"> НЕМЕДЛЕННО ВЫЗЫВАЙТЕ СКОРУЮ ПОМОЩЬ</span>
          </p>
        </div>
        <hr />
        <div>
          <h5 className="my-3">
            Что будет делать хирург, когда приедет к ребенку?
          </h5>
          <img
            src={require(`../../assets/img/hirurg.jpg`)}
            alt="nevrolog_na_dom_osmotr_rebenka"
            className="size-img pe-3"
            title="Детский невролог на дом"
          />
          <p>Во время визита на дом хирург:</p>
          <ul>
            <li>
              ввыяснит, как протекала беременность и роды у мамы, расспросит
              родителей о перенесенных заболеваниях, поведении малыша,
              выслушивает жалобы;
            </li>
            <li>осмотрит ребенка и оценит его состояние;</li>
            <li>
              поможет выяснить, почему у ребенка имеются какие-либо особенности
              поведения, движений или поз;
            </li>
            <li>
              в зависимости от результатов осмотра, врач может назначить
              дополнительные обследования (УЗИ-диагностика, допплерография,
              рентгенография, КТ, МРТ, ангиография, эндоскопия);
            </li>
            <li>
              назначит сдачу анализов, консультации других специалистов (в том
              числе с вызовом специалистов на дом);
            </li>
            <li>
              поставит диагноз, назначит лечение, выпишет необходимые рецепты и
              даст рекомендации;
            </li>
            <li>
              определит, нужна ли экстренная помощь или достаточно амбулаторного
              лечения и плановых обследований;
            </li>
            <li>
              предложит занятия по лечебной физкультуре, акватерапии и плаванию,
              физиотерапию;
            </li>
            <li>выпишет необходимые справки для ребенка.</li>
          </ul>
        </div>
        <hr />
        <div>
          <h5 className="my-3">Дополнительные услуги на дому</h5>
          <p>
            Кроме оказания медицинской помощи врачом, специалистами детской
            службы «АЙБОЛИТ» могут оказываться следующие услуги:
          </p>
          <ul>
            <li>комплексные детские медицинские программы;</li>
            <li>забор анализов. </li>
          </ul>
        </div>
        <hr />
        <div>
          <h5 className="my-3">Как вызвать врача на дом</h5>
          <p>
            Оформить вызов врача на дом можно по телефону: 7 (3822) 60-92-43 или
            отправьте нам онлайн-заявку.
          </p>
        </div>
        <hr />
        <div>
          <h5 className="my-3"> Стоимость вызова врача</h5>
          <p className="text-center">
            <span className="fw-bold fst-itali ">
              Детский хирург, консультация на дому --------------------- 2 000
              р.*
            </span>
          </p>
          <p className="mt-4">
            <small>
              *для отдаленных районов города и Томского района предусмотрено
              повышение стоимости услуги в зависимости от дальности расстояния
            </small>
          </p>
        </div>
        <hr />
        <div className="d-flex justify-content-center m-4">
          <ModalWindows title="Вызов врача на дом">
            <FormCallingDoctor />
          </ModalWindows>
        </div>
      </div>
    </Container>
  );
}
