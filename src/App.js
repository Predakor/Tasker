import "./main.css";
import TaskColumn from "./components/taskColumn/TaskColumn";
import TaskGroup from "./components/taskGroup/TaskGroup";
import Task from "./components/task/Task";

function App() {
  return (
    <div>
      <nav>
        <h1>Tasker</h1>
      </nav>
      <TaskGroup>
        <TaskColumn>
          <Task title={"task1"}>Do laundry</Task>
          <Task title={"task2"}>touch grass</Task>
          <Task title={"task3"}>finish this app</Task>
        </TaskColumn>
        <TaskColumn>
          <Task title={"task1"}>Do laundry</Task>
          <Task title={"task2"}>touch grass</Task>
          <Task title={"task3"}>finish this app</Task>
        </TaskColumn>
        <TaskColumn>
          <Task title={"task1"}>Do laundry</Task>
          <Task title={"task2"}>touch grass</Task>
          <Task title={"task3"}>finish this app</Task>
        </TaskColumn>
      </TaskGroup>
      <footer></footer>
    </div>
  );
}

export default App;
