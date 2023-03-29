import React from "react";
import "./header.css";
import logo from "/Logo.svg";

function Header() {
  return (
    <div className="header">
      <div className="container">
        <div className="header-row">
          <div className="logo">
            <img src={logo} alt="logo" />
          </div>

          <div className="menu">
            <a href="#">Order</a>
            <a href="#">Order Review</a>
            <a href="#">Manage Inventory</a>
            <a href="#">Login</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
