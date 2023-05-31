import { TaskList } from "../Task";
import Card from "../card/Card";
import InputAdd from "../InputAdd/InputAdd";
import styles from "./TaskColumn.module.css";

function TaskColumn({ tasks, selectTaskHandler, editTask, addTask }) {
  return (
    <Card className={styles.column}>
      <div className={styles.taskList}>
        <TaskList
          tasks={tasks}
          editTask={editTask}
          setSelectedTask={selectTaskHandler}
          className={styles.container}
        />
      </div>
      <InputAdd placeholder={"add task"} onSubmit={addTask} />
    </Card>
  );
}
export default TaskColumn;
