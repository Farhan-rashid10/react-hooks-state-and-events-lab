import React, { useState } from "react";
import Item from "./Item";

function ShoppingList({ items }) {
  const [filteredItems, setfilteredItems] = useState("All");

  function handleEvent(event) {
    setfilteredItems(event.target.value);
  }

  const itemsFiltered = items.filter((item) => {
    if (filteredItems === "All") return true;
    return item.category === filteredItems;
  });

  return (
    <div className="ShoppingList">
      <div className="Filter">
        <select name="filter" onChange={handleEvent}>
          <option value="All">Filter by category</option>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </div>
      <ul className="Items">
        {itemsFiltered.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;