import Card from "../card/Card";
import Task from "../task/Task";

import styles from "./taskColumn.module.css";

function TaskColumn({ tasks, setSelectedTask, children }) {
  return (
    <Card className={styles.column}>
      <div className={styles.taskList}>
        {tasks.map((task) => (
          <Task task={task} onClick={setSelectedTask} key={task.id} />
        ))}
      </div>
      {children}
    </Card>
  );
}
export default TaskColumn;
