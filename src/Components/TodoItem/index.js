import { CompleteIcon } from "../TodoIcon/Components/CompleteIcon.js";
import { DeleteIcon } from "../TodoIcon/Components/DeleteIcon.js";
import "./style.css";

function TodoItem(props) {
  return (
    <li className="TodoItem">
      <CompleteIcon completed={props.completed} onComplete={props.onComplete} />
      <p className={`TodoItem-p ${props.completed && "TodoItem-p--complete"}`}>
        {props.text}
      </p>
      <DeleteIcon props={props.onDelete} onDelete={props.onDelete} />
    </li>
  );
}

export { TodoItem };
