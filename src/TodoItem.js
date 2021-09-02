import React from 'react'
import './index.css'
function TodoItem(props){
  const completedStyle = {
    fontStyle: "italic",
    color: "#cdcdcd",
    textDecoration: "line-through"
  }
  return(
    <div>
      <input type= "checkbox"  checked={props.item.completed} onChange={() => props.handleChange(props.item.id)} />
      <label style = {props.item.completed ? completedStyle : null}>{props.item.task}</label>
      <hr />
    </div>
  );
}

export default TodoItem;