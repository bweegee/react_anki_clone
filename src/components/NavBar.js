import React from "react";
import { Menu, } from "semantic-ui-react";
import { Link } from "react-router-dom";

const NavBar =() => (
  <Menu>
    <Link to="/">
      <Menu.Item>
        Home
      </Menu.Item>
    </Link>

    <Link to="/cards">
      <Menu.Item>
        Cards
      </Menu.Item>
    </Link>
    
    <Link to="/study">
      <Menu.Item>
        Study
      </Menu.Item>
    </Link>
  </Menu>
);

export default NavBar;
