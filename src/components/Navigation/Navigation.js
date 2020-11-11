import React from "react";
import style from "./Navigation.module.css";
const Navigation = () => (
  <div className={style.nav}>
    <ul className={style.list}>
      <li>
        <a href="https://google.com">Home</a>
      </li>
      <li>
        <a href="#">About</a>
      </li>
      <li>
        <a href="#">Contact</a>
      </li>
    </ul>
  </div>
);
export default Navigation;
