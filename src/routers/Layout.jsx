import { Container } from "react-bootstrap";
import { Outlet } from "react-router-dom";
import { Provider } from "react-redux";

import { ModalState } from "../context/ModelContext";
import Footer from "../components/Footer";
import Header from "../components/Header";
// import Breadcrumbs from "../components/Breadcrumbs";
import store from "../redux/store";

export default function Layout() {
  return (
    <Provider store={store}>
      <ModalState>
        <Container fluid>
          <Header />
          {/* <Breadcrumbs /> */}
          <Outlet />
          <Footer />
        </Container>
      </ModalState>
    </Provider>
  );
}
