import TodoCard from "./TodoCard";
import React from "react";

export default function TodoList(props) {
  const { todos } = props;
  return (
    <ul className="main">
      {todos.map((todo, todoId) => {
        return (
          <TodoCard {...props} key={todoId} todo={todo} id={todoId}>
            <p>{todo}</p>
          </TodoCard>
        );
      })}
    </ul>
  );
}
