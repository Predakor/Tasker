import { useEffect, useState } from "react";
import Card from "../card/Card";
import TaskColumn from "../taskColumn/TaskColumn";
import TaskInfo from "../taskInfo/TaskInfo";
import styles from "./TaskGroup.module.css";

function TaskGroup({ list }) {
  const [tasks, setTasks] = useState(list.tasks);
  const [selectedTask, setSelectedTask] = useState();

  useEffect(() => {
    setTasks(list.tasks);
  }, [list]);

  function setActive(id) {
    tasks.forEach((task) => {
      if (task.id === id) {
        setSelectedTask(task);
        return;
      }
    });
  }
  return (
    <main className={styles.container}>
      <Card className={styles.title}>
        <h2>{list.name}</h2>
      </Card>

      <TaskColumn
        className={styles.container}
        tasks={tasks}
        setTasks={setTasks}
        setSelectedTask={setActive}
      />
      <TaskInfo className={styles.container} task={selectedTask} />
    </main>
  );
}

export default TaskGroup;
