import Card from "../card/Card";
import styles from "./Task.module.css";

function Task({ title, children }) {
  return (
    <Card>
      <div className={styles.task}>
        <h2>{title}</h2>
        <p>{children}</p>
      </div>
    </Card>
  );
}
export default Task;
