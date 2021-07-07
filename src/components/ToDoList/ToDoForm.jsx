import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import AddIcon from "@material-ui/icons/Add";
import ItemsList from "./ItemsList";
import "./ToDoForm.css";

const ToDoForm = () => {
  const [inputValues, setInputValues] = useState();
  const [enteredItems, setEnteredItems] = useState([]);

  const inpChangeHandler = (event) => {
    setInputValues(event.target.value);
  };

  const submitHandler = (event) => {
    if (inputValues.trim().length > 0) {
      setEnteredItems((prevItems) => {
        return [...prevItems, inputValues];
      });
      setInputValues("");
    }
  };

  return (
    <React.Fragment>
      <div className="main-div">
        <div className="heading">
          <h1>To do list</h1>
        </div>

        <div className="input-area">
          <input
            type="text"
            placeholder="Add Items"
            onChange={inpChangeHandler}
            value={inputValues}
          />
          <Button className="add_btn" onClick={submitHandler}>
            <AddIcon />
          </Button>
        </div>

        <div className="list-area">
          <ul>
            {enteredItems.map((inputItems, index) => {
              return <ItemsList items={inputItems} key={index} />;
            })}
          </ul>
        </div>

        <p id="caption">Mirani❤️</p>
      </div>
    </React.Fragment>
  );
};

export default ToDoForm;
