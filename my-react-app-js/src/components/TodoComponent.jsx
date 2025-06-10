import { useState } from "react";

export default function TodoComponent() {
  const [inputColor, setInputColor] = useState("white");
  const [todoList, setTodoList] = useState([]);
  const [inputValue, setInputValue] = useState("");

  //할 일 입력시
  const addTodo = () => {
    setTodoList([...todoList, [inputValue, inputColor]]);
    setInputValue("");
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column", // 위아래 정렬
        alignItems: "center", // 가로 가운데 정렬
        marginTop: 100,
        minHeight: "100vh", // 화면 전체 높이 기준
      }}
    >
      <div
        style={{
          display: "flex",
          gap: "10px",
          marginBottom: "20px",
        }}
      >
        <input
          style={{
            borderColor: "lightgrey",
            outline: "none",
            backgroundColor: inputColor,
          }}
          value={inputValue}
          type="text"
          onChange={(e) => {
            setInputValue(e.target.value);
          }}
        ></input>
        <button onClick={addTodo}>입력</button>
      </div>
      <div style={{ display: "flex", gap: "10px", marginBottom: "20px" }}>
        <button
          style={{
            borderRadius: "50%",
            backgroundColor: "#B9E2FA",
            width: "30px",
            height: 30,
            display: "flex",
            justifyContent: "center",
          }}
          onClick={(e) => {
            console.log(e.target.style.backgroundColor);
            setInputColor(e.target.style.backgroundColor);
          }}
        ></button>
        <button
          style={{
            borderRadius: "50%",
            background: "#1E90FF",
            width: "30px",
            height: 30,
            display: "flex",
            justifyContent: "center",
          }}
          onClick={(e) => {
            console.log(e.target.style.backgroundColor);
            setInputColor(e.target.style.backgroundColor);
          }}
        ></button>
        <button
          style={{
            borderRadius: "50%",
            background: "blue",
            width: "30px",
            height: 30,
            display: "flex",
            justifyContent: "center",
          }}
          onClick={(e) => {
            console.log(e.target.style.backgroundColor);
            setInputColor(e.target.style.backgroundColor);
          }}
        ></button>
        <button
          style={{
            borderRadius: "50%",
            background: "navy",
            width: "30px",
            height: 30,
            display: "flex",
            justifyContent: "center",
          }}
          onClick={(e) => {
            console.log(e.target.style.backgroundColor);
            setInputColor(e.target.style.backgroundColor);
          }}
        ></button>
      </div>
      <ul
        style={{
          listStyleType: "none",
          marginTop: 60,
        }}
      >
        {todoList.map((todo) => (
          <li style={{ backgroundColor: todo[1], marginTop: 20 }}>{todo[0]}</li>
        ))}
      </ul>
    </div>
  );
}
