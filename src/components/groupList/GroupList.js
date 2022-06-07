import styles from "./GroupList.module.css";
import InputAdd from "../inputAdd/InputAdd";
function GroupList({ groups }) {
  return (
    <div className={styles.groupList}>
      <h3 className={styles.title}>Groups</h3>
      {groups.columns.map((group) => (
        <GroupItem group={group} key={group.name} />
      ))}
      <InputAdd />
    </div>
  );
}

function GroupItem({ group }) {
  return (
    <div className={styles.groupItem}>
      <p>{group.name}</p>
      <div className={styles.amount}>3</div>
    </div>
  );
}
export default GroupList;
