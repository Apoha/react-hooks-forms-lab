
import React, {useState} from "react";
import { v4 as uuid } from "uuid";


function ItemForm(props) {

const[name, setName]  = useState("")
const [category, setCategory] = useState("")


function handleOnchangeName(event){

  setName(event.target.value)
}


function handleOnchangeCat(event){
  setCategory(event.target.value)
}

  return (
    <form className="NewItem" onSubmit={(e) => { e.preventDefault()
      const id = uuid()
       props.onItemFormSubmit({name, category, id})
       }} >
      <label>
        Name:
        <input onSubmit={props.onItemFormSubmit} onChange={handleOnchangeName} type="text" name="name" value= {name}/>
      </label>

      <label>
        Category:
      <select name="category" onChange={handleOnchangeCat} value={category}>
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
