import { useEffect, useState } from "react";
import TodoInput from "./TodoInput";
import { TodoColorbar } from "./TodoColorbar";
import { TodoList } from "./TodoList";
import { SearchInput } from "./SearchInput";

export default function TodoComponent() {
  const [inputColor, setInputColor] = useState("white");
  const [todoList, setTodoList] = useState([]);
  const [inputValue, setInputValue] = useState("");

  //할 일 입력시
  const addTodo = () => {
    setTodoList([...todoList, { inputValue, inputColor }]);
    console.log(todoList);
    sessionStorage.setItem("todoList", JSON.stringify(todoList));
    setInputValue("");
  };

  //기존에 저장된 투두리스트 불려오기
  useEffect(() => {
    const saved = sessionStorage.getItem("todoList");
    const parsed = saved ? JSON.parse(saved) : [];
    setTodoList(parsed);
  }, []);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column", // 위아래 정렬
        alignItems: "center", // 가로 가운데 정렬
        marginTop: 200,
        maxWidth: 600,
        margin: "auto",
        minHeight: "100vh", // 화면 전체 높이 기준
      }}
    >
      <h1>Todo App</h1>
      <div
        style={{
          display: "flex",
          gap: "10px",
          width: "100%",
          marginBottom: "20px",
        }}
      >
        <TodoInput
          inputColor={inputColor}
          inputValue={inputValue}
          setInputValue={setInputValue}
          addTodo={addTodo}
        />
      </div>
      <h3>todo items</h3>
      <div style={{ float: "left", display: "flex" }}>
        <TodoColorbar setInputColor={setInputColor} />
      </div>
      <div style={{ display: "flex", gap: "10px", marginBottom: "20px" }}>
        <TodoList todoList={todoList} />
      </div>
      <h3>Todo Search</h3>
      <div
        style={{
          display: "flex",
          gap: "10px",
          width: "100%",
          marginBottom: "20px",
        }}
      >
        <SearchInput todoList={todoList} />
      </div>
    </div>
  );
}
