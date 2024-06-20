import React from "react";
import "../assets/css/cart.css";
import { Link } from "react-router-dom";

import { useCartval, useDispatch } from "../App";
const Cart = () => {
  const cartData = useCartval();
  const dispatch = useDispatch();
  function handleIncrement(id) {
    dispatch({
      type: "plus",
      id: id,
    });
  }
  function hanndleDegrement(id,times) {
    if(times>1){
    dispatch({
      type: "minus",
      id: id,
    });
  }
  else{
    dispatch({
      type: "delete",
      id: id,
    });
  }
  }
  function handleRemove(id) {
    dispatch({
      type: "delete",
      id: id,
    });
  }
  return (
    <div className="cart-container">
      <h1>Cart</h1>
      <h4 style={cartData.length==0 ? {opacity:1} : {opacity:0}}>No items!!!</h4>
      {cartData.map((val, i) => {
        return (
          <div key={i.toString()} className="item">
            <figure>
              <img src={val.img} alt="#" />
            </figure>
            <div className="product-detail">
              <h2 className="title">{val.title}</h2>
              <h5 className="rate">{"$"+val.rate}</h5>
              <button onClick={() => handleRemove(val.id)}>Remove</button>
              <button>
                {" "}
                <Link className="Link1" to="/">
                  View
                </Link>
              </button>
            </div>
            <div className="add-reduce">
              <span className="add" onClick={() => handleIncrement(val.id)}>
                +
              </span>
              <span className="total">{val.times}</span>
              <span className="redu" onClick={() => hanndleDegrement(val.id,val.times)}>
                -
              </span>
            </div>
          </div>
        );
      })}
      <button>
        {" "}
        <Link className="Link2" to="/">
          Go back
        </Link>
      </button>
    </div>
  );
};

export default Cart;
