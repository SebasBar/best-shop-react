import React from "react";
import "./ProductDetails.css";

class ProductDetails extends React.Component {
  constructor(props) {
    super(props);
    console.log("THIS IS PARAMS: ", props.match.params.id);
    this.state = {
      liked: false,
      item: null
    };
  }

  componentDidMount(){
    console.log("this is props id", this.props)
  const proxyURL = "https://cors-anywhere.herokuapp.com/";
  const url = "https://open.api.ebay.com/shopping?"+
   "callname=GetSingleItem&" +
   "responseencoding=JSON&" +
   "appid=Sebastia-bestshop-PRD-1e6527e8b-30fb236c&" +
   "siteid=0&" +
   "version=967&" +
   `ItemID=${this.props.match.params.id}`;

   fetch(proxyURL+url)
  .then(response => response.json())
  .then(data => {
 console.log(" this is fetched data", data)
 this.setState({item:data})
 })


}

  toggleLike = () => {
    this.setState({ liked: !this.state.liked });
  };

  render() {


    console.log("this is item", this.state.item ? this.state.item.Item.Title : "not yet here")
    if (this.state.item){
      const details = this.state.item.Item;
      
      return (
        <>
          <h3>{details.Title}</h3>
          <img className="productPic" src={details.PictureURL} alt="" width="200px" />
  
          <p>Our Price: {details.ConvertedCurrentPrice.Value}$</p>
          <strong>Conditions: {details.ConditionDescription}</strong>
          <p>Country: {details.Country}</p>
          <p>Location: {details.Location}</p>
          <a href={details.ViewItemURLForNaturalSearch}>Buy now</a>
          <br></br>
          <br></br>
  
          <button
            onClick={this.toggleLike}
            className={`heart-button ${this.state.liked ? "liked" : ""}`}
          >
            &#x2665;
          </button>
        </>
      );
    }

    return (<>not loaded yet</>)

    
  }
}

export default ProductDetails;

// Item:
// AutoPay: true
// BidCount: 0
// ConditionDescription: "“Fully tested & Functional..Free 2-Day Shipping.. Comes in Generic Box w/ Original USB cable + Wall Adapter. Please read Description for Condition details..Works on all GSM & CDMA Carriers in USA and World Wide.""
// ConditionDisplayName: "Seller refurbished"
// ConditionID: 2500
// ConvertedCurrentPrice: {Value: 339.99, CurrencyID: "USD"}
// Country: "US"
// EndTime: "2020-12-11T21:37:22.000Z"
// ItemID: "124220232784"
// ListingStatus: "Active"
// ListingType: "FixedPriceItem"
// Location: "Houston, Texas"
// PictureURL: ["https://i.ebayimg.com/00/s/MTIwMFgxMjAw/z/3KIAAOSwWzJe4qG-/$_57.JPG?set_id=8800005007"]
// PrimaryCategoryID: "9355"
// PrimaryCategoryName: "Cell Phones & Accessories:Cell Phones & Smartphones"
// TimeLeft: "P23DT13H57M29S"
// Title: "Apple iPhone XR - 64GB 128GB - Factory Unlocked (CDMA + GSM) Smartphone"
// ViewItemURLForNaturalSearch: "https://www.ebay.com/itm/Apple-iPhone-XR-64GB-128GB-Factory-Unlocked-CDMA-GSM-Smartphone-/124220232784?var="