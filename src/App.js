import React from "react";
import DisplayProduct from "./components/DisplayProducts";
import Searchbar from "./components/SearchBar";
import { securityAppName } from "./config";
import CategoriesBar from "./components/CategoriesBar";
import { BrowserRouter as Router, Route } from "react-router-dom";
import SidebarMenu from "./components/SidebarMenu.js";
import ProductDetails from "./components/ProductDetails";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Card from "./components/Card";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      numItemDisplay: 10,
      searchResult: null,
      error: false,
      // loading: true,
    };
  }

  handleNumProduct = (event) => {
    this.setState({ numItemDisplay: event.target.value });
  };

  render() {
    const maxItemsPerPage = 30;
    let itemPerPage = Array.from(Array(maxItemsPerPage + 1).keys());
    itemPerPage.shift();
    // // this will create an array from 1 to the maxItemsPerPage value to be displayed on the drop down menu

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
            history
            // onSearch={(query) => this.handleSearch(query)}
            error={this.state.error}
          />
          <CategoriesBar />
          {/* {!this.state.loading ? <DisplayProduct /> : <h1>Loading...</h1>} */}
          <Route>
            <Route exact path="/categories/:name" component={DisplayProduct} />
            <Route exact path="/products" component={DisplayProduct} />
            <Route exact path="/product/:id" component={ProductDetails} />
            {/* <SidebarMenu onSearch={(query) => this.handleSearch(query)} /> */}
          </Route>
        </Router>

        <Footer />
      </>
    );
  }
}
