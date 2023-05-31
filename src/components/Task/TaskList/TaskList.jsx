import Task from "../Task";

function TaskColumn({ tasks, setSelectedTask, editTask }) {
  return tasks.map((task) => (
    <Task
      changeTask={editTask}
      task={task}
      onClick={setSelectedTask}
      key={task.id}
    />
  ));
}
export default TaskColumn;
