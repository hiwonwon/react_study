import { useState } from "react";

export function SearchInput({ todoList }) {
  const [searchInput, setSearchInput] = useState("");
  const [result, setResult] = useState("");
  const [color, setColor] = useState("");

  const search = () => {
    let check = true;
    todoList.forEach((element) => {
      if (element.inputValue === searchInput) {
        setResult(element.inputValue);
        setColor(element.inputColor);
        check = false;
      }
    });
    if (check === true) {
      alert("해당 할 일이 없습니다");
    }
  };

  return (
    <div
      style={{
        display: "flex",
        gap: "10px",
        marginBottom: "20px",
        flexGrow: 1,
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <div style={{ flexDirection: "row" }}>
        <input
          style={{ flexGrow: 1 }}
          value={searchInput}
          onChange={(e) => {
            setSearchInput(e.target.value);
          }}
        ></input>
        <button style={{ border: "none", borderRadius: 10 }} onClick={search}>
          검색
        </button>
      </div>

      <div style={{ paddingTop: 60, alignItems: "center" }}>
        <p style={{ backgroundColor: color, width: "100%", minWidth: 300 }}>
          {result}
        </p>
      </div>
    </div>
  );
}
