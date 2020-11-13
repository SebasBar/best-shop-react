import React from "react";
import { Link } from "react-router-dom";

//this component recieve as props the API array response

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
      </div>
    </div>
  );
}

export default Card;
