import { useState } from "react";
import Sidebar from "./layout/sidebar/Sidebar";
import TaskGroup from "./components/taskGroup/TaskGroup";
import groups from "./utils/dummyData.json";
import "./main.css";

function App() {
  const [lists, setLists] = useState(groups);
  const [activeList, setActiveList] = useState(lists[0]);

  function addList(listName) {
    setLists([...lists, { name: listName, tasks: [] }]);
  }
  function setActive(index) {
    setActiveList(lists[index]);
  }
  return (
    <>
      <Sidebar lists={lists} activeList={activeList} setActive={setActive} addList={addList} />
      <TaskGroup list={activeList} />
    </>
  );
}

export default App;
