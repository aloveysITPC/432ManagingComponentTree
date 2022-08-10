import React, { useState } from "react";

function ToDoItem(props) {
  //  get props from app.jsx  pass a function onChecked triggered - passed to child
  return (
    <div
      onClick={() => {
        props.onChecked(props.id);
      }}
    >
      <li>{props.text}</li>
    </div>
  );
}

export default ToDoItem;
