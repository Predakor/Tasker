import { useState } from "react";
import Card from "../card/Card";
import InputAdd from "../inputAdd/InputAdd";
import TaskColumn from "../taskColumn/TaskColumn";
import TaskDetails from "../taskInfo/TaskDetails";
import styles from "./TaskGroup.module.css";

function TaskGroup({ list, addTask, editTask }) {
  const { tasks, name } = list;
  const [selectedTask, setSelectedTask] = useState();

  const selectTaskHandler = (id) => {
    const selectedTask = tasks.find((task) => task.id === id);
    if (selectedTask) {
      setSelectedTask(selectedTask);
    }
  };

  return (
    <main className={styles.container}>
      <Card className={styles.title}>
        <h2>{name}</h2>
      </Card>

      <TaskColumn
        className={styles.container}
        tasks={tasks}
        setSelectedTask={selectTaskHandler}
        editTask={editTask}
      >
        <InputAdd placeholder={"add task"} onSubmit={addTask} />
      </TaskColumn>

      <TaskDetails
        className={styles.container}
        task={selectedTask}
        editTask={editTask}
      />
    </main>
  );
}

export default TaskGroup;
