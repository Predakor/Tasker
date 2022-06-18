import { useState } from "react";
import StatusIcon from "../StatusIcon/StatusIcon";
import styles from "./Task.module.css";

function Task({ data, onClick, className = "" }) {
  const [taskState, setTaskState] = useState(data.isDone);
  const { id, name, isDone } = data;

  function toggleTaskState() {
    data.isDone = !taskState;
    setTaskState(!taskState);
  }

  return (
    <div className={`${styles.task} ${className}`} onClick={() => onClick && onClick(id)}>
      <StatusIcon className={styles.appear} status={taskState} onClick={toggleTaskState} />
      <p className={isDone ? styles.done : ""}>{name}</p>
    </div>
  );
}
export default Task;
