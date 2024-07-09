import { NavLink } from "react-router-dom";

import Spinner from "../Spinner";
import { useGetUslugiQuery } from "../../redux/api/Api";

export default function UslugiItems() {
  const { data, isSuccess, isLoading } = useGetUslugiQuery();
  return (
    <>
      {!isLoading ? (
        <>
          {isSuccess && (
            <>
              {data.map((item) => (
                <NavLink
                  to={item.path ? `${item.path}/` : ""}
                  className="nav-link"
                  target="_top"
                  rel="noopener noreferrer"
                  key={item.id}
                >
                  <div className="w-75 mb-3 p-3">
                    <div className="text-center mb-2">
                      <h2>{item.title}</h2>
                    </div>

                    <div className="d-flex block-foto">
                      <div>
                        <img
                          src={require(`../../assets/img/${item.img}`)}
                          alt="foto-doctor"
                          title={item.title}
                          width="190"
                          height="160"
                        />
                      </div>
                      <div className="p-3">
                        <p>{item.description}</p>
                      </div>
                    </div>
                  </div>
                </NavLink>
              ))}
            </>
          )}
        </>
      ) : (
        <Spinner />
      )}
    </>
  );
}
