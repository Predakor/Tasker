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

  const updateList = (newList, target = activeList) => {
    setLists((prevLists) =>
      prevLists.map((list) => (list.id === target.id ? newList : list))
    );
  };

  const addList = (listName) => {
    console.log(listName);
    setLists((prevLists) => [...prevLists, createList(listName)]);
  };

  const removeList = (listID) => {
    const filteredLists = lists.filter((list) => list.id !== listID);
    setLists((prevLists) => [...prevLists, filteredLists]);
  };

  const listActions = { updateList, addList, removeList };
  return [lists, listActions];
}
export default useLists;
