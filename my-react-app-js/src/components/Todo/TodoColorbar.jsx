export function TodoColorbar({ setInputColor }) {
  return (
    <div>
      <div
        style={{
          borderRadius: "50%",
          backgroundColor: "#C8FFFF",
          width: "30px",
          height: 30,
          display: "flex",
          marginLeft: 5,
          float: "left",
          justifyContent: "center",
        }}
        onClick={(e) => {
          setInputColor(e.target.style.backgroundColor);
        }}
      ></div>
      <div
        style={{
          borderRadius: "50%",
          background: "#87CEFA",
          width: "30px",
          height: 30,
          display: "flex",
          float: "left",
          marginLeft: 5,
          justifyContent: "center",
        }}
        onClick={(e) => {
          setInputColor(e.target.style.backgroundColor);
        }}
      ></div>
      <div
        style={{
          borderRadius: "50%",
          background: "#64AAFF",
          width: "30px",
          height: 30,
          display: "flex",
          float: "left",
          marginLeft: 5,
          justifyContent: "center",
        }}
        onClick={(e) => {
          setInputColor(e.target.style.backgroundColor);
        }}
      ></div>
      <div
        style={{
          borderRadius: "50%",
          background: "#1E90FF",
          width: "30px",
          height: 30,
          display: "flex",
          float: "left",
          marginLeft: 5,
          justifyContent: "center",
        }}
        onClick={(e) => {
          setInputColor(e.target.style.backgroundColor);
        }}
      ></div>
    </div>
  );
}
