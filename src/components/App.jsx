import React, {useState} from "react";
import ToDoItem from "./ToDoItem";
import Header from "./Header";

function App(props) {

  const [itemText, setItemText] = useState("");
  const [items, setItems] = useState([]);

  function handleChange(event){
    const newItemText = event.target.value;
    setItemText(newItemText);
  }

  function addItem(event){
    const newItem = itemText;
    setItems(prevValue => [...prevValue, newItem]);
    setItemText("");
  }

  function deleteItem(id){
    console.log(id);
    setItems(prevItems => {
      return prevItems.filter((item, index) => {
        return index !== id;
      })
    });
  }

  return (
    <div className="container">
      <Header />
      <div className="form">
        <input
        onChange={handleChange}
        type="text"
        value={itemText}
        />
        <button onClick={addItem}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {items.map((item, index) => <ToDoItem
            key={index}
            id={index}
            chore={item}
            onCheck={deleteItem}
            />)}
        </ul>
      </div>
    </div>
  );
}

export default App;
