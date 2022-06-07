import Card from "../card/Card";
import styles from "./Task.module.css";

function Task({ title, children }) {
  return (
    <div className={styles.task}>
      <h4>{title}</h4>
      <p>{children}</p>
    </div>
  );
}
export default Task;
