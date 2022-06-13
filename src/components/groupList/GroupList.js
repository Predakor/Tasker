import styles from "./GroupList.module.css";
import InputAdd from "../inputAdd/InputAdd";
function GroupList({ lists }) {
  return (
    <div className={styles.groupList}>
      <h3 className={styles.title}>Lists</h3>
      {lists.map((list) => (
        <GroupItem list={list} key={list.name} />
      ))}
      <InputAdd />
    </div>
  );
}

function GroupItem({ list }) {
  return (
    <div className={styles.groupItem}>
      <p>{list.name}</p>
      <div className={styles.amount}>3</div>
    </div>
  );
}
export default GroupList;
