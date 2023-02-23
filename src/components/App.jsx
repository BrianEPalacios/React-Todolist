import React, {useState} from "react";
import ToDoItem from "./ToDoItem";
import Header from "./Header";
import InputArea from "./InputArea";

function App(props) {

  const [items, setItems] = useState([]);

  function addItem(inputText){
    // inputText is being sent from onAdd from InputArea.jsx
    // inputText is whatever we wrote in the Add field
    // Now we update our list with all the previous values + the new inputText
    // That was in the Add field
    // items is updated with new item
    setItems(prevValue => [...prevValue, inputText]);
  }

  function deleteItem(id){
    // id is being sent from onCheck function in ToDoItem.jsx
    // we set the all the items to the previous items except for the one
    // that we clicked to delete
    setItems(prevItems => {
      return prevItems.filter((item, index) => {
        // returns all the items that don't have the id we sent
        return index !== id;
      })
    });
  }

  return (
    <div className="container">
      <Header />
      <InputArea
      // allows us to send the function addItem through props to InputArea.jsx
      onAdd={addItem}
      />
      <div>
        <ul>
        // creates a new list/ToDoItem for every entry
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
