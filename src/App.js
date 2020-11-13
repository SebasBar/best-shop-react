import React from "react";
import DisplayProduct from "./components/DisplayProducts";
import Searchbar from "./components/SearchBar";
import { securityAppName } from "./config";
import CategoriesBar from "./components/CategoriesBar";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

import ProductDetails from "./components/ProductDetails";


import Footer from "./components/Footer";
import Header from "./components/Header";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      numItemDisplay: 10,
      searchResult: null,
      error: false,
      loading: true,
    };
  }

  componentDidMount() {
    console.log("component mount");
    //this.handleFetch();
  }

  handleSearch = (query) => {
    this.setState({ loading: true });
    this.handleFetch(query);
  };

  handleNumProduct = (event) => {
    this.setState({ numItemDisplay: event.target.value });
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
            error: false,
          });
        }
      });
  };

  render() {
    const maxItemsPerPage = 30;
    let itemPerPage = Array.from(Array(maxItemsPerPage + 1).keys());
    itemPerPage.shift();
    // this will create an array from 1 to the maxItemsPerPage value to be displayed on the drop down menu

    console.log("app", this.state.searchResult);
    return (
      <>
        <Header />
        <Router>
          <label>Products per page </label>
          <select
            id="myList"
            value={this.state.numItemDisplay}
            onChange={this.handleNumProduct}
          >
            {itemPerPage.map((item, index) => (
              <option key={index} value={item}>
                {item}
              </option>
            ))}
          </select>
          <Searchbar
            onSearch={(query) => this.handleSearch(query)}
            error={this.state.error}
          />

          <CategoriesBar onSearch={(query) => this.handleSearch(query)} />

          {!this.state.loading ? (
            <DisplayProduct product={this.state.searchResult} />
          ) : (
            <h1>Loading...</h1>
          )}

          <Route exact path="/category/:name" component={DisplayProduct} />

          <Route exact path="/product/:id" component={ProductDetails} />
        </Router>
        <Footer />
      </>
    );
  }
}
