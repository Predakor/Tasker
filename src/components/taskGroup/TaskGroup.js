import Card from "../card/Card";
import TaskColumn from "../taskColumn/TaskColumn";
import styles from "./TaskGroup.module.css";

function TaskGroup({ group }) {
  const { name, columns } = group;
  return (
    <main className={styles.container}>
      <div>
        <Card className={styles.title}>
          <h2>{name}</h2>
        </Card>
      </div>

      <section className={styles.columns}>
        {columns.map((column) => (
          <TaskColumn data={column} key={column.name} />
        ))}
      </section>
    </main>
  );
}

export default TaskGroup;
