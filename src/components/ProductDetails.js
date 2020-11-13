import React from "react";
import "./ProductDetails.css";

class ProductDetails extends React.Component {
  constructor(props) {
    super(props);
    console.log("THIS IS PARAMS: ", props.match.params);
    this.state = {
      liked: false,
    };
  }
  toggleLike = () => {
    this.setState({ liked: !this.state.liked });
  };
  render() {
    console.log(this.props);
    const details = this.props.location.details;

    // const details = {
    //   price: "339.98",
    //   image: "https://thumbs3.ebaystatic.com/m/m8AowrG2FI3Xlwv9I-XvU1A/140.jpg",
    //   title: [
    //     "5 HP Air Compressor Duty Electric Motor 184T Frame 1750 RPM Single Phase WEG New",
    //   ],
    //   location: "Lincoln,NE,USA",
    //   shipping: "Free",
    //   link:
    //     "https://www.ebay.com/itm/5-HP-Air-Compressor-Duty-Electric-Motor-184T-Frame-1750-RPM-Single-Phase-WEG-New-/273295622070",
    //   country: ["US"],
    //   id: ["273295622070"],
    // };

    return (
      <>
        <h3>{details.title}</h3>
        <img className="productPic" src={details.image} />

        <p>Our Price: {details.price}$</p>
        <strong>Shipping cost: {details.shipping}</strong>
        <p>Country: {details.country}</p>
        <p>Location: {details.location}</p>
        <a href={details.link}>Buy now</a>
        <br></br>
        <br></br>

        <button
          onClick={this.toggleLike}
          className={`heart-button ${this.state.liked ? "liked" : ""}`}
        >
          &#x2665;
        </button>
      </>
    );
  }
}

export default ProductDetails;
