import React from "react";

import "./Card.css";

import { Link } from "react-router-dom";

//this component recieve as props the API array response

function Card(props) {
  //adding fav button
  return (
    <div className="container">
      <h2 className="product-name">
        <strong>{props.title}</strong>
      </h2>
      <img
        style={{ width: "250px", heigh: "180px" }}
        className="cards-image"
        src={props.image}
      />
      <div className="card-prices">
        <p>
          <strong>Price:</strong> {props.price}${" "}
        </p>
        <p>
          <a href={props.link}>Link to ebay</a>
          <br />
          <br />

          <Link
            to={{
              pathname: `/product/${props.id}`,
              details: props,
            }}
          >
            More product details
          </Link>
        </p>
        {/* finally we re using this function. we brought all the way from app.js */}
        <button
          className={`heart-button ${
            props.favourite.includes(props.id) ? "liked" : ""
          }`}
          onClick={() => props.addFav(props.id)}
        >
          &#x2665;
        </button>
      </div>
    </div>
  );
}

export default Card;
