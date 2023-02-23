import React, { useState } from "react";

function InputArea(props){

  const [itemText, setItemText] = useState("");

  function handleChange(event){
    // newItemText is being set to what is written in the input area
    const newItemText = event.target.value;
    // We are now setting the itemText to newItem text
    setItemText(newItemText);
  }

  return(
    <div className="form">
    {/* calls the handleChange function */}
      <input
      onChange={handleChange}
      type="text"
      value={itemText}
      />
      {/* when the button is pressed onClick calls a function.  */}
      {/*That function then calls the addItem function in App.jsx which adds  */}
      {/*the item to the list items in App.jsx  */}
      {/*then we setItem text to an empty string to clear the Add field  */}

      {/* sending the new item to add via itemText which will be received */}
      {/* in addItem(inputText) function */}
      <button
        onClick={ () => {
        props.onAdd(itemText);
        setItemText("");
      }}>
        <span>Add</span>
      </button>
    </div>
  );
}

export default InputArea;
