import Card from "../card/Card";
import Task from "../task/Task";
import InputAdd from "../inputAdd/InputAdd";
import { FiEdit, FiAlertCircle } from "react-icons/fi";
import styles from "./TaskInfo.module.css";

function warn() {
  console.warn("not implemented");
}

function TaskInfo({ task }) {
  if (!task) {
    return (
      <Card className={styles.container}>
        <h2>Select task to view details</h2>
      </Card>
    );
  }

  const { name, important, completeted, deadline, steps, descr } = task;
  return (
    <Card className={styles.container}>
      <div className={styles.flexRow}>
        <Task data={task} className={styles.headerTask} />

        <button className={styles.button} onClick={warn}>
          <FiAlertCircle />
        </button>
        <button className={styles.button} onClick={warn}>
          <FiEdit />
        </button>
      </div>

      <div className={styles.subTasks}>
        <h3>Steps</h3>
        {steps?.map((subTask) => (
          <Task data={subTask} />
        ))}
        <InputAdd onSubmit={warn} />
      </div>

      <form>
        <label htmlFor="deadline">deadline </label>
        <input type="date" id="deadline" defaultValue={deadline} onVolumeChange={warn} />
        <p>x days left</p>
      </form>

      <textarea
        className={styles.descr}
        aria-label="write note here it will be autosaved"
        placeholder="click me to add description"
        defaultValue={descr}
        onChange={warn}
      />
    </Card>
  );
}

export default TaskInfo;
