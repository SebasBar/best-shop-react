import React from 'react';
import DisplayProduct from './components/DisplayProducts';
import Searchbar from './components/SearchBar';
import CategoriesBar from './components/CategoriesBar';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ProductDetails from './components/ProductDetails';
import Footer from './components/Footer';
import Header from './components/Header';
import Favourite from './components/Favourite';
import HomePage from './components/HomePage';

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

	// this handles when there is a change in the product number drop down menu

	render() {
		// // this will create an array from 1 to the maxItemsPerPage value to be displayed on the drop down menu

		return (
			<>
				<Header />
				<Router>
					<Searchbar history error={this.state.error} />
					<CategoriesBar numberItem={this.state.numItemDisplay} />


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
                  numberItem={this.state.numItemDisplay}
                  favourite={this.state.favourite}
                  addFav={this.addFav}
                />
              )}
            />


						<Route
							exact
							path='/categories/:name/:page'
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
							path='/products'
							render={(props) => (
								<DisplayProduct
									{...props}
									numberItem={this.state.numItemDisplay}
									addFav={this.addFav}
									favourite={this.state.favourite}
								/>
							)}
						/>

						<Route exact path='/product/:id' component={ProductDetails} />
					</Switch>
				</Router>

				<Footer />
			</>
		);
	}
}
