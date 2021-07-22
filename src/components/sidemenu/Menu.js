import React from "react";
import "./menu.css";

const Menu = ({ open, setopen }) => {
  return (
    <div className={open ? `Menu ` : `Menu active`}>
      <ul>
        <li onClick={() => setopen(false)}>
          <a href="#intro">About</a>
        </li>
        <li onClick={() => setopen(false)}>
          <a href="#portfolio">PortFolio</a>
        </li>
        <li onClick={() => setopen(false)}>
          <a href="#contact">Contact</a>
        </li>
      </ul>
    </div>
  );
};

export default Menu;
