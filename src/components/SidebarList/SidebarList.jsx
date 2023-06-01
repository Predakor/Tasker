import Button from "../Button/Button";
import styles from "./SidebarList.module.css";

const SidebarList = ({ lists, activeList, setActive, removeList }) => {
  return (
    <nav className={styles.container}>
      {lists.map(({ id, name, tasks }, index) => {
        const active = index === activeList ? styles.active : "";
        const clickHandler = () => setActive(id);
        const removeHandler = () => removeList(id);
        return (
          <div
            className={`${styles.list} ${active}`}
            onClick={clickHandler}
            key={id}
          >
            <p className={styles.listName}>{name}</p>
            <div className={styles.notifications}>
              <div className={styles.tasksCount}>{tasks.length}</div>
            </div>
            <Button onClick={removeHandler} ghost>
              X
            </Button>
          </div>
        );
      })}
    </nav>
  );
};

export default SidebarList;
