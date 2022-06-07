import Card from "../card/Card";
import Task from "../task/Task";
import styles from "./taskColumn.module.css";

let tasks = [
  { id: 1, title: "Do dishes", descr: "", status: "new" },
  { id: 2, title: "Touch grass", descr: "walk outside", status: "started" },
  { id: 3, title: "Finish app", descr: "stop being lazy", status: "ended" },
];

function taskColumn({ children }) {
  return (
    <Card>
      <h3>Collumn Title</h3>
      <div>
        {tasks.map((task) => (
          <Task title={task.title} key={task.id}>
            {task.descr}
          </Task>
        ))}
      </div>

      <div className="taskInject">
        <label htmlFor="addTaskInput"></label>
        <input type="text" id="addTaskInput" />
        <button onClick={() => console.log("add  task")}>+</button>
      </div>
    </Card>
  );
}
export default taskColumn;
