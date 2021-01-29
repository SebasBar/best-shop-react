import React from "react";
import "./Header.css";

function Header() {
  return (
    <>
      <div className="style-bar" />
      <div className="header">
        <h1 className="header-name">
          B<strong>E</strong>ST-<strong>SHOP</strong>
        </h1>
        <p className="header-slogan">
          <strong>The best web search tool for e-commerce</strong>
        </p>
      </div>
      <div className="style-bar" />
    </>
  );
}

export default Header;
