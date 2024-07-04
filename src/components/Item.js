import React, { useState } from "react";

function Item({ name, category }) {
  const [isCart, setisCart] = useState(false);

  function handleEvent() {
    setisCart((isCart) => !isCart);
  }

  return (
    <li className={isCart ? "in-cart" : ""}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className= {isCart ? "remove" : "add"} onClick={handleEvent}>
        {isCart ? "Remove From Cart" : "Add to Cart"}
      </button>
    </li>
  );
}

export default Item;