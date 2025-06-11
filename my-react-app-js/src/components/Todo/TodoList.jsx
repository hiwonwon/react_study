import { useContext } from "react";
import TodoItem from "./TodoItem";
import { todoContext } from "./TodoComponentMain";

export function TodoList({}) {
  // console.log("투두리스트", todoList);
  const { todoList } = useContext(todoContext);
  console.log("todoList", todoList);
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
        {todoList.map(({ id, inputValue, inputColor }, idx) => {
          return <TodoItem todoId={id} text={inputValue} color={inputColor} />;
        })}
      </ul>
    </div>
  );
}
