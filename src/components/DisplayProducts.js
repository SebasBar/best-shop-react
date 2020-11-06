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
        {this.props.product.map((product) => (
          <Card price={product.sellingStatus[0].sellingState[0]} />
        ))}
      </>
    );
  }
}

export default DisplayProduct;
