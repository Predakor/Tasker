import Card from "../card/Card";
import styles from "./taskColumn.module.css";

function taskColumn({ children }) {
  return (
    <Card>
      <h3>Collumn Title</h3>
      {children}

      <div className="taskInject">
        <label htmlFor="addTaskInput"></label>
        <input type="text" id="addTaskInput" />
        <button onClick={() => console.log("add  task")}>+</button>
      </div>
    </Card>
  );
}
export default taskColumn;
