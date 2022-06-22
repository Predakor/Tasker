import styles from "./SidebarList.module.css";

function SidebarList({ lists, activeList, setActive }) {
  return (
    <div className={styles.container}>
      {lists.map((list, i) => {
        const active = i === activeList ? styles.active : "";
        return (
          <div className={`${styles.list} ${active}`} onClick={() => setActive(i)} key={list.name}>
            <p className={styles.listName}>{list.name}</p>
            <div className={styles.notifications}>
              <div className={styles.tasksCount}>{list.tasks.length}</div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default SidebarList;
