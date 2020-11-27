import React from "react";
import "./ProductDetails.css";

class ProductDetails extends React.Component {
  constructor(props) {
    super(props);
    // console.log("THIS IS PARAMS: ", props.match.params.id);
    this.state = {
      liked: false,
      item: null,
    };
  }

  componentDidMount() {
    const proxyURL = "https://cors-anywhere.herokuapp.com/";
    const url =
      "https://open.api.ebay.com/shopping?" +
      "callname=GetSingleItem&" +
      "responseencoding=JSON&" +
      "appid=Sebastia-bestshop-PRD-1e6527e8b-30fb236c&" +
      "siteid=0&" +
      "version=967&" +
      `ItemID=${this.props.match.params.id}`;

    fetch(proxyURL + url)
      .then((response) => response.json())
      .then((data) => {
        this.setState({ item: data });
      });
  }

  toggleLike = () => {
    this.setState({ liked: !this.state.liked });
  };

  render() {
    console.log(
      "this is item",
      this.state.item ? this.state.item.Item.Title : "not yet here"
    );
    if (this.state.item) {
      const details = this.state.item.Item;
      console.log("item", this.state.item);

      return (
        <>
          <h3>{details.Title}</h3>
          <img
            className="productPic"
            src={details.PictureURL}
            alt=""
            width="200px"
          />

          <p>Our Price: {details.ConvertedCurrentPrice.Value}$</p>
          <p>
            Condition: <strong>{details.ConditionDisplayName}</strong>
          </p>
          <p>Quantity: {details.QuantityThreshold}</p>
          <p>Country: {details.Country}</p>
          <p>Location: {details.Location}</p>
          <a href={details.ViewItemURLForNaturalSearch}>Buy now</a>
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

    return <>not loaded yet</>;
  }
}

export default ProductDetails;
