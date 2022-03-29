import { useEffect, useRef } from "react";
import "./styles.css";

function useKey(key, cb) {
  const callbackRef = useRef(cb);

  useEffect(() => {
    callbackRef.current = cb;
  });
  useEffect(() => {
    function handle(event) {
      if (event.code == "Enter") {
        callbackRef.current(event);
      }
    }
    document.addEventListener("keypress", handle);
    return () => document.removeEventListener("keypress", handle);
  }, [key]);
}
function Todoform() {
  function handleEnter() {
    // console.log("enter key is press")
  }

  useKey("Enter", handleEnter);
  return <>{/* <p id="demo"></p> */}</>;
}

export default Todoform;
