import React, { useState } from "react";
import ItemForm from "./ItemForm";
import Filter from "./Filter";
import Item from "./Item";

function ShoppingList({ items }) {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [search,  setSearch] = useState("");
  const [itemsList, setItemList] = useState(items);

  function handleCategoryChange(event) {
    setSelectedCategory(event.target.value);
  }

  function SearchChange(event) {
    setSearch(event.target.value)
  }

  function handleAddForm(newItem) {
    const newList = [...items, newItem]
    setItemList(newList)
  }

  const itemsToDisplay = itemsList.filter((item) => {
    if (selectedCategory !== "All" && item.category !== selectedCategory) {
      return false;
    } else {
      return item.name.toLowerCase().includes(search.toLocaleLowerCase())
    }
  });


  return (
    <div className="ShoppingList">
      <ItemForm onItemFormSubmit={handleAddForm}/>
      <Filter onCategoryChange={handleCategoryChange} onSearchChange={SearchChange} />
      <ul className="Items">
        {itemsToDisplay.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;