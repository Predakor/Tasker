import Card from "../card/Card";
import Task from "../task/Task";
import Title from "../title/Title.js";
import InputAdd from "../inputAdd/InputAdd";
import styles from "./taskColumn.module.css";

function TaskColumn({ data }) {
  const { name, tasks } = data;
  return (
    <Card>
      <Title columnData={data} />
      <div className={styles.taskList}>
        {tasks.map((task) => (
          <Task data={task} key={task.id} />
        ))}
      </div>

      <InputAdd placeholder={"add task"} />
    </Card>
  );
}
export default TaskColumn;
