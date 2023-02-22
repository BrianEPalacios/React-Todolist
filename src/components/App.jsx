import React, {useState} from "react";

function App() {

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

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
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
          {items.map(item => <li>{item}</li>)}
        </ul>
      </div>
    </div>
  );
}

export default App;
