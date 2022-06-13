import styles from "./GroupList.module.css";
import InputAdd from "../inputAdd/InputAdd";
function GroupList({ lists, addList, active, setActive }) {
  return (
    <div className={styles.groupList}>
      <h3 className={styles.title}>Lists</h3>
      {lists.map((list, i) => (
        <ListLabel list={list} key={list.name} onClick={() => setActive(i)} />
      ))}
      <InputAdd onSubmit={addList} />
    </div>
  );
}

function ListLabel({ list, onClick }) {
  return (
    <div className={styles.groupItem} onClick={onClick}>
      <p>{list.name}</p>
      <div className={styles.amount}>{list.tasks.length}</div>
    </div>
  );
}
export default GroupList;
