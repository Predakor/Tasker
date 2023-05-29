import { useState } from "react";
import TaskGroup from "./components/taskGroup/TaskGroup";
import Sidebar from "./layout/sidebar/Sidebar";
import "./main.css";
import groups from "./utils/dummyData";
import { createList, createTask } from "./utils/todos";

function App() {
  const [lists, setLists] = useState(groups);
  const [active, setActive] = useState(0);

  function addList(listName) {
    setLists((prevList) => [...prevList, createList(listName)]);
  }

  function updateList(newList, target) {
    setLists((prevLists) => {
      if (!target) target = prevLists[active].name;
      return prevLists.map((list) => {
        return list.name === target ? newList : list;
      });
    });
  }

  function addTask(taskName) {
    const newTask = createTask(taskName);
    const list = lists[active];
    const newList = { ...list, tasks: [...list.tasks, newTask] };
    updateList(newList);
  }

  function editTask(editedTask) {
    const list = lists[active];
    const updatedTasks = list.tasks.map((task) => {
      return task.id === editedTask.id ? editedTask : task;
    });
    const newList = { ...list, tasks: updatedTasks };
    updateList(newList);
  }

  return (
    <>
      <Sidebar
        lists={lists}
        addList={addList}
        active={active}
        setActive={setActive}
      />
      <TaskGroup list={lists[active]} addTask={addTask} editTask={editTask} />
    </>
  );
}

export default App;
