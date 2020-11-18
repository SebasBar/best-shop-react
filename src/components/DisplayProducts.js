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


      <div className="results-section">

        {this.props.product.map((product, index) => (
          <Card
            price={product.sellingStatus[0].currentPrice[0].__value__}
            image={product.galleryURL[0]}
            title={product.title}
            link={product.viewItemURL[0]}
            id={product.itemId}

          />


        ))}
      </div>
    );
  }
}

export default DisplayProduct;
