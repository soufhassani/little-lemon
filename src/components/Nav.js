import React from "react";

const Nav = () => {
  return (
    <nav>
      <ul>
        <li>
          <a href="/home">Homepage</a>
        </li>
        <li>
          <a href="/about">About Us</a>
        </li>
        <li>
          <a href="/blog">Blog</a>
        </li>
        <li>
          <a href="/book" role="button">
            Book a table
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
