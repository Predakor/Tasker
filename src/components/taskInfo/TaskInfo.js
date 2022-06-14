import Card from "../card/Card";
import Task from "../task/Task";
import InputAdd from "../inputAdd/InputAdd";
import { FiEdit, FiAlertCircle } from "react-icons/fi";
import styles from "./TaskInfo.module.css";

function TaskInfo({ task }) {
  if (!task) {
    return (
      <Card className={styles.container}>
        <h2>Select task to view details</h2>
      </Card>
    );
  }

  const dummyData = [
    { name: "open door", isDone: false },
    { name: "go outside", isDone: false },
    { name: "touch grass", isDone: false },
    { name: "open door", isDone: false },
    { name: "go outside", isDone: false },
    { name: "touch grass", isDone: false },
    { name: "open door", isDone: false },
    { name: "go outside", isDone: false },
  ];
  return (
    <Card className={styles.container}>
      <div className={styles.flexRow}>
        <Task data={task} className={styles.headerTask} />

        <button className={styles.button} onClick={() => console.warn("not implemented")}>
          <FiAlertCircle />
        </button>
        <button className={styles.button} onClick={() => console.warn("not implemented")}>
          <FiEdit />
        </button>
      </div>

      <div className={styles.subTasks}>
        <h3>Sub Tasks</h3>
        {dummyData.map((subTask) => (
          <Task data={subTask} />
        ))}
        <InputAdd onSubmit={() => console.warn("not implemented")} />
      </div>

      <form onSubmit={() => console.warn("not implemented")}>
        <label htmlFor="deadline">deadlinne </label>
        <input type="date" name="deadline" id="deadline" />
        <p>x days left</p>
      </form>

      <div
        className={styles.descr}
        contentEditable="true"
        aria-label="write note here it will be autosaved"
        placeholder="click me to add description"
      />
    </Card>
  );
}

export default TaskInfo;
