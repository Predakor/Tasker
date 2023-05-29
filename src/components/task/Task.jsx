import StatusIcon from "../StatusIcon/StatusIcon";
import styles from "./Task.module.css";

function Task({ task, changeTask, onClick, className = "" }) {
  const { id, name, completed } = task;

  const toggleTaskState = () => {
    changeTask({ completed: !completed });
  };

  return (
    <div
      className={`${styles.task} ${className}`}
      onClick={() => onClick && onClick(id)}
    >
      <StatusIcon
        className={styles.appear}
        status={completed}
        onClick={toggleTaskState}
      />
      <p className={completed ? styles.done : ""}>{name}</p>
    </div>
  );
}

export default Task;
