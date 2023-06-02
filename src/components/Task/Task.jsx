import { DeleteButton } from "../Button";
import Button from "../Button/Button";
import StatusIcon from "../StatusIcon/StatusIcon";
import styles from "./Task.module.css";

function Task({ task, changeTask, removeTask, onClick, className = "" }) {
  const { id, name, completed } = task;

  const toggleTaskState = () => {
    changeTask({ ...task, completed: !completed });
  };

  return (
    <div
      className={`${styles.task} ${styles.appear} ${className}`}
      onClick={() => onClick && onClick(id)}
      draggable
    >
      <Button onClick={toggleTaskState} className={styles.appear} ghost>
        <StatusIcon status={completed} className="font-md" />
      </Button>
      <p className={`${completed ? styles.done : ""} ${styles.taskText}`}>
        {name}
      </p>

      <DeleteButton
        onClick={() => removeTask(id)}
        className={completed ? "" : "hide"}
        label={`Remove ${name} from your tasks`}
      />
    </div>
  );
}

export default Task;
