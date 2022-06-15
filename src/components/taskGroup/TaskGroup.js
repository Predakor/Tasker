import { useState } from "react";
import Card from "../card/Card";
import TaskColumn from "../taskColumn/TaskColumn";
import TaskInfo from "../taskInfo/TaskInfo";
import InputAdd from "../inputAdd/InputAdd";
import styles from "./TaskGroup.module.css";

function TaskGroup({ list, addTask }) {
  const [selectedTask, setSelectedTask] = useState();
  const { tasks } = list;

  function setActive(id) {
    for (const task of tasks) {
      if (task.id === id) return setSelectedTask(task);
    }
  }

  return (
    <main className={styles.container}>
      <Card className={styles.title}>
        <h2>{list.name}</h2>
      </Card>

      <TaskColumn className={styles.container} tasks={tasks} setSelectedTask={setActive}>
        <InputAdd placeholder={"add task"} onSubmit={addTask} />
      </TaskColumn>

      <TaskInfo className={styles.container} task={selectedTask} />
    </main>
  );
}

export default TaskGroup;
