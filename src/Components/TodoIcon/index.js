import React from "react";
import { ReactComponent as CheckSvg } from "./images/check.svg";
import { ReactComponent as DeleteSvg } from "./images/delete.svg";
import "./style.css";

const iconTypes = {
  check: (color) => <CheckSvg className="Icon-svg" fill={color} />,
  delete: (color) => <DeleteSvg className="Icon-svg" fill={color} />,
};

function TodoIcon({ type, color, onClick }) {
  return (
    <span className={`Icon-container Icon-container-${type}`} onClick={onClick}>
      {iconTypes[type](color)}
    </span>
  );
}

export { TodoIcon };
