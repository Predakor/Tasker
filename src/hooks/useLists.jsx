import { useEffect, useState } from "react";
import groups from "../utils/dummyData";
import { createList } from "../utils/todos";

function useLists() {
  const [lists, setLists] = useState(
    () => JSON.parse(localStorage.getItem("lists")) || groups
  );

  useEffect(() => {
    localStorage.setItem("lists", JSON.stringify(lists));
  }, [lists]);

  const updateList = (newList, target) => {
    setLists((prevLists) =>
      prevLists.map((list) => (list.id === target.id ? newList : list))
    );
  };

  const addList = (listName) => {
    const newList = createList(listName);
    setLists((prevLists) => [...prevLists, newList]);
  };

  const removeList = (listID) => {
    const filteredLists = lists.filter((list) => list.id !== listID);
    if (filteredLists.length === 0) {
      alert("Cannot remove the last list.");
      return;
    }
    setLists([...filteredLists]);
  };

  const listActions = { updateList, addList, removeList };
  return [lists, listActions];
}
export default useLists;
