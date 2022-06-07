import { useState } from "react";
import Sidebar from "./sidebar/Sidebar";
import TaskGroup from "./components/taskGroup/TaskGroup";
import groups from "./utils/dummyData.json";
import "./main.css";

function App() {
  const [activeTaskGroup, setActiveTaskGroup] = useState(groups[0]);
  return (
    <>
      <Sidebar />
      <TaskGroup group={activeTaskGroup} />
      <footer></footer>
    </>
  );
}

export default App;
