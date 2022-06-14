
import React, {useState} from "react";
import { v4 as uuid } from "uuid";
import {newItemDataArray} from "./ShoppingList"

function ItemForm(props) {

const[name, setName]  = useState([])
const [category, setCategory] = useState([])



  return (
    <form className="NewItem" onSubmit={() =>  props.onItemFormSubmit({newItemDataArray})}>
      <label>
        Name:
        <input onSubmit={props.onItemFormSubmit} type="text" name="name"/>
      </label>

      <label>
        Category:
        <select name="category" value={props.produce}>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </label>

      <button type="submit">Add to List</button>
    </form>
  );
}

export default ItemForm;
