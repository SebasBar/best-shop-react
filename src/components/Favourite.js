import React from "react";

export default class Favourite extends React.Component {
  constructor(props) {
    super(props);
    console.log("this is favvvv ", props);
  }
  render() {
    console.log("Favourite RENDERS");

    return (
      <>
        <h1>hello world</h1>
      </>
    );
  }
}
