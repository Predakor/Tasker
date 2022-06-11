import { useState } from "react";
import Card from "../card/Card";
import Task from "../task/Task";
import Title from "../title/Title.js";
import InputAdd from "../inputAdd/InputAdd";
import styles from "./taskColumn.module.css";

function TaskColumn({ data }) {
  const { name } = data;
  const [tasks, setTasks] = useState(data.tasks);

  function setTitle(name) {
    data.name = name;
  }

  function addTask(taskName) {
    const newID = tasks.length > 0 ? tasks.at(-1).id + 1 : 0;
    const task = {
      id: newID,
      name: taskName,
      descr: "description opional",
      isDone: false,
    };
    setTasks([...data.tasks, task]);
    data.tasks.push(task);
  }
  return (
    <Card className={styles.taskList}>
      <Title title={name} changeTitle={setTitle} />
      <div className={styles.taskList}>
        {tasks.map((task) => (
          <Task data={task} key={task.id} />
        ))}
      </div>

      <InputAdd placeholder={"add task"} addTask={addTask} />
    </Card>
  );
}
export default TaskColumn;
