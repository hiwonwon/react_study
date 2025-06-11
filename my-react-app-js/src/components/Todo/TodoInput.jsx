import React, { useContext } from "react";
import { useTodo } from "./TodoComponentMain";

export default function TodoInput({ inputColor, inputValue, setInputValue }) {
  const ctx = useContext(useTodo);
  return (
    <div
      style={{
        display: "flex",
        gap: "10px",
        marginBottom: "20px",
        flexGrow: 1,
      }}
    >
      <input
        style={{
          borderColor: "lightgrey",
          outline: "none",
          flexGrow: 1,
          backgroundColor: inputColor,
        }}
        value={inputValue}
        type="text"
        onChange={(e) => {
          setInputValue(e.target.value);
        }}
      ></input>
      <button
        style={{
          borderStyle: "none",
          borderRadius: "20%",
        }}
        onClick={ctx.addTodo}
      >
        입력
      </button>
    </div>
  );
}
