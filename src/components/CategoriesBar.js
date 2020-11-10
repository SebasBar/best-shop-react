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
      </div>
    );
  }
}

export default CreateCategoriesBar;
