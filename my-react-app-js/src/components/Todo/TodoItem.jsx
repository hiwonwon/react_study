import { useContext, useState } from "react";
import { useTodo } from "./TodoComponentMain";

export default function TodoItem({ text, color, idx }) {
  const [modifyValue, setModifyValue] = useState(text);
  const ctx = useContext(useTodo);
  return (
    <li
      style={{
        backgroundColor: color,
        marginTop: 20,
        borderRadius: 3,
        minWidth: 300,
        minHeight: 40,
        // textAlign: "center",
      }}
    >
      <input
        style={{
          backgroundColor: "transparent",
          border: "unset",
        }}
        value={modifyValue}
        onChange={(e) => {
          setModifyValue(e.target.value);
        }}
      ></input>

      {/* idx입니다{idx} */}
      <div style={{}}>
        <button
          onClick={() => ctx.modifyTodo(idx, modifyValue)}
          style={{ border: "none" }}
        >
          수정
        </button>
        <button
          onClick={() => ctx.delTodo(idx)}
          style={{ border: "none", marginLeft: 10 }}
        >
          삭제
        </button>
      </div>
    </li>
  );
}
