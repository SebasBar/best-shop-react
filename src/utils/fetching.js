import { securityAppName } from "../config";

function fetching(query, numItem) {
  const queryParams =
    "&OPERATION-NAME=findItemsByKeywords" +
    "&SERVICE-VERSION=1.0.0" +
    "&RESPONSE-DATA-FORMAT=JSON" +
    "&REST-PAYLOAD" +
    `&keywords=${query}` +
    `&paginationInput.entriesPerPage=${numItem}` +
    "&GLOBAL-ID=EBAY-US" +
    "&siteid=0";

  const baseURL =
    "https://svcs.sandbox.ebay.com/services/search/FindingService/v1?"; // breakdown api address for future editing

  // // use proxy url to overcome CORS problem)
  const proxyURL = "https://cors-anywhere.herokuapp.com/";
  const completeURL = proxyURL + baseURL + securityAppName + queryParams;
  return fetch(completeURL)
    .then((resp) => resp.json())
    .then((data) => {
   
      if (data.findItemsByKeywordsResponse[0].ack[0] === "Failure") {
        throw new Error(
          data.findItemsByKeywordsResponse[0].errorMessage[0].error[0].message[0]
        );
      } else {
        return data;
      }
    });
}

export default fetching;
