import "./App.css";
import React from "react";
import DisplayProduct from "./components/DisplayProducts";
import Searchbar from "./components/SearchBar";
import CategoriesBar from "./components/CategoriesBar";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ProductDetails from "./components/ProductDetails";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Favourite from "./components/Favourite";
import HomePage from "./components/HomePage";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      numItemDisplay: 10,
      searchResult: null,
      error: false,
      favourite: [],
    };
  }
  //create a function to add "fav" and existing "Fav" parameter in setState favourite , look down where we passed it to displayproducts.js
  addFav = (fav) => {
    if (this.state.favourite.includes(fav)) {
      this.state.favourite.splice(this.state.favourite.indexOf(fav), 1);

      this.setState({
        favourite: this.state.favourite,
      });
    } else {
      this.setState({
        favourite: [...this.state.favourite, fav],
      });
    }
  };

  handleNumProduct = (event) => {
    this.setState({ numItemDisplay: event.target.value });
  };
  // this handles when there is a change in the product number drop down menu

  render() {
    // const maxItemsPerPage = 30;
    // let itemPerPage = Array.from(Array(maxItemsPerPage + 1).keys());
    // itemPerPage.shift();
    // // this will create an array from 1 to the maxItemsPerPage value to be displayed on the drop down menu

    let itemPerPage = [1, 5, 10, 20, 30, 50];

    return (
      <>
        <Header />
        <Router>
          <div className="products-search">
            <div className="space-v"> </div>
            <Searchbar history error={this.state.error} />
            <div className="space-h"> </div>
            <label className="label1">Products per page </label>
            <div className="space-h"> </div>
            <select
              id="myList"
              className="pro-per-page"
              value={this.state.numItemDisplay}
              onChange={this.handleNumProduct}
            >
              {itemPerPage.map((item, index) => (
                <option key={index} value={item}>
                  {item}
                </option>
              ))}
            </select>
          </div>
          <CategoriesBar />

          <Switch>
            <Route
              exact
              path="/"
              render={(props) => (
                <HomePage
                  {...props}
                  numberItem={this.state.numItemDisplay}
                  favourite={this.state.favourite}
                  addFav={this.addFav}
                />
              )}
            />
            <Route
              exact
              path="/categories/favourites"
              render={(props) => (
                <Favourite
                  {...props}
                  favourite={this.state.favourite}
                  addFav={this.addFav}
                />
              )}
            />

            <Route
              exact
              path="/categories/:name"
              render={(
                props // reacts internal props: match, search etc...
              ) => (
                <DisplayProduct
                  {...props}
                  numberItem={this.state.numItemDisplay}
                  addFav={this.addFav}
                  favourite={this.state.favourite}
                />
              )}
            />

            <Route
              exact
              path="/products"
              render={(props) => (
                <DisplayProduct
                  {...props}
                  numberItem={this.state.numItemDisplay}
                  addFav={this.addFav}
                  favourite={this.state.favourite}
                />
              )}
            />

            <Route exact path="/product/:id" component={ProductDetails} />
          </Switch>
        </Router>

        <Footer />
      </>
    );
  }
}
