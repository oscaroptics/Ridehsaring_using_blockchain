import React from "react";
import { Link } from 'react-router-dom';
import { MenuList } from "../helpers/MenuList";
import MenuItem from "../components/MenuItem";
import "../styles/Menu.css";

function Menu() {
  return (
    <div className="menu">
      <h1 className="menuTitle">RIDES</h1>
      <div className="menuList">
        {MenuList.map((menuItem, index) => (
          <Link
            to={menuItem.route}
            key={index}
            className="menuLink"
          >
            <MenuItem
              key={index}
              image={menuItem.image}
              name={menuItem.name}
            >
              <button>Book now</button>
            </MenuItem>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Menu;
