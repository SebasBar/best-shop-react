import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import './CategoriesBar.css';

const categories = [
	'technology',
	'fashion',
	'beauty',
	'motors',
	'collectibles',
	'industrial',
	'sports',
	'home&garden',
	'favourites',
];

class CreateCategoriesBar extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			categoryInput: '',
			numItemDisplay: 30,
		};
	}
	handleSubmit = (value) => {
		this.props.history.push(`/${value}`);
	};
	handleChange = (event) => {
		this.setState({ categoryInput: event });
	};
	handleNumProduct = (event) => {
		this.setState({ numItemDisplay: event.target.value });
		this.props.history.push(
			`${this.props.location.pathname}?number=${event.target.value}`
		);
	};
	render() {
		return (
			<div>
				<label>Products per page </label>
				<select
					id='myList'
					value={this.state.numItemDisplay}
					onChange={this.handleNumProduct}
				>
					{[20, 30, 50].map((item, index) => (
						<option key={index} value={item}>
							{item}
						</option>
					))}
				</select>
				<div className='categories-bar'>
					{categories.map((category, index) => (
						<div className='button-container'>
							<Link
								key={index}
								to={`/categories/${category}/1?number=${this.props.numberItem}`}
							>
								<button
									key={index}
									className='button'
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
