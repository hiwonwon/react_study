export function TodoList({ todoList }) {
  //console.log("투두리스트", todoList);
  return (
    <div>
      <ul
        style={{
          listStyleType: "none",
          marginTop: 60,
          width: "100%",
          minWidth: 300,
        }}
      >
        {todoList.map((todo, idx) => (
          <li
            key={idx}
            style={{
              backgroundColor: todo.inputColor,
              marginTop: 20,
              borderRadius: 3,
              minWidth: 300,
            }}
          >
            {todo.inputValue}
          </li>
        ))}
      </ul>
    </div>
  );
}
