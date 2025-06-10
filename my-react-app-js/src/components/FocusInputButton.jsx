import React, { useRef } from "react";
export default function FocusInputButton() {
  const inputRef = useRef();

  const focustInput = () => {
    inputRef.current.focus();
  };

  return (
    <div>
      <button onClick={focustInput}> 입력 </button>
      <div style={{ height: 2000 }}></div>

      <input ref={inputRef} type="text" />

      <div style={{ height: 2000 }}></div>
    </div>
  );
}
