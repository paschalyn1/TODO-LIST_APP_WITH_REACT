import "./styles.css";

function Todo(props) {
  return (
    <>
      <span>{props.key}</span>
      <li className="li">
        <span>{props.item}</span>
      </li>
      <button onClick={props.deleteItem}>Delete</button>
    </>
  );
}
export default Todo;
