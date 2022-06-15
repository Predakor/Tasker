import { useState } from "react";
import Sidebar from "./layout/sidebar/Sidebar";
import TaskGroup from "./components/taskGroup/TaskGroup";
import groups from "./utils/dummyData.json";
import { createList, createTask, createStep } from "./utils/todos";
import "./main.css";

function App() {
  const [lists, setLists] = useState(groups);
  const [active, setActive] = useState(0);

  function addList(listName) {
    setLists((prevList) => [...prevList, createList(listName)]);
  }

  function updateActiveList(newList, target) {
    setLists((prevLists) => {
      if (!target) target = prevLists[active].name;
      return prevLists.map((list) => {
        return list.name === target ? newList : list;
      });
    });
  }

  function addTask(taskName) {
    const newTask = createTask(taskName);
    const newList = { ...lists[active], tasks: [...lists[active].tasks, newTask] };
    updateActiveList(newList);
  }

  return (
    <>
      <Sidebar lists={lists} setActive={setActive} addList={addList} />
      <TaskGroup list={lists[active]} addTask={addTask} />
    </>
  );
}

export default App;
