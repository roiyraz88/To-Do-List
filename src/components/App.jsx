import React, { useState } from "react";
import ToDoItem from "./ToDoItem";

function App() {
  const [newLi, setNewLi] = useState("");
  const [items, setItems] = useState([]);

  function handleChange(event) {
    const newValue = event.target.value;
    setNewLi(newValue);
  }

  function handleClick() {
    setItems((prevItems) => {
      return [...prevItems, newLi];
    });
    setNewLi("");
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input type="text" onChange={handleChange} value={newLi} />
        <button onClick={handleClick}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {items.map((item) => (
            <ToDoItem text = {item}/>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
