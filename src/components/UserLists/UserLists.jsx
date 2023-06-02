import { DeleteButton } from "../Button";
import styles from "./userLists.module.css";

const SidebarList = ({ lists, activeList, setActive, removeList }) => {
  return (
    <nav className={`${styles.container} font-small`}>
      {lists.map(({ id, name, tasks }, index) => {
        const active = index === activeList ? styles.active : "";
        const deleteButtonVisible = activeList === index ? "" : "hide";
        const clickHandler = () => setActive(id);
        const removeHandler = () => removeList(id);
        return (
          <div
            className={`${styles.list} ${active}`}
            onClick={clickHandler}
            key={id}
          >
            <p data-count={tasks.length} className={styles.listName}>
              {name}
            </p>
            <DeleteButton
              onClick={removeHandler}
              className={deleteButtonVisible}
              label={`Remove ${name} from your lists`}
            />
          </div>
        );
      })}
    </nav>
  );
};

export default SidebarList;
