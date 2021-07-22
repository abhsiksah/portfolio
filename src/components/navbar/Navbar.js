import React from "react";
import "./navbar.css";
// import logo from "./Logo.PNG";
// import MailIcon from "@material-ui/icons/Mail";
import MenuRoundedIcon from "@material-ui/icons/MenuRounded";
import MenuOpenRoundedIcon from "@material-ui/icons/MenuOpenRounded";

const Navbar = ({ open, setopen }) => {
  return (
    <div className="Navbar">
      <div className="wrapper">
        <div className="left">
          <a href="#intro" className="logo">
            Sah...
          </a>
        </div>
        <div className="right">
          {open ? (
            <MenuOpenRoundedIcon
              style={{ fontSize: 40 }}
              onClick={() => setopen(!open)}
            />
          ) : (
            <MenuRoundedIcon
              style={{ fontSize: 40 }}
              onClick={() => setopen(!open)}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
