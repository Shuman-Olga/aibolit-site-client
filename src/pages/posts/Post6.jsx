import { Container } from "react-bootstrap";

import SeoPage from "../../components/Seo";
import { dataSeoPost6 } from "../../data/Seo/dataSeoPosts";
import BlockReklama4 from "../../components/reklama/BlockReklama4";

export default function Post6() {
  return (
    <Container id="post" className="d-flex justify-content-center">
      <SeoPage data={dataSeoPost6} />
      <div className="size-cont border">
        <h1 className="my-4">Как помочь ребенку перенести жару</h1>
        <div>
          <img
            className="size-img"
            src={require(`../../assets/img/post6-1.jpg`)}
            alt="rebenok"
            title="ребенок"
          />
          <ul className="list-unstyled">
            <li>🔸Одежда хлопковая или льняная, свободная и светлых тонов.</li>
            <li>🔹На голову легкая кепка или панама.</li>
            <li>
              🔸Водные процедуры несколько раз в день водой комнатной
              температуры(ванна, душ).
            </li>
            <li>
              🔹Гулять лучше с утра до 11 часов и вечером после 16, когда солнце
              не так активно.
            </li>
            <li>
              🔸На прогулку на кожу ребенка можно нанести солнцезащитный крем.
            </li>
            <li>🔹Находитесь с ребенком на прогулке преимущественно в тени.</li>
            <li>
              🔸Во время жары для грудничков оптимальная доза вода в сутки
              считается до 60 мл. Если Вы не кормите малыша грудью, то воду
              необходимо давать в обязательном порядке.
            </li>
          </ul>

          <hr />
          <p>
            Если Вы не кормите малыша грудью, то воду необходимо давать в
            обязательном порядке.
          </p>
          <p>
            ✅Лайфхак для прогулок — бутылочка с пульверизатором. Освежит водой
            лицо, грудь, руки вам и ребенку.
          </p>
        </div>
        <div>
          <img
            src={require(`../../assets/img/DSC_0849.jpg`)}
            alt="deti_detski_sad"
            className="w-100"
            title="детский сад"
          />

          <p className="mt-4">
            🔆Солнечный и тепловой удар у детей – понятия сходные. Солнечный
            удар – это вид теплового, и возникает он при непосредственном
            воздействии лучей солнца на голову ребенка. В результате перегрева в
            детском организме нарушается обмен веществ, нарушается
            кровообращение и потоотделение. Все эти изменения могут привести к
            весьма серьезным последствиям.️
          </p>
          <p>
            ✅Особую группу риска составляют малыши от 0 до 3х лет, ведь их
            организм еще не умеет в должной степени регулировать температуру.
            Помимо возраста, высокой температуры окружающей среды и прямого
            воздействия лучей солнца, к солнечному удару у детей
            предрасполагают:
          </p>
        </div>
        <div>
          <h5 className="my-4">Симптомы</h5>
          <p>
            Проявления удара возникают в первые 6 часов после пребывания на
            солнышке. Малыш становится раздражительным, появляется вялость,
            головная боль, одышка, тошнота и рвота, лицо ребенка краснеет, в
            глазах его темнеет, повышается до 39-40º температура тела. Позднее
            учащаются или замедляются сердечные сокращения, появляются бред,
            галлюцинации. В тяжелых случаях ребенок теряет сознание, кожа его
            покрывается липким потом, на ощупь становится холодной, приобретает
            бледный либо синюшный оттенок – это состояние несет угрозу жизни
            малыша.
          </p>
          <div>
            <h5 className="my-4">Первая помощь</h5>
            <p>
              Ребенку с симптоматикой данного состояния необходимо вызвать
              скорую помощь, а до ее прибытия облегчить состояние крохи.
            </p>
            <ul className="list-unstyled">
              <li>
                <p>🔶Отнести пострадавшего в прохладное место, в тень.</p>
              </li>
              <li>
                <p>
                  🔷Уложить его на бок, чтобы избежать попадания рвотных масс в
                  дыхательные пути.
                </p>
              </li>
              <li>
                <p>🔶Расстегнуть или снять одежду.</p>
              </li>
              <li>
                <p>
                  🔷Если ребенок в сознании, поить его прохладной водой или
                  чаем.
                </p>
              </li>
              <li>
                <p>
                  🔶При гипертермии обернуть голову малыша мокрым полотенцем или
                  пеленкой, протереть его тельце мягкой влажной губкой, особенно
                  в области шеи, подмышек, локтевых сгибов, в паховых областях и
                  подколенных ямках. Вода для обтираний должна комнатной
                  температуры.
                </p>
              </li>
            </ul>
          </div>
        </div>
        <BlockReklama4 />
      </div>
    </Container>
  );
}
