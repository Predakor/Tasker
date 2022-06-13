import { useState } from "react";
import Card from "../card/Card";
import TaskColumn from "../taskColumn/TaskColumn";
import styles from "./TaskGroup.module.css";

function TaskGroup({ list }) {
  const [tasks, setTasks] = useState(list.tasks);

  return (
    <main className={styles.container}>
      <Card className={styles.title}>
        <h2>{list.name}</h2>
      </Card>

      <TaskColumn tasks={tasks} setTasks={setTasks} />
    </main>
  );
}

export default TaskGroup;
