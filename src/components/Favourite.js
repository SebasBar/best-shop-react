import React from "react";
import Card from "./Card";
import "./DisplayProducts.css";
import { securityAppName2 } from "../config";

export default class Favourite extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: null,
    };
  }

  componentDidMount() {
    const proxyURL = "https://cors-anywhere.herokuapp.com/";

    let favArray = this.props.favourite.join();
    console.log("fav", favArray);

    const url =
      "https://open.api.ebay.com/shopping?" +
      "callname=GetMultipleItems&" +
      "responseencoding=JSON&" +
      `appid=${securityAppName2}` +
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
    if (this.state.data) {
      const { Ack, Item } = this.state.data;
      console.log("ack", Ack);
      if (Ack === "Success") {
        return (
          <div className="cards">
            {Item.map((product) => (
              <Card
                price={product.ConvertedCurrentPrice.Value}
                image={product.PictureURL[0]}
                title={product.Title}
                location={product.Location}
                shipping={product.ConditionDescription}
                link={product.ViewItemURLForNaturalSearch}
                country={product.Country}
                id={product.ItemID}
                addFav={this.props.addFav}
                favourite={this.props.favourite}
              />
            ))}
          </div>
        );
      }
    }
    return "no favorites selected";
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
