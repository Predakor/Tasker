import React from "react";
import styles from "./SidebarList.module.css";

const SidebarList = ({ lists, activeList, setActive }) => {
  return (
    <div className={styles.container}>
      {lists.map(({ name, tasks }, index) => {
        const active = index === activeList ? styles.active : "";
        const clickHandler = () => setActive(index);
        return (
          <div
            className={`${styles.list} ${active}`}
            onClick={clickHandler}
            key={name}
          >
            <p className={styles.listName}>{name}</p>
            <div className={styles.notifications}>
              <div className={styles.tasksCount}>{tasks.length}</div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default SidebarList;
