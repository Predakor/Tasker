import { useState } from "react";
import styles from "./Task.module.css";

function Task({ data }) {
  const [taskState, setTaskState] = useState(data.isDone);
  const { name, descr, isDone } = data;

  function toggleTaskState() {
    data.isDone = !taskState;
    setTaskState(!taskState);
  }
  function showInfo() {
    console.log(descr, isDone);
  }

  return (
    <div className={styles.task}>
      <p onClick={showInfo} className={isDone ? styles.done : ""}>
        {name}
      </p>
      <div>
        <button onClick={toggleTaskState}>o</button>
        <button disabled={!isDone} onClick={toggleTaskState}>
          x
        </button>
      </div>
    </div>
  );
}
export default Task;
