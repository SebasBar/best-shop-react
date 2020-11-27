import React from "react";
import Card from "./Card";
import queryString from "query-string";
import fetching from "../utils/fetching.js";
import "./DisplayProducts.css";

class DisplayProduct extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      searchResults: [],
      error: false,
    };
  }

  componentDidMount() {
    this.handleFetch();
  }

  componentDidUpdate(prevProps) {
    if (
      this.props.location?.search !== prevProps.location?.search ||
      this.props.match?.params.name !== prevProps.match?.params.name
      // || this.props.numberItem !== prevProps.numberItem
    ) {
      this.handleFetch();
    }
  }

  handleFetch() {
    this.setState({ loading: true });
    const search = queryString.parse(this.props.location.search);

    console.log("this is props id", this.props);
    console.log("This props match param name", this.props.match?.params.name);
    const query = this.props.match?.params.name || search.name || "";
    fetching(query, this.props.numberItem)
      .then((data) => {
        this.setState({
          loading: false,
          searchResults:
            data.findItemsByKeywordsResponse[0].searchResult[0].item,
        });
        console.log("Search results", this.state.searchResults);
      })
      .catch((err) => {
        this.setState({
          error: err,
        });
      });
  }

  render() {
    console.log("this state", this.state.searchResults);

    return this.state.loading ? (
      <h1>Loading...</h1>
    ) : this.state.searchResults === undefined ||
      this.props.match?.params.name === undefined ? (
      <h1>Please enter a valid keyword</h1>
    ) : (
      <div className="cards">
        {this.state.searchResults
          //.slice(this.props.numberItem)
          .map((product, index) => (
            <Card
              price={product.sellingStatus[0].currentPrice[0].__value__}
              image={product.galleryURL[0]}
              title={product.title[0]}
              location={product.location[0]}
              shipping={product.shippingInfo[0].shippingType[0]}
              link={product.viewItemURL[0]}
              country={product.country[0]}
              id={product.itemId[0]}
              addFav={this.props.addFav}
              favourite={this.props.favourite}
            />
          ))}
      </div>
    );
  }
}

export default DisplayProduct;
