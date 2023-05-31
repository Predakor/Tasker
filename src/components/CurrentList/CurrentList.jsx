import { useState } from "react";
import { TaskDetails } from "../Task";
import TaskColumn from "../TaskColumn/TaskColumn";
import Card from "../card/Card";
import styles from "./CurrentList.module.css";

function TaskGroup({ list, addTask, editTask }) {
  const { tasks, name } = list;
  const [selectedTaskId, setSelectedTaskId] = useState();

  const selectedTask = tasks.find((task) => task.id === selectedTaskId);

  const selectTaskHandler = (id) => {
    setSelectedTaskId(id);
  };

  return (
    <main className={styles.container}>
      <Card className={styles.title}>
        <h2>{name}</h2>
      </Card>

      <TaskColumn
        tasks={tasks}
        editTask={editTask}
        addTask={addTask}
        selectTaskHandler={selectTaskHandler}
      />

      <TaskDetails
        className={styles.container}
        task={selectedTask}
        editTask={editTask}
      />
    </main>
  );
}

export default TaskGroup;
