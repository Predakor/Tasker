import { useState } from "react";
import TaskColumn from "./components/taskColumn/TaskColumn";
import TaskGroup from "./components/taskGroup/TaskGroup";
import Task from "./components/task/Task";
import "./main.css";
import Sidebar from "./sidebar/Sidebar";

function App() {
  const [taskGroup, setTaskGroup] = useState();
  return (
    <>
      <Sidebar />
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
    </>
  );
}

export default App;
