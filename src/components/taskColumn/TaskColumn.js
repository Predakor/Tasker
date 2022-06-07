import Card from "../card/Card";
import Task from "../task/Task";
import Title from "../title/Title.js";
import styles from "./taskColumn.module.css";

function TaskColumn({ data }) {
  const { name, tasks } = data;
  return (
    <Card>
      <Title columnData={data} />
      <div>
        {tasks.map((task) => (
          <Task data={task} key={task.id} />
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
export default TaskColumn;
