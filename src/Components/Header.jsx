import React from "react";
import "../assets/css/header.css";
import insta from "../assets/images/insta.jpg";
import chair from "../assets/images/chair.jpg";
import cycle_right from "../assets/images/right-cycle.jpg";
import cycle_left from "../assets/images/left-cycle.jpg";

const Header = () => {
  return (
    <header className="head-container">
      <section className="head-title">
        <figure className="insta">
          <img src={insta} alt="#" />
        </figure>
        <div className="title">
          <h3>Our</h3>
          <h3>Latest</h3>
          <h2>Products</h2>
          <button>view all</button>
        </div>
      </section>
      <section className="image-sec">
        <figure className="chair">
          <img src={chair} alt="#" />
        </figure>
        <figure className="cycle-right">
          <img src={cycle_right} alt="#" />
        </figure>
        <figure className="cycle-left">
          <img src={cycle_left} alt="#" />
        </figure>
        <figure className="insta-two">
          <img src={insta} alt="#" />
        </figure>
      </section>
    </header>
  );
};

export default Header;
