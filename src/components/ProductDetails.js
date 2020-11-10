import React from "react";

class ProductDetails extends React.Component {
  constructor(props) {
    super(props);
    console.log("THIS IS PARAMS: ", props.match.params);
  }
  render() {
    return <>
    <p>this is {this.props.match.params.id}</p>
    </>;
  }
}

export default ProductDetails;
