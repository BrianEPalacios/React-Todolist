import React, {useState} from "react";

function ToDoItem(props){

  const [isClick, setIsClick] = useState(false);

  function lineThroughItem(){
    // Returns the opposite of isClick
    // ex if isClick is false, it will return true
    setIsClick(prevValue => { return !prevValue});
  }
  return(
    <div>
      // onClick basically just checks if the item was clicked, True or False
      <li onClick={lineThroughItem}
      // if the Item is clicked, set textDecoration to line lineThrough
      // else do nothing or undo lineThrough Item
      style={{ textDecoration: isClick ? "line-through" : "none" }}>
      // props.chore is just an item in Items list, its in the toDo field
      {props.chore}
      // if isClick is true, we have a line lineThrough
      // that also renders a delete button
      // if you click the delete button, props.onCheck calls the deleteItem function
      // we send the id of the item being deleted to the delete function with props.id
      { isClick && <button onClick={() => {props.onCheck(props.id)}}>delete</button> }
      </li>

    </div>
  )
}

export default ToDoItem;
