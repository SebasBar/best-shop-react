import React from "react";

function DropDownMenu(props) {
  const maxItemsPerPage = props.itemsToDisplay;
  let itemPerPage = Array.from(Array(maxItemsPerPage + 1).keys());
  itemPerPage.shift();

  return (
    <p>
      <label>Products per page </label>
      <select id="myList">
        {itemPerPage.map((item) => (
          <option value={item}>{item}</option>
        ))}
      </select>
    </p>
  );
}

export default DropDownMenu;
