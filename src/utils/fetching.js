import { securityAppName } from '../config';

function fetching(query, numberParPage, pageNumber) {
	const queryParams =
		'&OPERATION-NAME=findItemsByKeywords' +
		'&SERVICE-VERSION=1.3.0' +
		'&RESPONSE-DATA-FORMAT=JSON' +
		'&REST-PAYLOAD' +
		`&keywords=${query}` +
		`&paginationInput.pageNumber=${pageNumber}` +
		`&paginationInput.entriesPerPage=${numberParPage}` +
		'&GLOBAL-ID=EBAY-US' +
		'&siteid=0';

	const baseURL = 'https://svcs.ebay.com/services/search/FindingService/v1?'; // breakdown api address for future editing

	// // use proxy url to overcome CORS problem)
	const proxyURL = 'https://cors-anywhere.herokuapp.com/';
	const completeURL = proxyURL + baseURL + securityAppName + queryParams;
	console.log('GET', completeURL);
	return fetch(completeURL)
		.then((resp) => resp.json())
		.then((data) => {
			if (data.findItemsByKeywordsResponse[0].ack[0] === 'Failure') {
				throw new Error(
					data.findItemsByKeywordsResponse[0].errorMessage[0].error[0].message[0]
				);
			} else {
				return data;
			}
		});
}

export default fetching;
