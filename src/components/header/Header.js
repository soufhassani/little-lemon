import React from "react";
import Nav from "./Nav";
import logo from "../../assets/Logo.svg";
import styles from "./Header.module.css";

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <img src={logo} className={styles.logo} />
        <Nav styles={styles} />
      </div>
    </header>
  );
};

export default Header;
