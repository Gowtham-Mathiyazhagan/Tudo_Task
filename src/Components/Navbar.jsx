import React, { useState } from "react";
import "../assets/css/navbar.css";
import { Link } from "react-router-dom";
import { useCartval } from "../App";
const Navbar = () => {
  const [toggle, setToggle] = useState(false);
const cartData = useCartval()
  return (
    <nav className="navbar">
      <div className={toggle ? "overlay active" : "overlay"}></div>
      <div
        className={toggle ? "toggle active" : "toggle"}
        onClick={() => setToggle(!toggle)}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>
      <Link className="cart" to='/cart'>
      <div className="count">
        <span>{cartData.length}</span>
      <i className="bi bi-cart-plus"></i>
      </div>
      </Link>
      <ul className={toggle ? "nav-container active" : "nav-container"}>
        <li className="nav1">
          <a href="#" className="active">
            Electronics
          </a>
        </li>
        <li className="nav2">
          <a href="#">Sports</a>
        </li>
        <li className="nav4">
          <a href="#">Vehicles</a>
        </li>
        <li className="nav5">
          <a href="#">Book</a>
        </li>
        <li className="nav6">
          <a href="#">Cloths</a>
        </li>
        <li className="nav7">
          <a href="#">Bed & Bath</a>
        </li>
        <li className="nav8">
          <a href="#">Tabletop</a>
        </li>
        <li className="nav9">
          <a href="#">Furniture</a>
        </li>
        <li className="nav10">
          <a href="#">New Arrival</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
