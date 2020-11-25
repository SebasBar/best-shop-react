import React from "react";
import Card from "./Card";
import queryString from "query-string";
import fetching from "../utils/fetching.js";
import { Words } from "../utils/Words";

class HomePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      searchResults: [],
      error: false,
      numItemDisplay: 10,
    };
  }

  componentDidMount() {
    this.handleFetch();
  }

  //   componentDidUpdate(prevProps) {
  //     if (
  //       this.props.location?.search !== prevProps.location?.search ||
  //       this.props.match?.params.name !== prevProps.match?.params.name ||
  //       this.props.numberItem !== prevProps.numberItem
  //     ) {
  //       this.handleFetch();
  //     }
  //   }

  handleFetch() {
    // const search = queryString.parse(this.props.location.search);

    // // this.setState("numItemDisplay:", this.props.numberItem);
    // console.log("this is props id", this.props);
    // console.log(this.props.match?.params.name);
    // const query = this.props.match?.params.name || search.name || "";
    const query = this.getWord();
    fetching(query, this.state.numItemDisplay)
      .then((data) =>
        this.setState({
          loading: false,
          searchResults:
            data.findItemsByKeywordsResponse[0].searchResult[0].item,
        })
      )
      .catch((err) => {
        this.setState({
          error: err,
        });
      });
  }

  getWord() {
    let index = Math.floor(Math.random() * Math.floor(Words.length));
    return Words[index];
  }

  render() {
    console.log(this.props.favourite);
    return this.state.loading ? (
      <h1>Loading...</h1>
    ) : (
      this.state.searchResults.map((product, index) => (
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
      ))
    );
  }
}

export default HomePage;
