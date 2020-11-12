import React from "react";
import DisplayProduct from "./components/DisplayProducts";
import Searchbar from "./components/SearchBar";
import { securityAppName } from "./config";
import CategoriesBar from "./components/CategoriesBar";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import ProductDetails from "./components/ProductDetails";

import Footer from "./components/Footer";
import Header from "./components/Header";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      numItemDisplay: 10, //this is the default number of items to display
      searchResult: null,
      error: false, //this will catch the error if the user tries to search something with an empty search bar
      loading: true, //this will display something while the fetching is been loading
    };
  }

  componentDidMount() {
    console.log("component mount");
    //this.handleFetch(); //in this case it is commented to avoid to display a "null" value when the home page is displayed
  }

  handleSearch = (query) => {
    this.setState({ loading: true });
    this.handleFetch(query);
  };
  //this function is passed as a call back function to the searchBar and categories bar components and will call the handle
  // fetch function to fetch the API data

  handleNumProduct = (event) => {
    this.setState({ numItemDisplay: event.target.value });
  };
  //this function will be passed as a call back function to the drop down menu "product per page" and
  // it will change the value ok the numItemDisplay to the selected value of items to display

  handleFetch = (query) => {
    //will fetch the API data
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
          //this is the error message you get when is a problem with the API response
          console.log(
            data.findItemsByKeywordsResponse[0].errorMessage[0].error[0]
              .message[0]
          );
          //this will display the error message on the console
          this.setState({
            error:
              data.findItemsByKeywordsResponse[0].errorMessage[0].error[0]
                .message[0],
          });
          //set the error state to the value respose of the API
        } else {
          this.setState({
            loading: false,
            searchResult:
              data.findItemsByKeywordsResponse[0].searchResult[0].item,
            error: false,
          });
          //if there is no errror, it changes the value of loading, search result and in case of a previous error
          // it will change the value of error to false. The error value is passed as props to the search bar component
        }
      });
  };

  render() {
    const maxItemsPerPage = 30;
    let itemPerPage = Array.from(Array(maxItemsPerPage + 1).keys());
    itemPerPage.shift();
    // this will create an array from 1 to the maxItemsPerPage value to be displayed on the drop down menu

    console.log("app", this.state.searchResult);
    console.log("error", this.state.error);

    return (
      <>
        <Header />
        <Router>
          <Route exact path="/">
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
            {/* drop down menu. It maps each element (numbers) dinamycally so it is easy to change*/}

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
          </Route>

          <Route exact path="/category/:name" component={DisplayProduct} />

          <Route exact path="/product/:id" component={ProductDetails} />
        </Router>
        <Footer />
      </>
    );
  }
}
