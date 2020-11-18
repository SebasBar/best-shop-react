import React from "react";
import { Link } from "react-router-dom";
import "./SidebarMenu.css";


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
            close: true,
        };
    }
    handleSubmit = (event) => {
        event.preventDefault();
        this.props.onSearch(this.state.categoryInput);
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
            <div>


                <div className={close ? "toggle-button" : "toggle-button toggle-button-change"} onClick={() => this.toogleFunction()} >
                    <div className="line1"></div>
                    <div className="line2"></div>
                    <div className="line3"></div>
                </div>
                <div className={close ? "sidebar-menu hide" : "sidebar-menu show toggle-button-change"}>
                    <div className="menu" >
                        {categories.map((category, index) => (
                            <div className="button-container">
                                <Link key={index} to={`/categories/${category}`}>
                                    <button
                                        key={index}
                                        className="button"
                                        value={category}
                                        onClick={(event) => this.props.onSearch(event.target.value)}
                                    >
                                        {category}
                                    </button>
                                </Link>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        );
    }
}

export default CreateCategoriesBar;
