import React, { useState } from "react";
import ItemForm from "./ItemForm";
import Filter from "./Filter";
import Item from "./Item";
import { v4 as uuid } from "uuid";

function ShoppingList({ items, name, category, setItems }) {

  const [selectedCategory, setSelectedCategory] = useState("All");
  const [userSearchedItem, setUserSearchedItem] = useState('')  
  const [selectedItem, setSelectedItem] = useState("All")
  

//console.log(userSearchedItem)

  function handleCategoryChange(event) {
    setSelectedCategory(event.target.value);
  }

 function handleUserSearching(event){
    //console.log(event)
    setUserSearchedItem(event.target.value)
  }


function handleItemFormSubmit(event){

  console.log(event)
//event.preventDefault()
const newItem = {
  id: uuid(), // the `uuid` library can be used to generate a unique id
  name: event.name,
  category: event.category,
};

const newItemDataArray = [...items, newItem];

setItems(newItemDataArray);
}


const userSearchedItemsToDisplay = items.filter((item) => {
  if (userSearchedItem === "") return true;

  return item.name.toLowerCase().includes(userSearchedItem.toLowerCase())
});



  const itemsToDisplay = userSearchedItemsToDisplay.filter((item) => {
    if (selectedCategory === "All") return true;

    return item.category === selectedCategory;

  });


  




  

  return (
    <div className="ShoppingList">
      <ItemForm   selectedItem={selectedItem}  onItemFormSubmit={handleItemFormSubmit} />
      <Filter onCategoryChange={handleCategoryChange} userSearchedItem={userSearchedItem} onSearchChange={handleUserSearching} />
      <ul className="Items">
        {itemsToDisplay.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
