import { useState } from "react";
import CurrentList from "./components/CurrentList/CurrentList";
import useLists from "./hooks/useLists";
import { Sidebar } from "./layout";
import "./main.css";
import { createTask } from "./utils/todos";

function App() {
  const [lists, { updateList, addList, removeList }] = useLists();
  const [active, setActive] = useState(0);
  const activeList = lists[active] || lists.at(-1);

  console.log(active);
  const addTask = (taskName) => {
    const newTask = createTask(taskName);
    const newList = { ...activeList, tasks: [...activeList.tasks, newTask] };
    updateList(newList, activeList);
  };

  const editTask = (editedTask) => {
    const updatedTasks = activeList.tasks.map((task) =>
      task.id === editedTask.id ? editedTask : task
    );
    updateList({ ...activeList, tasks: updatedTasks }, activeList);
  };

  const removeTask = (taskID) => {
    const filteredTasks = activeList.tasks.filter((task) => task.id !== taskID);
    updateList({ ...activeList, tasks: filteredTasks }, activeList);
  };

  const selectActiveList = (id) => {
    const matchedIndex = lists.findIndex((list) => list.id === id);
    const newActiveIndex = matchedIndex >= 0 ? matchedIndex : 0;
    setActive(newActiveIndex);
  };

  return (
    <>
      <Sidebar
        lists={lists}
        active={active}
        setActive={selectActiveList}
        addList={addList}
        removeList={removeList}
      />
      <CurrentList
        list={activeList}
        addTask={addTask}
        editTask={editTask}
        removeTask={removeTask}
      />
    </>
  );
}

export default App;
