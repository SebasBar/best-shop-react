import React from "react";


class CreateCategoriesBar extends React.Component{
  constructor(props){
    super(props);
    this.state = {
        categoryInput: ""
    }
}
handleSubmit = (event) => {
    event.preventDefault();
    this.props.onSearch(this.state.categoryInput)

}
handleChange = (event) => {
    this.setState({ categoryInput:event });
}
 
  render(){
    return(
      <form onSubmit={()=>this.handleSubmit(this.id)}>
    <div className="categories-bar">
    <input
        type="submit"
        id="technology"
        value = "Technology"
     />
        {/* <button
      id="fashion"
        onClick = {() => searchButton('fashion')}
      >Fashion</button>
        <button
      id="health-beauty"
        onClick = {() => searchButton('health&beauty')}
      >Health and Beauty</button>
        <button
      id="motors"
        onClick = {() => searchButton('motors')}
      >Motors</button>
        <button
      id="collectibles"
        onClick = {() => searchButton('collectibles')}
      >Collectibles</button>
        <button
      id="industrial"
        onClick = {() => searchButton('industrial')}
      >Industrial</button>
        <button
      id="sports"
        onClick = {() => searchButton('sports')}
      >Sports</button>
        <button
      id="homeandgarden"
        onClick = {() => searchButton('home&garden')}
      >Home and Garden</button> */}
    </div>
    </form>
  );
}
}



export default CreateCategoriesBar;