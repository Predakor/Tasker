import { useState } from "react";
import CurrentList from "./components/CurrentList/CurrentList";
import { Sidebar } from "./layout";
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
    updateList({ ...activeList, tasks: updatedTasks });
  };

  return (
    <>
      <Sidebar
        lists={lists}
        addList={addList}
        active={active}
        setActive={setActive}
      />
      <CurrentList list={lists[active]} addTask={addTask} editTask={editTask} />
    </>
  );
}

export default App;
