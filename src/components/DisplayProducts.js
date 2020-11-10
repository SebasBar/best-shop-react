import React from "react";
import Card from "./Card";

class DisplayProduct extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      response: null,
      products: null,
    };
  }
  render() {
    console.log("state", this.props.product);
    return (
      <>
        {this.props.product.map((product) => (
          <Card
          
            price={product.sellingStatus[0].currentPrice[0].__value__}
            image={product.galleryURL[0]}
            title={product.title}
            location={product.location[0]}
            shipping={product.shippingInfo[0].shippingType[0]}
            link={product.viewItemURL[0]}
            country={product.country}
            id={product.itemId[0]}
          />
        ))}
      </>
    );
  }
}

export default DisplayProduct;
