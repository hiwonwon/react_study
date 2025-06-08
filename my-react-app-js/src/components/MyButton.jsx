// export default function MyButton(props) {
//   console.log(props);
//   return (
//     <div>
//       <a href=""></a>
//       <button
//         title={props.title}
//         style={{ backgroundColor: props.color }}
//         onClick={() => (window.location.href = props.clickUrl)}
//       >
//         {props.title}
//       </button>

//       <button
//         onClick={() => {
//           window.open("url", "_blank");
//         }}
//       ></button>
//     </div>
//   );
// }
export default function MyButton({ title, color, clickUrl }) {
  //title,color,clickUrl = props

  return (
    <a
      href={clickUrl}
      target="_blank"
      style={{
        padding: 10,
        borderRadius: 5,
        textDecoration: "none",
        color: "white",
        backgroundColor: color,
      }}
    ></a>
  );
}
