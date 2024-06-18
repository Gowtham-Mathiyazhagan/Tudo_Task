import React from "react";
import "../assets/css/scroller.css";
import logo1 from "../assets/images/logo1.png";
import logo2 from "../assets/images/logo2.jpg";
import logo3 from "../assets/images/logo3.png";
import logo4 from "../assets/images/logo4.png";
import logo5 from "../assets/images/logo5.png";
import logo6 from "../assets/images/logo6.jpg";
import logo7 from "../assets/images/logo7.jpg";
import logo8 from "../assets/images/logo8.png";
import logo9 from "../assets/images/logo9.jpg";

const Scroller = () => {
  return (
    <div className="scroller-container">
      <h3>Our Happy Clients</h3>
      <ul className="scroller">
        <li className="scroll" style={{ backgroundColor: "#dcfce7" }}>
          <img src={logo1} alt="#" />
        </li>
        <li className="scroll" style={{ backgroundColor: "#ffedd5" }}>
          <img src={logo2} alt="#" />
        </li>
        <li className="scroll" style={{ backgroundColor: "#fae8ff" }}>
          <img src={logo3} alt="#" />
        </li>
        <li className="scroll" style={{ backgroundColor: "#e0f2fe" }}>
          <img src={logo4} alt="#" />
        </li>
        <li className="scroll" style={{ backgroundColor: "#ffedd5" }}>
          <img src={logo5} alt="#" />
        </li>
        <li className="scroll" style={{ backgroundColor: "#e0f2fe" }}>
          <img src={logo6} alt="#" />
        </li>
        <li className="scroll" style={{ backgroundColor: "#e0e7ff" }}>
          <img src={logo7} alt="#" />
        </li>
        <li className="scroll" style={{ backgroundColor: "#f5f5f4" }}>
          <img src={logo8} alt="#" />
        </li>
        <li className="scroll" style={{ backgroundColor: "#ffedd5" }}>
          <img src={logo9} alt="#" />
        </li>

        <li className="scroll" style={{ backgroundColor: "#dcfce7" }}>
          <img src={logo1} alt="#" />
        </li>
        <li className="scroll" style={{ backgroundColor: "#ffedd5" }}>
          <img src={logo2} alt="#" />
        </li>
        <li className="scroll" style={{ backgroundColor: "#fae8ff" }}>
          <img src={logo3} alt="#" />
        </li>
        <li className="scroll" style={{ backgroundColor: "#e0f2fe" }}>
          <img src={logo4} alt="#" />
        </li>
        <li className="scroll" style={{ backgroundColor: "#ffedd5" }}>
          <img src={logo5} alt="#" />
        </li>
        <li className="scroll" style={{ backgroundColor: "#e0f2fe" }}>
          <img src={logo6} alt="#" />
        </li>
        <li className="scroll" style={{ backgroundColor: "#e0e7ff" }}>
          <img src={logo7} alt="#" />
        </li>
        <li className="scroll" style={{ backgroundColor: "#f5f5f4" }}>
          <img src={logo8} alt="#" />
        </li>
        <li className="scroll" style={{ backgroundColor: "#ffedd5" }}>
          <img src={logo9} alt="#" />
        </li>
      </ul>
    </div>
  );
};

export default Scroller;
