import { NavLink } from "react-router-dom";

import MapSubMenu from "./MapSubMenu";

export default function MapMenuItem({ items }) {
  return (
    <li>
      <NavLink
        to={items.path}
        role="button"
        target="_top"
        rel="noopener noreferrer"
        // className="nav-link"
      >
        {items.breadcrumb}
      </NavLink>
      {items.children && <MapSubMenu submenus={items} />}
    </li>
  );
}
