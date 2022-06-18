import { useState } from "react";
import Card from "../card/Card";
import TaskColumn from "../taskColumn/TaskColumn";
import TaskInfo from "../taskInfo/TaskInfo";
import InputAdd from "../inputAdd/InputAdd";
import styles from "./TaskGroup.module.css";

function TaskGroup({ list, addTask, editTask }) {
  const [active, setActive] = useState();
  const { tasks } = list;
  function setActiveTask(id) {
    for (let i in tasks) {
      if (tasks[i].id === id) return setActive(i);
    }
  }

  return (
    <main className={styles.container}>
      <Card className={styles.title}>
        <h2>{list.name}</h2>
      </Card>

      <TaskColumn
        className={styles.container}
        tasks={tasks}
        setSelectedTask={setActiveTask}
        editTask={editTask}>
        <InputAdd placeholder={"add task"} onSubmit={addTask} />
      </TaskColumn>

      <TaskInfo className={styles.container} task={tasks[active]} editTask={editTask} />
    </main>
  );
}

export default TaskGroup;
