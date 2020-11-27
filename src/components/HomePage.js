import React from "react";
import Card from "./Card";
import queryString from "query-string";
import fetching from "../utils/fetching.js";
import { Words } from "../utils/Words";
import "./HomePage.css";

class HomePage extends React.Component {
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

  handleFetch() {
    const query = this.getWord();
    fetching(query, this.props.numberItem)
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
    console.log("Word: ", Words[index]);
    return Words[index];
  }

  render() {
    console.log("Favorite", this.props.favourite);
    console.log("Results: ", this.state.searchResults);
    console.log("Num Items: ", this.props.numberItem);

    return this.state.loading ? (
      // <h1>Loading...</h1>
      <img
        src="https://lh6.googleusercontent.com/proxy/8K8idd8KbjWRXVj0o04RiRSDdlx7MvCzWGO_o7GgRcTKvTvaIgxkYmtay2GqQyph4iIbqDjzTGLEUhLYpBiRmlfhfBgs-AOAfZmcCpUrxVX5KQ1J=s0-d"
        style={{
          width: "250px",
          heigh: "180px",
          margin: "auto",
          display: "block",
        }}
      />
    ) : (
      <div className="cards">
        {this.state.searchResults.map((product, index) => (
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

export default HomePage;
