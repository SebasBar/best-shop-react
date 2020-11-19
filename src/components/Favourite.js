import React from "react";

export default class Favourite extends React.Component {
  constructor(props) {
    super(props);
    console.log("this is favvvv ", props.favourite);
    this.state = {
      data: null,
    };
  }


  componentDidMount() {
    console.log("this is props id", this.props.favourite);
    const proxyURL = "https://cors-anywhere.herokuapp.com/";
  
    let favArray = this.props.favourite.join();
    console.log("favarray", favArray);
    const url =
      "https://open.api.ebay.com/shopping?" +
      "callname=GetMultipleItems&" +
      "responseencoding=JSON&" +
      "appid=Sebastia-bestshop-PRD-1e6527e8b-30fb236c&" +
      "siteid=0&" +
      "version=967&" +
      `ItemID=${favArray}`;

    fetch(proxyURL + url)
      .then((response) => response.json())
      .then((data) => {
        console.log(" this is fetched data 2", data);
        this.setState({ data: data });
      });
  }

  render() {
    console.log("Favourite RENDERS");

    

    return (
      <div className="products">
       
        {/* {this.state.data ? console.log(this.state.data) : "not yet"}
        {this.state.data && this.state.data.id ? <p>this.state.data.Title</p> */}
   





</div>
   
    );
  }
}



// AutoPay: false
// BidCount: 0
// ConditionDisplayName: "New with tags"
// ConditionID: 1000
// ConvertedCurrentPrice: {Value: 6.99, CurrencyID: "USD"}
// Country: "US"
// EndTime: "2020-11-30T22:13:50.000Z"
// GlobalShipping: true
// HitCount: 52165
// ItemID: "114385605135"
// ListingStatus: "Active"
// ListingType: "FixedPriceItem"
// Location: "Reno, Nevada"
// PictureURL: (6) ["https://i.ebayimg.com/00/s/NjY1WDY2NQ==/z/460AAOSwZstfR0h~/$_57.JPG?set_id=8800005007", "https://i.ebayimg.com/00/s/NzQwWDczNQ==/z/7UwAAOSwaSRfR0iG/$_57.JPG?set_id=8800005007", "https://i.ebayimg.com/00/s/NzM5WDczNQ==/z/IioAAOSw2blfR0iH/$_57.JPG?set_id=8800005007", "https://i.ebayimg.com/00/s/NzM2WDczNA==/z/AQ8AAOSwmZJfR0iI/$_57.JPG?set_id=8800005007", "https://i.ebayimg.com/00/s/NzMzWDczNA==/z/ngYAAOSwDKdfR0iJ/$_57.JPG?set_id=8800005007", "https://i.ebayimg.com/00/s/NzMyWDczNg==/z/l4IAAOSwNkZfR0iJ/$_57.JPG?set_id=8800005007"]
// PrimaryCategoryID: "155101"
// PrimaryCategoryName: "Jewelry & Watches:Fashion Jewelry:Necklaces & Pendants"
// QuantityAvailableHint: "MoreThan"
// QuantityThreshold: 10
// TimeLeft: "P11DT15H40M33S"
// Title: "Fashion Butterfly Pendant Necklace Rhinestone Sweater Chain Women Crystal Choker"
// ViewItemURLForNaturalSearch: "https://www.ebay.com/itm/Fashion-Butterfly-Pendant-Necklace-Rhinestone-Sweater-Chain-Women-Crystal-Choker-/114385605135?var="