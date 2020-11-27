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

  toogleFunction = () => {
    this.setState({
      close: !this.state.close,
    });
  }

  render() {
    const { close } = this.state
    return (
      <>
        <div className={`toggle-button ${close ? "" : "open"} `} onClick={() => this.toogleFunction()} >
          <div className={`line ${!close ? "close" : ""}`}></div>
          <div className={`line ${!close ? "close" : ""}`}></div>
          <div className={`line ${!close ? "close" : ""}`}></div>
        </div>
        <div className={`menu ${close ? "" : "open"}`}>

          <div className="categories-bar">
            {categories.map((category, index) => (
              <Link className="button" key={index} to={`/categories/${category}`}>
                {category}
              </Link>
            ))}

          </div>
        </div>
      </>

    );
  }
}

export default withRouter(CreateCategoriesBar);
