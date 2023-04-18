import React from "react";
import { slide as Menu } from "react-burger-menu";
import './hamburger.css'

export default (props) => {
  return (
    // Pass on our props
    <Menu {...props}>
      <a className="menu-item" href="/Burgers">
        Hamburger
      </a>

      <a className="menu-item" href="/Sides">
        Fries
      </a>

      <a className="menu-item" href="/Drinks">
        Shake
      </a>
    </Menu>
  );
};
