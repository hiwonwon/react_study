import React, { useRef, useState } from "react";
export default function InputRefComponent() {
  const inputRef = useRef();
  const [userInput, setUserInput] = useState("");

  const focustInput = () => {
    inputRef.current.focus();
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-evenly",
      }}
    >
      <div>
        <h1> Ref Input</h1>
        <input type="text" ref={inputRef}>
          {" "}
        </input>
      </div>
    </div>
  );
}
