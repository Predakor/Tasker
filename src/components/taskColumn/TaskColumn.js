import Card from "../card/Card";
import Task from "../task/Task";
import InputAdd from "../inputAdd/InputAdd";
import styles from "./taskColumn.module.css";

function TaskColumn({ tasks, setTasks }) {
  function addTask(taskName) {
    const newID = tasks.length > 0 ? tasks.at(-1).id + 1 : 0;
    const task = {
      id: newID,
      name: taskName,
      descr: "description opional",
      isDone: false,
    };
    setTasks([...tasks, task]);
  }

  return (
    <Card className={styles.column}>
      <div className={styles.taskList}>
        {tasks.map((task) => (
          <Task data={task} key={task.id} />
        ))}
      </div>

      <InputAdd placeholder={"add task"} onSubmit={addTask} />
    </Card>
  );
}
export default TaskColumn;
