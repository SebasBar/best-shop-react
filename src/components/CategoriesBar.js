import React from "react";
import { Link, withRouter } from "react-router-dom";
import "./CategoriesBar.css";

const categories = [
  "technology",
  "fashion",
  "beauty",
  "motors",
  "collectibles",
  "industrial",
  "sports",
  "home&garden",
  "favourites",
];

class CreateCategoriesBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      categoryInput: "",
    };
  }
  handleSubmit = (value) => {
    this.props.history.push(`/${value}`);

    // this.props.onSearch(this.state.categoryInput);
  };
  handleChange = (event) => {
    this.setState({ categoryInput: event });
  };

  render() {
    return (
      <div>
        <div className="categories-bar">
          {categories.map((category, index) => (
            <div className="button-container">
              <Link key={index} to={`/categories/${category}`}>
                <button
                  key={index}
                  className="button"
                  value={category}
                  onClick={(event) => this.handleSubmit(event.target.value)}
                >
                  {category}
                </button>
              </Link>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default withRouter(CreateCategoriesBar);
