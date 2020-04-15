import React from "react";
import "./Header.css";

const Header = (props) => {
  return (
    <div className="header">
      <h1>NASA PHOTO OF THE DAY</h1>
      <h1 className="title">{props.title}</h1>
    </div>
  );
};

export default Header;
