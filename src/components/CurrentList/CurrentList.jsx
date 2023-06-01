import { useState } from "react";
import Card from "../Card/Card";
import { TaskDetails } from "../Task";
import TaskColumn from "../TaskColumn/TaskColumn";
import styles from "./CurrentList.module.css";

function TaskGroup({ list, addTask, editTask, removeTask }) {
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
        removeTask={removeTask}
        selectTaskHandler={selectTaskHandler}
        className={styles.column}
      />

      <TaskDetails
        className={styles.column}
        task={selectedTask}
        editTask={editTask}
      />
    </main>
  );
}

export default TaskGroup;
