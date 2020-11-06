import React from "react";
import DisplayProduct from "./components/DisplayProducts";
import Searchbar from "./components/SearchBar";
import { securityAppName } from "./config";
import CategoriesBar from "./components/CategoriesBar";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      numItemDisplay: 20,
      searchResult: null,
      error: false,
      loading: true,
    };
  }

  componentDidMount() {
    this.handleFetch();
  }

  handleSearch = (query) => {
    this.setState({ loading: true });
    this.handleFetch(query);
  };

  handleFetch = (query) => {
    const queryParams =
      "&OPERATION-NAME=findItemsByKeywords" +
      "&SERVICE-VERSION=1.0.0" +
      "&RESPONSE-DATA-FORMAT=JSON" +
      "&REST-PAYLOAD" +
      `&keywords=${query}` +
      `&paginationInput.entriesPerPage=${this.state.numItemDisplay}` +
      "&GLOBAL-ID=EBAY-US" +
      "&siteid=0";

    const baseURL =
      "https://svcs.sandbox.ebay.com/services/search/FindingService/v1?"; // breakdown api address for future editing

    // // use proxy url to overcome CORS problem)
    const proxyURL = "https://cors-anywhere.herokuapp.com/";
    const completeURL = proxyURL + baseURL + securityAppName + queryParams;
    fetch(completeURL)
      .then((resp) => resp.json())
      .then((data) => {
        console.log("data", data.findItemsByKeywordsResponse[0].ack[0]);
        if (data.findItemsByKeywordsResponse[0].ack[0] === "Failure") {
          console.log(
            data.findItemsByKeywordsResponse[0].errorMessage[0].error[0]
              .message[0]
          );
          this.setState({
            error:
              data.findItemsByKeywordsResponse[0].errorMessage[0].error[0]
                .message[0],
          });
        } else {
          this.setState({
            loading: false,
            searchResult:
              data.findItemsByKeywordsResponse[0].searchResult[0].item,
          });
        }
      });
  };

  render() {
    console.log("app", this.state.searchResult);
    return (
      <>
        <Router>
          <Searchbar
            onSearch={(query) => this.handleSearch(query)}
            error={this.state.error}
          />
          <CategoriesBar onSearch={(query) => this.handleSearch(query)} />

          <Route path="/category/:name" component={DisplayProduct} exact />
          {!this.state.loading ? (
            <DisplayProduct product={this.state.searchResult} />
          ) : (
            <h1>Loading...</h1>
          )}
        </Router>
      </>
    );
  }
}
