import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import useBreadcrumbs from "use-react-router-breadcrumbs";
import { Container } from "react-bootstrap";

import { routesMain } from "../routers/routers";

export default function Breadcrumbs() {
  const breadcrumbs = useBreadcrumbs(routesMain);
  const location = useLocation();
  const pathnames = location.pathname.split("/").filter((x) => x);
  // console.log(location);
  return (
    <Container id="breadcrumbs">
      {/* <nav aria-label="breadcrumb">
        <ol>
          {pathnames.map((value, index) => {
            const last = index === pathnames.length - 1;
            const to = `/${pathnames.slice(0, index + 1).join("/")}`;
            const routeName = routesMain.find(
              (route) => route.path === to
            )?.name;

            return (
              <li key={to}>
                {last ? (
                  <span>{routeName}</span>
                ) : (
                  <NavLink to={to}>{routeName}</NavLink>
                )}
              </li>
            );
          })}
        </ol>
      </nav> */}
      {breadcrumbs.map(
        ({ match, breadcrumb }) =>
          match.pathname &&
          location.pathname !== "/" && (
            <NavLink
              key={match.pathname}
              to={`/${match.pathname}/`}
              // className={
              //   match.pathname + `/` === location.pathname
              //     ? "breadcrumb-active"
              //     : "breadcrumb-not-active"
              // }
            >
              {breadcrumb}-{match.pathname}
            </NavLink>
          )
      )}
    </Container>
  );
}
