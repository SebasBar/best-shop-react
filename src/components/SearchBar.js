import React from "react";
import { withRouter } from "react-router-dom";
//this component just recieves a call back function as props "onSearch" and reads the user input
class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userInput: "",
    };
  }
  handleSubmit = (event) => {
    event.preventDefault();
    // this.props.onSearch(this.state.userInput);
    this.props.history.push(`/products?name=${this.state.userInput}`);
  };
  handleChange = (event) => {
    this.setState({ userInput: event.target.value });
  };
  render() {
 
    return (
      <form onSubmit={(event) => this.handleSubmit(event)}>
        <input
          type="text"
          placeholder="Search here"
          value={this.state.userInput}
          onChange={(event) => this.handleChange(event)}
        />
        <input type="submit" value="search" />
        {this.props.error && <p style={{ color: "red" }}>{this.props.error}</p>}
      </form>
    );
  }
}

export default withRouter(SearchBar);
