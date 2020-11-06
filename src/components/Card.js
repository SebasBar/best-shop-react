import React from "react";
function Card(props) {
  return (
    <div className="main-container">
      <div className="container">
        <img src={props.image} />
        <p className="product-name"> {props.title}</p>
        <p> Price: {props.price}$ </p>
        {/* <p>Location available: {props.location}</p> 
         <p>Product# {props.product}</p> 
         <p>Country: {props.country}</p> 
         <p><a href={props.link}>Link to ebay</a></p> */}
        {/* <button onClick={() => createCart()} > add to cart</button> */}
      </div>
    </div>
  );
}

export default Card;
