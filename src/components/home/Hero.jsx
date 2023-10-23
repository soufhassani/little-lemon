import React from "react";
import { Link } from "react-router-dom";
import styles from "./style.module.css";
import image from "../../assets/restaurant.jpg";

const Hero = () => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h2>Little Lemon</h2>
        <h4>Chicago</h4>
        <p>
          Lorem ipsum dolor sit amet,
          <br />
          consectetur adipiscing elit,
          <br />
          sed do eiusmod tempor incididunt ut.
        </p>
        <Link role="button" to="/reservation">
          Reserve a Table
        </Link>
      </div>
      <div className={styles.media}>
        <img src={image} />
      </div>
    </div>
  );
};

export default Hero;
