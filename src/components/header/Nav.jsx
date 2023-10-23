import React from "react";
import { NavLink } from "react-router-dom";

const Nav = ({ styles }) => {
  return (
    <nav className={styles.navMenu}>
      <ul className={styles.ul}>
        <li className={styles.li}>
          <NavLink to="/" className={styles.a}>
            Home
          </NavLink>
        </li>
        <li className={styles.li}>
          <NavLink to="/about" className={styles.a}>
            About
          </NavLink>
        </li>
        <li className={styles.li}>
          <NavLink to="/menu" className={styles.a}>
            Menu
          </NavLink>
        </li>
        <li className={styles.li}>
          <NavLink to="/reservations" className={styles.a}>
            Reservations
          </NavLink>
        </li>
        <li className={styles.li}>
          <NavLink to="/login" className={styles.a}>
            Login
          </NavLink>
        </li>
        <li className={styles.li}>
          <NavLink to="/book" role="button" className={styles.a}>
            book a Table
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
