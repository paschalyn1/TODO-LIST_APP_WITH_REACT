import "./styles.css";

function Todo(props) {
  return (
    <>
      <>{props.key}</>
      <li className="li">
        <span>{props.item}</span>
        {/* <span className="demo" style={{ color: "blue", fontSize: "15px" }}>
          ({props.time}
        </span> */}
      </li>
      <button onClick={props.deleteItem}>Delete</button>
    </>
  );
}
export default Todo;
