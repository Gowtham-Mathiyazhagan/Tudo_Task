import React from "react";
import "../assets/css/card.css";
import fur1 from "../assets/images/furniture1.jpg";
import fur2 from "../assets/images/furniture2.jpg";
import fur3 from "../assets/images/furniture3.jpg";
import amazon from "../assets/images/logo8.png";

const Card = () => {
  return (
    <>
    <section className="card-component">
      <select name="sort" className="select">
        <option value="#">SHORT BY</option>
      </select>
      <aside className="sidebar">
        <ul className="categories">
          <li className="title-icon">
            <h4>CATEGORIES</h4>
          </li>
          <li>Tables</li>
          <li>Lambs</li>
          <li>Chairs</li>
          <li>Sofa</li>
        </ul>
        <ul className="filter">
          <li className="title-icon">
            <h4>FILTER BY</h4>
          </li>
          <li>
            <div className="color">COLOR</div>
            <span style={{ backgroundColor: "#dc2626" }}></span>
            <span style={{ backgroundColor: "#ea580c" }}></span>
            <span style={{ backgroundColor: "#f59e0b" }}></span>
            <span style={{ backgroundColor: "#84cc16" }}></span>
            <span style={{ backgroundColor: "#16a34a" }}></span>
            <span style={{ backgroundColor: "#059669" }}></span>
          </li>
        </ul>
        <ul className="range">
          <li className="title-icon">
            <h4>PRICE RANGE</h4>
          </li>
          <li className="input">
            <input type="range" min={0} max={100} name="title-icon" />
            <input type="range" min={0} max={100} name="title-icon" />
          </li>
          <li className="value">
            <span>$0</span>
            <span>$6000</span>
          </li>
        </ul>

        <ul className="other">
          <li className="title-icon">
            <h4>OTHERS</h4>
            <span>Share</span>
          </li>
        </ul>
      </aside>
      <article className="card-container">
      {
		card_obj.map((data)=>{
			return(
				<div className="card one">
				<figure className="main-img">
				  <img src={data.img} alt="#" />
				</figure>
				<div className="padding">
				  <figure className="logo-img">
					<img src={amazon} alt="#" />
				  </figure>
				  <h2 className="title">{data.title}</h2>
				  <del className="sub">{data.sub}</del>
				  <h5 className="rate">{data.rate}</h5>
				  <div className="buttons">
					<button>View Product</button>
					<button>Add to Cart</button>
				  </div>
				</div>
			  </div>
			)
		})
	  }
      </article>
    </section>
    <footer>@ Designed and Developed by Gowtham Mathiyazhagan</footer>
    </>
  );
};

export default Card;

const card_obj = [
  {
    img: fur1,
    title: "Designers Chair GT Designed by Carry Gail - The Collection",
    sub: "Original price $130",
    rate: "$120",
  },
  {
    img: fur2,
    title: "The Ultimate Collection",
    sub: "Original price $130",
    rate: "$120",
  },
  {
    img: fur3,
    title: "Designers Chair GT Designed by Carry Gail - The Ultimate",
    sub: "Original price $130",
    rate: "$120",
  },
  {
    img: fur1,
    title: "Designers Chair GT Designed by Carry Gail - The Collection",
    sub: "Original price $130",
    rate: "$120",
  },
  {
    img: fur2,
    title: "Original price $130",
    sub: "Original price $130",
    rate: "$120",
  },
  {
    img: fur3,
    title: "Designers Chair GT Designed by Carry Gail - The Ultimate",
    sub: "Original price $130",
    rate: "$120",
  },
];
