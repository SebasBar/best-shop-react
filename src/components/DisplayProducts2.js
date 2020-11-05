import React from 'react';
import {securityAppName} from '../config'
import Card from './Card';

class DisplayProduct2 extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      products: null
    }

  }
  componentDidMount(){
    console.log(this.props)
    const queryParams =
   "&OPERATION-NAME=findItemsByKeywords" +
   "&SERVICE-VERSION=1.0.0" +
   "&RESPONSE-DATA-FORMAT=JSON" +
   "&REST-PAYLOAD" + `&keywords=${this.props.match.params.name}` + 
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
      procucts: data.findItemsByKeywordsResponse[0].searchResult[0].item})});
      
  }
  render(){
  
    return (
      <>
      {this.state.products ? <h1>loading...</h1>: this.state.products.map(product =><Card name="test" />)}
      </>
    );
  }
}

  export default DisplayProduct2;