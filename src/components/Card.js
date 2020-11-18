import React from "react";

import "./Card.css";



import { Link } from "react-router-dom";

//this component recieve as props the API array response

function Card(props) {

  console.log("received remote control: ", props.setState)
  //adding fav button
  function addFav(){
    console.log("hello", props)
  }
  

  return (
    <div className="container">
      <h2 className="product-name">
        <strong>{props.title}</strong>
      </h2>
      <img className="cards-image" src={props.image} />
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
          <button onClick={addFav}>Add to Favourites</button>
      </div>
    </div>
  );
}

export default Card;
