import { useContext } from "react";
import TodoItem from "./TodoItem";
import { useTodo } from "./TodoComponentMain";

export function TodoList({}) {
  // console.log("투두리스트", todoList);
  const ctx = useContext(useTodo);
  return (
    <div>
      <ul
        style={{
          listStyleType: "none",
          marginTop: 60,
          width: "100%",
          minWidth: 300,
        }}
      >
        {ctx.todoList.map(({ inputValue, inputColor }, idx) => {
          return <TodoItem text={inputValue} color={inputColor} idx={idx} />;
        })}
      </ul>
    </div>
  );
}
