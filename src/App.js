import React from "react";
import DisplayProduct from "./components/DisplayProducts";
import Searchbar from "./components/SearchBar";
import CategoriesBar from "./components/CategoriesBar";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ProductDetails from "./components/ProductDetails";
import Footer from "./components/Footer";
import Header from "./components/Header";
<<<<<<< HEAD
import Card from "./components/Card";
=======
import Favourite from "./components/Favourite";
>>>>>>> 024d0062fa706fb7f63f90a8da65f1421090c25d

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

  render() {
    const maxItemsPerPage = 30;
    let itemPerPage = Array.from(Array(maxItemsPerPage + 1).keys());
    itemPerPage.shift();
    // // this will create an array from 1 to the maxItemsPerPage value to be displayed on the drop down menu

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
          <Searchbar history error={this.state.error} />
          <CategoriesBar />

          <Switch>
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
