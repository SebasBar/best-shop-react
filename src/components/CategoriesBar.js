// import React, { useState } from "react";
// import SearchBar from './SearchBar';

// class CreateCategoriesBar extends React.Component{
//   constructor(props){
//     super(props);
//     this.state = {
//         userInput: ""
//     }
// }
// handleSubmit = (event) => {
//     event.preventDefault();
//     this.props.onSearch(this.state.userInput)

// }
// handleChange = (event) => {
//     this.setState({ userInput:event.target.value });
// }
 
//   render(){
//     return(
//       <form onSubmit={(event)=>this.handleSubmit(event)}>
//     <div className="categories-bar">
//     <button
//       id="technology"
//         onClick = {() => SearchBar('technology')}
//       >Technology</button>
//         <button
//       id="fashion"
//         onClick = {() => searchButton('fashion')}
//       >Fashion</button>
//         <button
//       id="health-beauty"
//         onClick = {() => searchButton('health&beauty')}
//       >Health and Beauty</button>
//         <button
//       id="motors"
//         onClick = {() => searchButton('motors')}
//       >Motors</button>
//         <button
//       id="collectibles"
//         onClick = {() => searchButton('collectibles')}
//       >Collectibles</button>
//         <button
//       id="industrial"
//         onClick = {() => searchButton('industrial')}
//       >Industrial</button>
//         <button
//       id="sports"
//         onClick = {() => searchButton('sports')}
//       >Sports</button>
//         <button
//       id="homeandgarden"
//         onClick = {() => searchButton('home&garden')}
//       >Home and Garden</button>
//       <Product properties={products} />
//     </div>
//     </form>
//   );
// }
// }



// export default CreateCategoriesBar;