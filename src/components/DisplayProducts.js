import React from 'react';


function DisplayProduct(props) {
    const productElements = [];
    console.log("props", props)
    props.product.forEach((item, index) => {
      const itemName = (
        <div className="main-container">
        <div className="container" key={index}>
        <img src={item.galleryURL} />
         <p className="product-name"> {item.name}</p> 
         <p > Price: {item.sellingStatus[0].currentPrice[0].__value__}$ </p> 
         <p>Location available: {item.location}</p> 
         <p>Product# {item.itemId[0]}</p> 
         <p>Country: {item.country[0]}</p> 
         <p><a href={item.viewItemURL[0]}>Link to ebay</a></p>
         <button onClick={() => createCart()} > add to cart</button>
        <p></p>
         </div>     
         </div>
      );
      productElements.push(itemName);
    });

    function createCart() {
    console.log(" this is cart" )
    }
  
    return (
      <div className="main">
        {productElements}
      </div>
    );
  }

  export default DisplayProduct;