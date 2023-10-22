import React from "react";

const Nav = ({ styles }) => {
  return (
    <nav className={styles.navMenu}>
      <ul className={styles.ul}>
        <li className={styles.li}>
          <a href="/home" className={styles.a}>
            Home
          </a>
        </li>
        <li className={styles.li}>
          <a href="/about" className={styles.a}>
            About
          </a>
        </li>
        <li className={styles.li}>
          <a href="/blog" className={styles.a}>
            Menu
          </a>
        </li>
        <li className={styles.li}>
          <a href="/reservations" className={styles.a}>
            Reservations
          </a>
        </li>
        <li className={styles.li}>
          <a href="/login" className={styles.a}>
            Login
          </a>
        </li>
        <li className={styles.li}>
          <a href="/book" role="button" className={styles.a}>
            book a Table
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
