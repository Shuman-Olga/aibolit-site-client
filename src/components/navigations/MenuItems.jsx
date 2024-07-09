import { NavLink } from "react-router-dom";
import Dropdown from "./Dropdown";

export default function MenuItems({ items }) {
  return (
    <>
      {items.children &&
      items.path !== "blog/" &&
      items.path !== "uslugi-i-ceny/" ? (
        <div className="wrap-li">
          <li className="nav-item dropdown mx-2">
            <NavLink
              className="nav-link "
              to={items.path}
              target="_top"
              rel="noopener noreferrer"
            >
              {items.breadcrumb}
            </NavLink>

            <Dropdown dropmenus={items} />
          </li>
          <button
            type="button"
            className="btn dropdown-toggle dropdown-toggle-split"
            id="dropdownMenuReference"
            data-bs-toggle="dropdown"
            aria-expanded="false"
            data-bs-reference="parent"
            to={items.path}
            target="_top"
            rel="noopener noreferrer"
          >
            <span className="visually-hidden">
              Переключатель выпадающего списка
            </span>
          </button>
        </div>
      ) : (
        <li className="nav-item  mx-2">
          <NavLink
            to={items.path}
            className="nav-link"
            target="_top"
            rel="noopener noreferrer"
          >
            {items.breadcrumb}
          </NavLink>
        </li>
      )}
    </>
  );
}
