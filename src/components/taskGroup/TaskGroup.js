import styles from "./TaskGroup.module.css";

function TaskGroup({ tasks, children }) {
  return (
    <main>
      <h2>Group Title</h2>
      <div className={styles.taskGroup}>{children}</div>
    </main>
  );
}

export default TaskGroup;
