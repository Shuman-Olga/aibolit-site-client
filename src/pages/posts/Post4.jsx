import { Container } from "react-bootstrap";
import { NavLink } from "react-router-dom";

import BlockReklama3 from "../../components/reklama/BlockReklama3";
import SeoPage from "../../components/Seo";
import { dataSeoPost4 } from "../../data/Seo/dataSeoPosts";

export default function Post4() {
  return (
    <Container id="post" className="d-flex justify-content-center">
      <SeoPage data={dataSeoPost4} />
      <div className="size-cont border mb-4">
        <h1 className="my-4">Патронаж новорожденного ребёнка</h1>
        <div>
          <img
            className="size-img"
            src={require(`../../assets/img/massage.jpg`)}
            alt="patronaj_novorojdennogo"
            title="Детский невролог на дом"
          />
          <p>
            Очень важно, чтобы маленького человека, только что появившегося на
            свет, окружали забота и любовь. Не менее важно, чтобы за его
            правильным развитием следили квалифицированные специалисты. Наша
            служба предлагает
            <span className="fst-italic">
              патронаж новорожденных в Томске,{" "}
            </span>
            который проводят опытные врачи педиатры.
          </p>
        </div>
        <hr />
        <div>
          <h5 className="my-4">Кому необходим послеродовой патронаж?</h5>
          <p>
            Всем известно, что данные о новорожденном передаются из роддома в
            детскую поликлинику по месту проживания. На следующий день после
            выписки молодую маму и малыша посещает участковый педиатр, задача
            которого заключается в том, чтобы уточнить состояние здоровья
            ребенка и дать рекомендации родителям. Однако не всех молодых
            родителей устраивает качество бесплатного патронажа. Наша служба
            предлагает патронаж новорожденных на платной основе.
          </p>
        </div>
        <div>
          <img
            src={require(`../../assets/img/uslugi2.jpg`)}
            alt="nevrolog_na_dom_osmotr"
            className="size-img"
            title="Детский невролог на дом"
          />
          <p>
            Опытный врач внимательно выслушает вас, осмотрит кожу и слизистые,
            оценит дыхание, рефлексы и активность сосания, произведет осмотр и
            обработку пупочной ранки. Также педиатр осматривает голову малыша,
            оценивает ее форму, состояние родничков. Обязательному осмотру
            подлежат и глаза ребенка, половые органы, симметричность складочек
            на ножках. Затем врач даст рекомендации по уходу за ребенком,
            посоветует правильное питание для мамы и поможет как можно быстрее
            восстановиться после родов.
          </p>
          <p>
            <span className="fw-bold">Патронаж новорожденных </span> в нашей
            <span className="fst-italic"> медицинской службе `Айболит` </span> –
            это внимательное, доброжелательное отношение, высокий
            профессионализм врачей, индивидуальный подход к каждому ребенку.
          </p>
        </div>
        <div>
          <h5 className="-4">Кому необходим послеродовой патронаж?</h5>
          <img
            src={require(`../../assets/img/spravka3.jpg`)}
            alt="nevrolog_na_dom_osmotr_rebenka"
            className="size-img"
            title="Детский невролог на дом"
          />
          <p>
            Послеродовое посещение мамы и ребенка необходимо абсолютно всем
            семьям. Если малыш испытывает дискомфорт, часто плачет, срыгивает
            или страдает от запоров, об этом необходимо поставить в известность
            врача, чтобы он смог скорректировать диету мамы или назначить прием
            специальных препаратов. Кроме того, врач, который приходит навещать
            малыша, оказывает неоценимую помощь и только что родившей женщине.
            Как правило, мама может получить следующие рекомендации:
          </p>
          <ul>
            <li>
              Обучение приемам «материнского массажа» для грудничков, не
              достигших трех месяцев.
            </li>
            <li>
              Осмотр молочных желез и обучение правильному вскармливанию грудью.
            </li>
            <li>Подбор профилактических мер против мастита и лактостаза.</li>
            <li>
              Помощь в ответе на животрепещущие вопросы о том, как одевать
              малыша, как правильно брать на руки, нужно ли пеленать ребенка,
              когда начинать гулять и многие другие.
            </li>
          </ul>
          <p>
            Врач поможет маме избавиться от многих тревог и страхов, расскажет
            ей о том, что вредно для малыша, а что – нет, как правильно купать,
            и с какого возраста можно закаливать младенца. <br /> Послеродовой
            патронаж в нашем центре – это внимание к каждому малышу и его
            потребностям, это важное условие полноценного роста и развития
            новорожденного.
          </p>
        </div>

        <BlockReklama3 />
        <div>
          <h5 className="my-4">
            Условия предоставления патронажа новорожденных в `Айболит`
          </h5>
          <p>
            Благодаря заботе высококвалифицированных специалистов, переход из
            родильной палаты к домашнему быту будет простым и легким. Педиатр и
            узкие специалисты сделают все возможное, чтобы вы не испытывали
            никаких неудобств и чувствовали надежную поддержку до тех пор, пока
            вы не поймете, что в состоянии сами справляться с возникшими
            трудностями.
          </p>
          <p>
            Вы сможете заключить договор о посещении мамы и малыша на удобных
            для вас условиях -
            <NavLink
              to="/programmy-nablyudeniya-za-zdorovem/"
              target="_blank"
              rel="noopener noreferrer"
            >
              ПРОГРАММЫ НАБЛЮДЕНИЯ
            </NavLink>
            . Чтобы узнать подробности, достаточно позвонить нам по телефону
            <span className="fw-bold"> +7 (3822) 60-92-43 </span> , и получить
            ответы на любые интересующие вас вопросы. Также вы можете оставить
            заявку на сайте, и наши администраторы свяжутся с вами.
            <span className="fw-bold"> Патронаж новорожденных в Томске </span>,
            который проводят специалисты нашей медицинской службы – это
            профессиональная помощь и искренняя забота о молодой семье.
          </p>
        </div>
      </div>
    </Container>
  );
}
