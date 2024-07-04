import React, { useState } from 'react';

const items = [
  { name: 'Yogurt', category: 'Dairy' },
  { name: 'Pomegranate', category: 'Produce' },
  { name: 'Lettuce', category: 'Produce' },
  { name: 'String Cheese', category: 'Dairy' },
  { name: 'Cookies', category: 'Dessert' },
];

const ShoppingList = () => {
  const [filter, setFilter] = useState('');

  const handleFilterChange = (event) => {
    setFilter(event.target.value);
  };

  const filteredItems = filter
    ? items.filter((item) => item.category === filter)
    : items;

  return (
    <div>
      <select onChange={handleFilterChange} role="combobox">
        <option value="">All</option>
        <option value="Dairy">Dairy</option>
        <option value="Produce">Produce</option>
        <option value="Dessert">Dessert</option>
      </select>
      <ul className="Items">
        {filteredItems.map((item, index) => (
          <li key={index} className={item.inCart ? 'in-cart' : ''}>
            <span>{item.name}</span>
            <span>{item.category}</span>
            <button>Add to Cart</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ShoppingList;
