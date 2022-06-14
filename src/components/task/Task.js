import { useState } from "react";
import { FiCircle, FiCheckCircle } from "react-icons/fi";
import styles from "./Task.module.css";

function Task({ data, onClick, className }) {
  const [taskState, setTaskState] = useState(data.isDone);
  const { id, name, isDone } = data;

  function toggleTaskState() {
    data.isDone = !taskState;
    setTaskState(!taskState);
  }

  return (
    <div
      className={`${styles.task} ${className ? className : ""}`}
      onClick={() => onClick && onClick(id)}>
      {isDone ? (
        <FiCheckCircle className={styles.appear} onClick={toggleTaskState} />
      ) : (
        <FiCircle onClick={toggleTaskState} />
      )}
      <p className={isDone ? styles.done : ""}>{name}</p>
    </div>
  );
}
export default Task;
