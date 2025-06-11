import { createContext, useEffect, useState } from "react";
import TodoInput from "./TodoInput";
import { TodoColorbar } from "./TodoColorbar";
import { TodoList } from "./TodoList";
import { SearchInput } from "./SearchInput";

const useTodo = createContext(null);
export { useTodo };

export default function TodoComponent() {
  const [inputColor, setInputColor] = useState("white");
  const [todoList, setTodoList] = useState([]);
  const [inputValue, setInputValue] = useState("");

  //할 일 입력시
  const addTodo = () => {
    const newTodoList = [...todoList, { inputValue, inputColor }];
    setTodoList(newTodoList);
    console.log(todoList);
    sessionStorage.setItem("todoList", JSON.stringify(newTodoList));
    setInputValue("");
  };

  //삭제 함수
  const delTodo = (idx) => {
    const tmp = todoList.filter((todo, index) => {
      return index !== idx;
    });
    console.log("tmpIdx", idx);
    setTodoList(tmp);
    sessionStorage.setItem("todoList", JSON.stringify(tmp));
  };

  //수정 함수
  const modifyTodo = (idx, content) => {
    const modifiedTodo = todoList.map((todo, i) => {
      if (i === idx) {
        return {
          inputValue: content, // 새로운 내용으로 덮어쓰기
          inputColor: todo.inputColor, // 기존 색상 유지
        };
      } else {
        return todo; // 그대로 유지
      }
    });
    console.log(modifiedTodo);
    setTodoList(modifiedTodo);
    sessionStorage.setItem("todoList", JSON.stringify(modifiedTodo));
  };

  //기존에 저장된 투두리스트 불려오기
  useEffect(() => {
    const saved = sessionStorage.getItem("todoList");
    const parsed = saved ? JSON.parse(saved) : [];
    setTodoList(parsed);
  }, []);

  return (
    <useTodo.Provider
      value={{
        todoList: todoList,
        addTodo: addTodo,
        delTodo: delTodo,
        modifyTodo: modifyTodo,
      }}
    >
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
          />
        </div>
        <h3>todo items</h3>
        <div style={{ float: "left", display: "flex" }}>
          <TodoColorbar setInputColor={setInputColor} />
        </div>
        <div style={{ display: "flex", gap: "10px", marginBottom: "20px" }}>
          <TodoList />
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
          <SearchInput />
        </div>
      </div>
    </useTodo.Provider>
  );
}
