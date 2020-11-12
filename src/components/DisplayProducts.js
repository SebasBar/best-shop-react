import React from "react";
import { securityAppName } from "../config";

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

        {this.props.product.map((product, index) => (
          <div className="display-products" key={index}>
            <Card
              price={product.sellingStatus[0].currentPrice[0].__value__}
              image={product.galleryURL[0]}
              title={product.title}
              location={product.location[0]}
              shipping={product.shippingInfo[0].shippingType[0]}
              link={product.viewItemURL[0]}
              country={product.country}
            />
          </div>
        ))}
      </>
    );
  }
}

export default DisplayProduct;
