import { useState } from "react";
import Sidebar from "./layout/sidebar/Sidebar";
import TaskGroup from "./components/taskGroup/TaskGroup";
import groups from "./utils/dummyData.json";
import "./main.css";

function App() {
  const [activeList, setActiveList] = useState(groups[0]);
  return (
    <>
      <Sidebar />
      <TaskGroup list={activeList} />
    </>
  );
}

export default App;
