import { createContext, useEffect, useState, useContext } from "react";
import TodoInput from "./TodoInput";
import { TodoColorbar } from "./TodoColorbar";
import { TodoList } from "./TodoList";
import { SearchInput } from "./SearchInput";
import { uid } from "uid";
import React from "react";
import { ColorPicker } from "antd";

const todoContext = createContext(null);
export { todoContext };

function useTodo() {
  return useContext(todoContext);
}

export default function TodoComponent() {
  const [inputColor, setInputColor] = useState("white");
  const [todoList, setTodoList] = useState([]);
  const [inputValue, setInputValue] = useState("");

  //할 일 입력시
  const addTodo = () => {
    const newTodoList = [...todoList, { id: uid(), inputValue, inputColor }];
    setTodoList(newTodoList);
    sessionStorage.setItem("todoList", JSON.stringify(newTodoList));
    setInputValue("");
  };

  //삭제 함수
  const delTodo = (todoId) => {
    const tmp = todoList.filter((todo, index) => {
      return todoId !== todo.id;
    });
    console.log("tmpIdx", todoId);
    setTodoList(tmp);
    sessionStorage.setItem("todoList", JSON.stringify(tmp));
  };

  //수정 함수
  const modifyTodo = (todoId, content) => {
    console.log("수정");
    const modifiedTodo = todoList.map((todo, i) => {
      if (todoId === todo.id) {
        return {
          ...todo,
          ...content,
          id: todo.id,
        };
      } else {
        return todo; // 그대로 유지
      }
    });
    console.log("modifiedTodo", modifiedTodo);
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
    <todoContext.Provider
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
      <div style={{ marginTop: "50px" }}>
        <ColorPicker defaultValue="#1677ff" />
      </div>
    </todoContext.Provider>
  );
}
