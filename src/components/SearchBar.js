import React from "react";

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userInput: "",
    };
  }
  handleSubmit = (event) => {
    event.preventDefault();
    this.props.onSearch(this.state.userInput);
  };
  handleChange = (event) => {
    this.setState({ userInput: event.target.value });
  };
  render() {
    console.log("Bar", this.props.error);
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

export default SearchBar;
