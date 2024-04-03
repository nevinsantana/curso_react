import React from "react";
import "./style.css";
import { TodoContext } from "../TodoContext";

function TodoCounter() {
  const { totalTodos, completedTodos, todosAllCompleted } = React.useContext(TodoContext);

  const todoCounterText = !todosAllCompleted ? (
    <>
      Has completado <span>{completedTodos}</span> de <span>{totalTodos}</span> TODOs
    </>
  ) : (
    <>Felicidades! Haz completado los TODO's! ☜(⌒▽⌒)☞</>
  );
  return <h1 className="TodoCounter">{todoCounterText}</h1>;
}

export { TodoCounter };
