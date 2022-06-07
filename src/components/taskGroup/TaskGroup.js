import Card from "../card/Card";
import styles from "./TaskGroup.module.css";

function TaskGroup({ tasks, children }) {
  return (
    <main className={styles.container}>
      <div>
        <Card className={styles.title}>
          <h2>Group Title</h2>
        </Card>
      </div>

      <section className={styles.columns}>{children}</section>
    </main>
  );
}

export default TaskGroup;
