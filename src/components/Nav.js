import React from "react";
import style from "./Nav.module.css";
const Nav = () => {
  return (
    <header>
      <nav className={style.nav}>
        <div className={style.logo}>LOGO</div>
        <ul className={style.list}>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/">About</a>
          </li>
          <li>
            <a href="/">Projects</a>
          </li>
          <li>
            <a href="/">Contact US</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Nav;
