import React from "react";
import DisplayProduct from "./components/DisplayProducts";
// import "./style.css";
import Searchbar from "./components/SearchBar";
import {securityAppName} from './config'
import CategoriesBar from "./components/CategoriesBar"
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import DisplayProduct2 from './components/DisplayProducts2.js'; 

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      response: null, 
      searchResult: null,
      loading:true
    };
  }
  
  componentDidMount() {
    this.handleFetch('test');
  }

  handleSearch = (query) =>{
    this.setState({loading:true})
    this.handleFetch(query);
  }

  handleFetch = (query) => {
    const queryParams =
   "&OPERATION-NAME=findItemsByKeywords" +
   "&SERVICE-VERSION=1.0.0" +
   "&RESPONSE-DATA-FORMAT=JSON" +
   "&REST-PAYLOAD" + `&keywords=${query}` + 
   "&paginationInput.entriesPerPage=30" + 
   "&GLOBAL-ID=EBAY-US" + "&siteid=0"

    const baseURL = "https://svcs.sandbox.ebay.com/services/search/FindingService/v1?";  // breakdown api address for future editing
  
  // // use proxy url to overcome CORS problem)
  const proxyURL = "https://cors-anywhere.herokuapp.com/";
  const completeURL = proxyURL + baseURL + securityAppName + queryParams;
  fetch(completeURL)
    .then(resp => resp.json())
    .then(data => {
      console.log(data)
      this.setState({ 
      loading:false,
      response: data,
      searchResult: data.findItemsByKeywordsResponse[0].searchResult[0].item})});
      
  }


  render() {
    // console.log(this.state.response)
    return (
        <>  
      <Router>
        <Searchbar onSearch={(query) => this.handleSearch(query)} />
        
        <CategoriesBar onSearch={(query) => this.handleSearch(query)} /> 
        <Route path="/category/:name" component={DisplayProduct2} exact />
        <DisplayProduct />
        {/* {!this.state.loading ? 
        <DisplayProduct product={this.state.searchResult} /> : <h1>Loading...</h1> } */}
 </Router>
      </>
    );
  }
}