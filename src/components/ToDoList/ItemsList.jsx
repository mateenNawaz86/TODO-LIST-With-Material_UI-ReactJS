import React, { useState } from "react";
import DeleteIcon from "@material-ui/icons/Delete";
import "./ItemsList.css";

const ItemsList = (props) => {
  const [deteleItem, setDeleteItem] = useState(false);

  const deleteHandler = () => {
    setDeleteItem(true);
  };

  return (
    <div className="items-style">
      <span onClick={deleteHandler}>
        <DeleteIcon className="delete_btn" />
      </span>
      <li style={{ textDecoration: deteleItem ? "line-through" : "none" }}>
        {props.items}
      </li>
    </div>
  );
};

export default ItemsList;
