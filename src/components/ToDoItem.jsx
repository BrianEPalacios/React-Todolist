import React, {useState} from "react";

function ToDoItem(props){

  const [isClick, setIsClick] = useState(false);

  function lineThroughItem(){
    setIsClick(prevValue => { return !prevValue});
  }
  return(
    <div>
      <li onClick={lineThroughItem}
      style={{ textDecoration: isClick ? "line-through" : "none" }}>
      {props.chore}
      { isClick && <button onClick={() => {props.onCheck(props.id)}}>delete</button> }
      </li>

    </div>
  )
}

export default ToDoItem;


// onClick={() => {props.onCheck(props.id)}}
// onClick={props.onCheck(props.id)}
