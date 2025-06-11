import { useContext, useRef, useState } from "react";
import { todoContext } from "./TodoComponentMain";

export default function TodoItem({ todoId, text, color }) {
  const [modifyText, setModifyText] = useState(text);
  const { modifyTodo, delTodo } = useContext(todoContext);
  const [isEditmode, setEditMode] = useState(false);

  const onClickEdit = () => {
    if (!isEditmode) {
      setEditMode(true);
    } else {
      console.log("modifyText", modifyText);
      modifyTodo(todoId, { inputValue: modifyText });
      setEditMode(false);
    }
  };

  return (
    <li
      style={{
        display: "block",
        padding: 10,
        backgroundColor: color,
        borderRadius: 5,
        position: "relative",
      }}
    >
      {/* <input
        style={{
          backgroundColor: "transparent",
          border: "unset",
        }}
        value={modifyValue}
        onChange={(e) => {
          setModifyValue(e.target.value);
        }}
      ></input> */}

      {isEditmode ? (
        <input
          value={modifyText}
          onChange={(e) => {
            setModifyText(e.target.value);
          }}
        />
      ) : (
        <span>{text}</span>
      )}
      <span style={{ position: "absolute", right: 10 }}>
        <button onClick={() => onClickEdit()} style={{ border: "none" }}>
          수정
        </button>
        <button
          onClick={() => delTodo(todoId)}
          style={{ border: "none", marginLeft: 10 }}
        >
          삭제
        </button>
      </span>
    </li>
  );
}
