import Task from "../Task";
import Card from "../Card/Card";
import InputAdd from "../InputAdd/InputAdd";
import styles from "./TaskColumn.module.css";

function TaskColumn({
  tasks,
  selectTaskHandler,
  editTask,
  addTask,
  removeTask,
  className,
}) {
  return (
    <Card className={`${styles.column} ${className}`}>
      <div className={styles.taskList}>
        {tasks.map((task) => (
          <Task
            task={task}
            changeTask={editTask}
            removeTask={removeTask}
            onClick={selectTaskHandler}
            key={task.id}
          />
        ))}
      </div>
      <InputAdd placeholder={"add task"} onSubmit={addTask} />
    </Card>
  );
}
export default TaskColumn;
