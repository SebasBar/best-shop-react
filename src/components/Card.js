import React from "react";
import "./Card.css";



function Card(props) {
  return (
    <div className="container">
      <h2 className="product-name">
        {" "}
        <strong>{props.title}</strong>
      </h2>
      <img className="cards-image" src={props.image} />
      <div className="card-prices">
        <p>
          {" "}
          <strong>Price:</strong> {props.price}${" "}
        </p>
      </div>
      <div className="card-location">
        <p>
          <strong>Location available: </strong> {props.location}
        </p>
      </div>
      <div className="card-country">
        <p>
          <strong>Country:</strong> {props.country}
        </p>
      </div>
      <div className="card-shipping">
        <p>
          <strong>Shipping Type </strong> {props.shipping}
        </p>
      </div>
      <div className="link">
        <p>
          <a href={props.link}>Link to ebay</a>
        </p>
      </div>
    </div>
  );
}

export default Card;
