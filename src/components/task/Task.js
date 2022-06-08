import { useState } from "react";
import { FiCircle, FiCheckCircle, FiDelete } from "react-icons/fi";
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

      {isDone ? (
        <FiCheckCircle className={`${styles.icon} ${styles.appear}`} onClick={toggleTaskState} />
      ) : (
        <FiCircle className={styles.icon} onClick={toggleTaskState} />
      )}
    </div>
  );
}
export default Task;
