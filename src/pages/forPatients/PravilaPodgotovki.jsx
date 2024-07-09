import { Container } from "react-bootstrap";

import SeoPage from "../../components/Seo";
import { dataSeoPravilaPodgotovkiIssledovaniyam } from "../../data/Seo/dataSeoPages2Level";
// import { NavMini } from "../../components/navigations/NavMini";

export default function PravilaPodgotovkiIssledovaniyam() {
  return (
    <Container fluid id="pravila" className="mb-3">
      <SeoPage data={dataSeoPravilaPodgotovkiIssledovaniyam} />
      <div className="page-h1">
        <Container>
          <h1>Правила подготовки к исследованиям</h1>
        </Container>
      </div>
      <Container className="d-flex justify-content-between my-4 position-block">
        <Container className="mt-4">
          <h4 className="text-center mb-4">
            Правила подготовки к диагностическим исследованиям
          </h4>
          <p>
            Для наиболее точного диагностирования заболеваний недостаточно
            самого современного лабораторного оборудования. Точность результатов
            зависит не только от используемых реактивов и аппаратуры, но и от
            времени и правильности сбора исследуемого материала. При
            несоблюдении основных правил подготовки к анализам их результаты
            могут быть значительно искажены.
          </p>
          <h5 className="text-center">
            Правила подготовки пациентов к лабораторным исследованиям.
          </h5>
          <ol className="my-3">
            <li>
              <p className="fw-bold">Исследование крови:</p>
              <p className="fw-bold">
                Забор всех анализов крови делается до проведения рентгенографии,
                УЗИ и физиотерапевтических процедур.
              </p>
              <p className="fw-bold">
                Если у пациента головокружение или слабость, предупреждайте об
                этом процедурную сестру — кровь у вас возьмут в положении лежа.
              </p>
              <p>
                Общий анализ крови, определение группы крови, резус-фактора,
                биохимические анализы сдаются натощак, не менее, чем 12-ти часов
                после последнего приема пищи.
              </p>
              <p>
                За 1-2 дня до обследования исключить из рациона жирное, жареное.
              </p>
              <p>Накануне обследования легкий ужин и хороший отдых.</p>
              <p>
                В день обследования –
                <span className="fw-bold"> завтракать нельзя </span> (включая
                употребление чая, кофе или сока), исключить физические нагрузки,
                прием лекарств воздержаться от курения.
              </p>
              <p>
                Если испытываются трудности с отменой лекарств, то обязательно
                нужно согласовать с лечащим врачом.
              </p>
              <p>
                Употребление воды на показатели крови влияния не оказывает,
                поэтому пить воду можно.
              </p>
              <p>
                Рекомендуем все анализы сдавать в утренние часы, в связи с тем,
                что показатели крови существенно меняются в течение дня и
                нормативы рассчитаны на этот период суток.
              </p>
              <p>
                За 2 дня до обследования необходимо отказаться от алкоголя,
                жирной и жареной пищи.
              </p>
              <p>За 1-2 часа до забора крови не курить.</p>
              <p>
                Перед исследованием крови следует максимально снизить физические
                нагрузки, избегать эмоционального возбуждения. Минут 10-15 нужно
                отдохнуть. Перед сдачей крови необходимо успокоиться, чтобы
                избежать немотивированного выброса в кровь гормонов и увеличение
                их показателя.
              </p>
              <p>
                Нельзя сдавать кровь сразу после физиотерапевтических процедур,
                ультразвукового и рентгенологического исследования, массажа и
                рефлексотерапии.
              </p>
              <p>
                Перед гормональным исследованием крови у женщин репродуктивного
                возраста следует придерживаться рекомендаций лечащего врача о
                дне менструального цикла, в который необходимо сдать кровь, так
                как на результат анализа влияют физиологические факторы фазы
                менструального цикла.
              </p>
              <p className="fw-bold text-center">
                Как подготовиться к сдаче анализа на онкомаркеры?
              </p>
              <p>
                Чтобы результаты анализа на онкомаркеры были достоверными,
                обязательно предварительно проконсультируйтесь с вашим лечащим
                <span className="fw-bold"> </span> и следуйте его рекомендациям.
              </p>
              <p>
                Основные правила подготовки к исследованию крови на онкомаркеры:
              </p>
              <p>
                <span className="fw-bold">Кровь сдается </span> строго утром
                натощак, т.е. после последнего приема пищи должно пройти не
                менее 8–12 часов.
              </p>
              <p>
                За 3 дня до анализа нельзя употреблять алкогольные напитки,
                жирную пищу.
              </p>
              <p>Отменить все физические нагрузки.</p>
              <p>В день сдачи анализа воздержаться от курения.</p>
              <p>Не употреблять лекарства.</p>
              <p>
                При анализе на ПСА в течение недели необходимо воздерживаться от
                половых контактов.
              </p>
              <p>
                Пациентам, проходящим лечение от онкозаболеваний, настоятельно
                рекомендуется делать анализ несколько раз в год.
              </p>
            </li>
            <li>
              <p className="fw-bold">Анализ мочи</p>
              <p className="fw-bold">Общеклинический анализ мочи: </p>
              <ul>
                <li>
                  собирается только утренняя моча, взятая в середине
                  мочеиспускания;
                </li>
                <li>
                  утренняя порция мочи: сбор производится сразу после подъема с
                  постели, до приема утреннего кофе или чая;
                </li>
                <li>
                  предыдущее мочеиспускание было не позже, чем в 2 часа ночи;
                </li>
                <li>
                  перед сбором анализа мочи проводится тщательный туалет
                  наружных половых органов;
                </li>
                <li>
                  в специальный контейнер с крышкой собирают 10 мл мочи,
                  снабжают направлением, собранную мочу сразу направляют в
                  лабораторию;
                </li>
                <li>
                  хранение мочи в холодильнике допускается при t 2-4 C, но не
                  более 1,5 часов;
                </li>
                <li>женщинам нельзя сдавать мочу во время менструации.</li>
              </ul>
              <p className="fw-bold mt-3">Сбор суточной мочи:</p>
              <ul>
                <li>
                  пациент собирает мочу в течение 24 часов при обычном питьевом
                  режиме (около 1,5 л в сутки);
                </li>
                <li>
                  утром в 6-8 часов он освобождает мочевой пузырь и выливает эту
                  порцию, затем в течение суток собирает всю мочу в чистый
                  широкогорлый сосуд из темного стекла с крышкой емкостью не
                  менее 2 л;
                </li>
                <li>
                  последняя порция берется в то же время, когда накануне был
                  начат сбор, отмечается время начала и конца сбора;
                </li>
                <li>
                  емкость хранится в прохладном месте (лучше в холодильнике на
                  нижней полке), замерзание не допускается;
                </li>
                <li>
                  по окончании сбора мочи измеряется её объем, мочу тщательно
                  взбалтывают и отливают 50-100 мл в специальный контейнер, в
                  котором она будет доставлена в лабораторию;
                </li>
                <li>обязательно указывают объем суточной мочи.</li>
              </ul>
              <p className="fw-bold mt-3">
                Сбор мочи для микробиологического исследования (посев мочи):
              </p>
              <ul>
                <li>
                  утренняя моча собирается в стерильный лабораторный контейнер с
                  крышкой;
                </li>
                <li>
                  первые 15 мл мочи для анализа не используются, берутся
                  последующие 5- 10 мл;
                </li>
                <li>
                  собранная моча доставляется в лабораторию в течение 1,5 – 2
                  часов после сбора;
                </li>
                <li>
                  допускается хранение мочи в холодильнике, но не более 3-4
                  часов;
                </li>
                <li>
                  сбор мочи проводится до начала медикаментозного лечения;
                </li>
                <li>
                  если нужно оценить эффект проведенной терапии, то посев мочи
                  производится по окончании курса лечения.
                </li>
              </ul>
              <p className="fw-bold mt-3">Анализ мокроты</p>
              <ul>
                <li>
                  анализ собирается в стерильный лабораторный контейнер; – перед
                  сбором мокроты необходимо почистить зубы, прополоскать рот и
                  горло.
                </li>
              </ul>
            </li>
            <li>
              <p className="fw-bold">Анализы в гинекологии, урологии</p>
              <p className="fw-bold mt-3">Для женщин:</p>
              <ul>
                <li>
                  нельзя мочиться в течение 3-х часов до сдачи анализа (мазок,
                  посев); – не рекомендуется вступать в половой контакт за 36
                  часов, тем более с использованием противозачаточных средств,
                  которые могут исказить результат, так как обладают
                  антибактериальным действием;
                </li>
                <li>
                  накануне нельзя подмываться антибактериальным мылом и
                  спринцеваться;
                </li>
                <li>нельзя применять антибиотики внутрь;</li>
                <li>нельзя сдавать анализы во время менструации.</li>
              </ul>
              <p className="fw-bold mt-3">Для мужчин:</p>
              <ul>
                <li>нельзя ходить в туалет за 3 часа до сдачи анализа;</li>
                <li>нельзя принимать внутрь уросептики, антибиотики;</li>
                <li>
                  применять наружно растворы, обладающие дезинфицирующим
                  действием, мыло с антибактериальным действием;
                </li>
                <li>
                  не рекомендуется вступать в половой контакт за 36 часов до
                  сдачи анализов.
                </li>
              </ul>
            </li>
            <li>
              <p className="fw-bold">Ультразвуковые исследования</p>
              <p className="fw-bold mt-3">
                Подготовка к УЗИ брюшной полости, почек:
              </p>
              <ul>
                <li>
                  за 2-3 дня до обследования рекомендуется перейти на
                  бесшлаковую диету, исключить из рациона продукты, усиливающие
                  газообразование в кишечнике (сырые овощи, богатые растительной
                  клетчаткой, цельное молоко, черный хлеб, бобовые, газированные
                  напитки, а также высококолорийные кондитерские изделия –
                  пирожные, торты);
                </li>
                <li>
                  УЗИ органов брюшной полости необходимо проводить натощак, если
                  исследование невозможно провести утром, допускается легкий
                  завтрак;
                </li>
                <li>
                  пациентам, имеющим проблемы с ЖКТ (запоры) целесообразно в
                  течение этого промежутка времени принимать ферментные
                  препараты и энтеросорбенты (например, фестал, мезим-форте,
                  активированный уголь или эспумизан по 1 таблетке 3 раза в
                  день), которые помогут уменьшить проявления метеоризма;
                </li>
                <li>
                  если Вы принимаете лекарственные средства, предупредите об
                  этом врача УЗИ;
                </li>
                <li>
                  Нельзя проводить исследование после гастро- и колоноскопии, а
                  также R-исследований органов ЖКТ
                </li>
              </ul>
              <p className="fw-bold mt-3">
                Подготовка к УЗИ органов малого таза (мочевой пузырь, матка,
                придатки у женщин):
              </p>
              <ul>
                <li>
                  исследование проводится при полном мочевом пузыре, поэтому
                  необходимо не мочиться до исследования в течение 3-4 часов и
                  выпить 1 л негазированной жидкости за 1 час до процедуры.
                </li>
              </ul>
              <p>
                Для трансвагинального УЗИ (ТВС) специальная подготовка не
                требуется. В случае, если у пациента проблемы с ЖКТ – необходимо
                провести очистительную клизму накануне вечером.
              </p>
              <p className="fw-bold mt-3">
                Подготовка к УЗИ мочевого пузыря и простаты у мужчин:
              </p>
              <ul>
                <li>
                  исследование проводится при полном мочевом пузыре, поэтому
                  необходимо не мочиться до исследования в течение 3-4 часов и
                  выпить 1 л негазированной жидкости за 1 час до процедуры.
                </li>
              </ul>
              <p>
                Перед трансректальномисследовании простаты (ТРУЗИ) необходимо
                сделать очистительную клизму.
              </p>
              <p className="fw-bold mt-3">Подготовка к УЗИ молочных желез:</p>
              <ul>
                <li>
                  исследование молочных желез желательно проводить в первые 7-10
                  дней менструального цикла (1 фаза цикла).
                </li>
              </ul>
              <p className=" mt-3">
                <span className="fw-bold">
                  УЗИ щитовидной железы, лимфатических узлов и почек{" "}
                </span>
                УЗИ щитовидной железы, лимфатических узлов и почек – не требуют
                специальной подготовки пациента.
              </p>
              <p className="fw-bold mt-3">
                Пациенту с собой необходимо иметь:{" "}
              </p>
              <ul>
                <li>
                  данные предыдущих исследований УЗИ (для определения динамики
                  заболевания);
                </li>
                <li>
                  направление на УЗ исследование (цель исследования, наличие
                  сопутствующих заболеваний);
                </li>
                <li>большое полотенце или пеленку.</li>
              </ul>
            </li>
            <li>
              <p className="fw-bold">
                Функциональная диагностика. Функциональные методы исследования
                сердца:
              </p>
              <p className="fw-bold mt-3">Эхокардиография (УЗИ сердца):</p>
              <ul>
                <li>исследование проводится после 10-15 минутного отдыха;</li>
                <li>
                  перед исследованиями не рекомендуется плотный прием пищи,
                  крепкий чай, кофе, а также проведение после приема
                  медикаментов, физиотерапевтических процедур, лечебной
                  физкультуры и других обследований, которые способствуют
                  утомлению больного (рентгеновское, радиоизотопное);
                </li>
                <li>знать точный вес.</li>
              </ul>
              <p className="fw-bold mt-3">
                Исследования состояния тонуса стенки и проходимости сосудов:
              </p>
              <p>
                Реоэцефалография (РЭГ), реовазография (РВГ конечностей),
                ультразвуковая допплерография сосудов брахиоцефальной области и
                нижних конечностей, УЗДГ-БЦА, транскраниальная допплерография.
              </p>
              <ul>
                <li>
                  Все эти исследования не требуют специальной подготовки.
                  Проводятся до занятий лечебной гимнастики,
                  физиотерапевтических процедур, приема медикаментов.
                </li>
              </ul>
            </li>
            <li>
              <p className="fw-bold">Эндоскопические исследования</p>
              <p className="fw-bold mt-3">Фиброгастродуоденоскопия</p>
              <p className="fw-bold mt-3">как правильно подготовиться:</p>
              <ul>
                <li>явка как минимум за 5 минут до назначенного времени;</li>
              </ul>
              <p>
                Утром в день исследования{" "}
                <span className="fw-bold">до ФГДС НЕ РЕКОМЕНДУЕТСЯ:</span>
              </p>
              <ul>
                <li>курить</li>
                <li>принимать лекарства в таблетках (капсулах) внутрь;</li>
              </ul>
              <p>
                Утром в день исследования{" "}
                <span className="fw-bold">до проведения ФГДС РАЗРЕШАЕТСЯ:</span>
              </p>
              <ul>
                <li>чистить зубы</li>
                <li>делать УЗИ брюшной полости и других органов</li>
                <li>
                  за 2-4 часа пить воду, некрепкий чай с сахаром (без хлеба,
                  варенья, конфет…)
                </li>
                <li>
                  принимать лекарства, которые можно рассасывать в полости рта,
                  не заглатывая или взять с собой
                </li>
                <li>
                  делать уколы, если не требуется после укола прием пищи и нет
                  возможности сделать его после ФГДС
                </li>
              </ul>
              <p>
                Перед исследованием нужно снять съемные зубные протезы, очки,
                галстук.
              </p>
              <p>
                Никакой специальной диеты перед ФГС (ФГДС) не требуется, но:
              </p>
              <ul>
                <li>
                  шоколад (шоколадные конфеты), семечки, орехи, острые блюда и
                  алкоголь исключить за 2 дня;
                </li>
                <li>
                  при исследовании с 11 часов и позже – желательно утром и за
                  2-3 часа до процедуры выпить мелкими глотками один стакан
                  негазированной воды или некрепкого чая (без варения, конфет,
                  печенья, хлеба и др.);
                </li>
              </ul>
              <p>Важно, что бы:</p>
              <ul>
                <li>одежда была просторной, ворот и ремень расстегнуты;</li>
                <li>духами, одеколоном Вы не пользовались;</li>
              </ul>
              <p>
                Вы своевременно предупредили врача о наличии у Вас
                лекарственной, пищевой и иной аллергии.
              </p>
              <p className="fw-bold">Больному с собой необходимо иметь:</p>
              <ul>
                <li>
                  постоянно принимаемые лекарства (принять после осмотра, а под
                  язык или спрей при ИБС, бронхиальной астме.. — до осмотра !);
                </li>
                <li>
                  данные предыдущих исследований ФГДС (для определения динамики
                  заболевания) и биопсии (для уточнения показаний к повторной
                  биопсии);
                </li>
                <li>
                  направление на ФГДС исследование (цель исследования, наличие
                  сопутствующих заболеваний…);
                </li>
                <li>полотенце хорошо впитывающее жидкость или пеленку.</li>
              </ul>
              <p className="fw-bold text-center">
                При невозможности явиться в назначенное время просьба заранее
                позвонить врачу или туда, где Вы записывались!!!
              </p>
              <p className="fw-bold  text-center">
                Уважайте себя и берегите время врача!
              </p>
            </li>
            <li>
              <p className="fw-bold">Подготовка к рентген исследованиям.</p>
              <p>
                Рентген исследование черепа, шейного отдела позвоночника,
                придаточных пазух носа – снять украшения (цепь, сережки,
                заколки, пирсинг).
              </p>
              <p>
                Рентген исследование кистей – снять украшения (кольца, браслеты,
                часы).
              </p>
              <p>
                Рентген исследование таза, КПС, поясничного отдела позвоночника
                - сделать клизму.
              </p>
              <p>
                Рентген исследование желудка и пищевода вечером легкий ужин
                утром не есть, не пить. Рентген исследование кишечника
                (ирригоскопия, ирригография) – легкий ужин не позднее 19.00,
                накануне вечером и утром делается очистительная клизма до чистых
                вод. Исключить газообразующую пищу (черный хлеб, овощи, фрукты,
                газированные напитки, кисло – молочные продукты)
              </p>
              <p>
                При назначении обзорной и экскреторной урографии требуется
                тщательная подготовка; в течение 2-3 дней соблюдается диета
                исключить газообразующую пищу (черный хлеб, овощи, фрукты,
                газированные напитки, кисло – молочные продукты). Накануне
                исследования вечером и утром – очистительная клизма до чистых
                вод. Легкий ужин, не позднее 19.00.
              </p>
              <p>
                Обзорная рентгенография органов брюшной полости выполнятся без
                подготовки, стоя.
              </p>
            </li>
          </ol>
        </Container>
        {/* <NavMini {...{ path: "/pacientam/" }} /> */}
      </Container>
    </Container>
  );
}