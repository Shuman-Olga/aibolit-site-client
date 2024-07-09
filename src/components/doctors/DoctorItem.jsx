import { Container } from "react-bootstrap";

export default function DoctorPage({
  img,
  firstname,
  lastname,
  surname,
  listdoctorname,
  work,
  workhouse,
  education,
  certificate,
  experience,
}) {
  return (
    <>
      <div className="page-h1">
        <Container>
          <h1>
            {lastname} {firstname} {surname}
          </h1>
        </Container>
      </div>
      <Container id="doctor">
        <Container className="mb-5">
          <Container className="d-flex align-items-start my-4">
            <div className="p-2 border-block">
              <img
                src={require(`../../assets/img/${img}`)}
                alt={firstname}
                title={lastname}
                width="300"
              />
            </div>
            <div className="px-4 ">
              {listdoctorname.map((item, index) => (
                <h4 className="mb-3" key={index}>
                  {item.doctorname}
                </h4>
              ))}
              {work.map((item, index) => (
                <div key={index}>
                  <h5>{item.title}:</h5>
                  {item.worklist.map((item, index) => (
                    <ul key={index}>
                      <li>{item.workname}</li>
                    </ul>
                  ))}
                </div>
              ))}
              <p className="fw-bold">{workhouse}</p>
              <hr />
              <h6>Высшее медицинское образование:</h6>
              {education.map((item, index) => (
                <p key={index}>
                  {item.year}г. {item.univ} - {item.type}
                </p>
              ))}
              <h6>Сертификат специалиста:</h6>
              <p>
                По специальности - {certificate.type} действует до{" "}
                {certificate.data}
                {certificate.year + 5} г.
              </p>
              <h6>Стаж работы в области медицины:</h6>
              <p>с {experience} г.</p>
            </div>
          </Container>
        </Container>
      </Container>
    </>
  );
}
