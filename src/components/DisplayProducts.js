import React from 'react';
import Card from './Card';
import queryString from 'query-string';
import fetching from '../utils/fetching.js';
import { Link } from 'react-router-dom';

class DisplayProduct extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			loading: true,
			searchResults: [],
			error: false,
			numItemDisplay: 30,
			page: 1,
		};
	}

	componentDidMount() {
		this.handleFetch();
	}

	componentDidUpdate(prevProps) {
		if (
			this.props.location?.search !== prevProps.location?.search ||
			this.props.match?.params.name !== prevProps.match?.params.name ||
			this.props.match?.params.page !== prevProps.match?.params.page
		) {
			this.handleFetch();
		}
	}

	handleFetch() {
		this.setState({ loading: true });
		const search = queryString.parse(this.props.location.search);
		console.log('items', search);
		console.log('this is props id', this.props);
		// console.log(this.props.match?.params.name);
		const query = this.props.match?.params.name || search.name || '';
		fetching(query, search.number || 30, this.props.match.params.page)
			.then((data) => {
				console.log('data', data);
				this.setState({
					loading: false,
					searchResults:
						data.findItemsByKeywordsResponse[0].searchResult[0].item,
					paginationOutput: Number(
						data.findItemsByKeywordsResponse[0].paginationOutput[0]
							.totalPages[0]
					),
				});
			})
			.catch((err) => {
				this.setState({
					error: err,
				});
			});
	}

	displayPagination(totalpages) {
		const actualPage = Number(this.props.match.params.page);
		let output = [<Link to={`./${actualPage - 1}`}>Previous</Link>];
		// 0 - 10 -- 10 - 20
		console.log(totalpages);
		for (let i = actualPage; i < actualPage + 10; i++) {
			output.push(<Link to={`./${i}`}>page {i} </Link>);
		}
		output.push(<Link to={`./${actualPage + 11}`}>Next</Link>);
		return output;
	}

	render() {
		console.log(this.state);

		return this.state.loading ? (
			<h1>Loading...</h1>
		) : (
			<>
				{this.state.searchResults
					// slice will reduce the array from 0 to x (x = props.numberItem)
					.slice(0, this.props.numberItem)
					.map((product, index) => (
						<Card
							price={product.sellingStatus[0].currentPrice[0].__value__}
							image={product.galleryURL[0]}
							title={product.title[0]}
							location={product.location[0]}
							shipping={product.shippingInfo[0].shippingType[0]}
							link={product.viewItemURL[0]}
							country={product.country[0]}
							id={product.itemId[0]}
							addFav={this.props.addFav}
							favourite={this.props.favourite}
						/>
					))}
				{this.displayPagination(this.state.paginationOutput)}
			</>
		);
	}
}

export default DisplayProduct;
