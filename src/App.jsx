import { useState } from "react";
import TaskGroup from "./components/TaskGroup/TaskGroup";
import Sidebar from "./layout/sidebar/Sidebar";
import "./main.css";
import groups from "./utils/dummyData";
import { createList, createTask } from "./utils/todos";

function App() {
  const [lists, setLists] = useState(groups);
  const [active, setActive] = useState(0);

  const addList = (listName) => {
    setLists((prevList) => [...prevList, createList(listName)]);
  };

  const updateList = (newList, target) => {
    setLists((prevLists) => {
      target = target || prevLists[active].name;
      return prevLists.map((list) => (list.name === target ? newList : list));
    });
  };

  const addTask = (taskName) => {
    const activeList = lists[active];
    const newTask = createTask(taskName);
    const newList = { ...activeList, tasks: [...activeList.tasks, newTask] };
    updateList(newList);
  };

  const editTask = (editedTask) => {
    const activeList = lists[active];
    const updatedTasks = activeList.tasks.map((task) =>
      task.id === editedTask.id ? editedTask : task
    );
    const newList = { ...activeList, tasks: updatedTasks };
    updateList(newList);
  };

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
