import React from "react";

const categories = [
  "technology",
  "fashion",
  "beauty",
  "motors",
  "collectibles",
  "industrial",
  "sports",
  "home&garden",
];
//category array. Adding or removing elements is easier in this way

class CreateCategoriesBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      categoryInput: "",
    };
  }
  handleSubmit = (event) => {
    event.preventDefault();
    this.props.onSearch(this.state.categoryInput);
  };
  //this will recieve a call back function "onSearch" with the category name as an input. It works as the search bar but
  //with a fixed value to search for.

  handleChange = (event) => {
    this.setState({ categoryInput: event });
  };

  render() {
    return (
      <div className="categories-bar">
        {categories.map((category, index) => (
          <button
            key={index}
            className="button"
            value={category}
            onClick={(event) => this.props.onSearch(event.target.value)}
          >
            {category}
          </button>
        ))}
        {/* maps the categories to make them easy to add or change */}
      </div>
    );
  }
}

export default CreateCategoriesBar;
