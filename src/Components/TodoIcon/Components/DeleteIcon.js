import React from "react";
// import { FaTimes } from "react-icons/fa";
import { TodoIcon } from "..";

function DeleteIcon({ props, onDelete }) {
  return <TodoIcon type="delete" color="gray" onClick={onDelete} />;
}

export { DeleteIcon };
