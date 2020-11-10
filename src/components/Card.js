import React from "react";

function Card(props) {
  return (
    <div className="main-container">
      <div className="container">
        <h2 className="product-name">
          {" "}
          <strong>{props.title}</strong>
        </h2>
        <img src={props.image} />
        <p>
          {" "}
          <strong>Price:</strong> {props.price}${" "}
        </p>
        <p>
          <strong>Location available: </strong> {props.location}
        </p>
        <p>
          <strong>Country:</strong> {props.country}
        </p>
        <p>
          <strong>Shipping Type </strong> {props.shipping}
        </p>
        <p>
          <a href={props.link}>Link to ebay</a>
        </p>
      </div>
    </div>
  );
}

export default Card;
