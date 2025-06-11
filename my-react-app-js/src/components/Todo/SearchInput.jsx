import { useContext, useState } from "react";
import { useTodo } from "./TodoComponentMain";

export function SearchInput({}) {
  const [searchInput, setSearchInput] = useState("");
  const [results, setResults] = useState([]);
  const ctx = useContext(useTodo);

  const search = () => {
    const tmp = ctx.todoList.filter((element) =>
      element.inputValue.includes(searchInput)
    );

    setResults(tmp);
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
        <ul
          style={{
            listStyleType: "none",
            marginTop: 60,
            width: "100%",
            minWidth: 300,
          }}
        >
          {results.map((result, idx) => (
            <li
              key={idx}
              style={{
                backgroundColor: result.inputColor,
                marginTop: 20,
                borderRadius: 3,
                minWidth: 300,
                minHeight: 40,
                textAlign: "center",
              }}
            >
              {result.inputValue}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
