import { useState } from "react";
import CurrentList from "./components/CurrentList/CurrentList";
import useLists from "./hooks/useLists";
import { Sidebar } from "./layout";
import "./main.css";
import { createTask } from "./utils/todos";

function App() {
  const [lists, { updateList, addList, removeList }] = useLists();
  const [active, setActive] = useState(0);
  const activeList = lists[active];

  const addTask = (taskName) => {
    const newTask = createTask(taskName);
    const newList = { ...activeList, tasks: [...activeList.tasks, newTask] };
    updateList(newList, active);
  };

  const editTask = (editedTask) => {
    const updatedTasks = activeList.tasks.map((task) =>
      task.id === editedTask.id ? editedTask : task
    );
    updateList({ ...activeList, tasks: updatedTasks }, active);
  };

  const removeTask = (taskID) => {
    const filteredTasks = activeList.tasks.filter((task) => task.id !== taskID);
    updateList({ ...activeList, tasks: filteredTasks }, active);
  };

  return (
    <>
      <Sidebar
        lists={lists}
        addList={addList}
        active={active}
        setActive={setActive}
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
