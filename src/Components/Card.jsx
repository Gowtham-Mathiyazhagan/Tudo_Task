import React, { useState } from "react";
import "../assets/css/card.css";
import fur1 from "../assets/images/furniture1.jpg";
import fur2 from "../assets/images/furniture2.jpg";
import fur3 from "../assets/images/furniture3.jpg";
import amazon from "../assets/images/logo8.png";
import { useCartval, useDispatch } from "../App";

const Card = () => {
  const [viewProduct, setViewProduct] = useState(false);
  const [added, setAdded] = useState(false);
  const dispatch = useDispatch();
  const cartVal = useCartval();
  function handleCart(data) {
    dispatch({
      type: "add",
      id: data.id,
      img: data.img,
      title: data.title,
      rate: data.rate,
      times: 1,
      added:true,
    });
    setAdded(true);

    setTimeout(() => setAdded(false), 3000);
  }

  return (
    <>
      <div className={viewProduct ? "overlay active" : "overlay"}></div>
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
        <section
          className={viewProduct ? "stock-container active" : "stock-container"}
        >
          <div className="stock">
            <i
              className="bi bi-x-square"
              onClick={() => setViewProduct(!viewProduct)}
            ></i>
            <h5>
              <i className="bi bi-exclamation-circle"></i> This product is
              temporarily out of stock because of high demand, we will replenish
              it as soon as possible.
            </h5>
          </div>
        </section>
        <article className="card-container">
          {card_obj.map((data, i) => {
            return (
              <div key={i.toString()} className="card one">
                <figure className="main-img">
                  <img src={data.img} alt="#" />
                </figure>
                <div className="padding">
                  <figure className="logo-img">
                    <img src={amazon} alt="#" />
                  </figure>
                  <div className="wrapper">
                  <h2 className="title">{data.title}</h2>
                  <del className="sub">{data.sub}</del>
                  <h5 className="rate">{"$" + data.rate}</h5>
                  </div>
                  <div className="buttons">
                    <button onClick={() => setViewProduct(!viewProduct)}>
                      View Product
                    </button>
                    <button onClick={() => handleCart(data, i)}>
                      {cartVal.findIndex((val) => val.id === data.id) != -1
                        ? "Added to Cart"
                        : "Add to Cart"}
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </article>
      </section>
      <footer>@ Designed and Developed by Gowtham Mathiyazhagan</footer>
    </>
  );
};

export default Card;

const card_obj = [
  {
    id: 1,
    img: fur1,
    title: "Designers Chair GT Designed by Carry Gail - The Collection",
    sub: "Original price $130",
    rate: 120,
  },
  {
    id: 2,
    img: fur2,
    title: "The Ultimate Collection",
    sub: "Original price $130",
    rate: 120,
  },
  {
    id: 3,
    img: fur3,
    title: "Designers Chair GT Designed by Carry Gail - The Ultimate",
    sub: "Original price $130",
    rate: 120,
  },
  {
    id: 4,
    img: fur1,
    title: "Designers Chair GT Designed by Carry Gail - The Collection",
    sub: "Original price $130",
    rate: 120,
  },
  {
    id: 5,
    img: fur2,
    title: "Original price $130",
    sub: "Original price $130",
    rate: 120,
  },
  {
    id: 6,
    img: fur3,
    title: "Designers Chair GT Designed by Carry Gail - The Ultimate",
    sub: "Original price $130",
    rate: 120,
  },
];
