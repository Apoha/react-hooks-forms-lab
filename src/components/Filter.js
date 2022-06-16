import React from "react";
import ShoppingList from "./ShoppingList";

function Filter({ onCategoryChange, search, onSearchChange}) {

  


  return (
    <div className="Filter">
      <input type="text" name="search" onChange={onSearchChange} value={search}  placeholder="Search..." />
      <select name="filter" onChange={onCategoryChange}>
        <option value="All">Filter by category</option>
        <option value="Produce">Produce</option>
        <option value="Dairy">Dairy</option>
        <option value="Dessert">Dessert</option>
      </select>
    </div>
  );
}


export default Filter;