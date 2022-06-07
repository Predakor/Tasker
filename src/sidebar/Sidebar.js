import styles from "./Sidebar.module.css";
import GroupList from "../components/groupList/GroupList";
import dummyData from "../utils/dummyData.json";

function Sidebar() {
  return (
    <div className={styles.sidebar}>
      <h2 className={styles.title}>Tasker</h2>

      <GroupList groups={dummyData[0]} />

      <div className={styles.bottom}>
        <a href="https://github.com/Predakor/tasker">{"</>"}</a>
        <a href="mailto:patrykbusko@gmail.com?subject=business">{"@"}</a>
        <a href="https://github.com/Predakor/tasker">{"ln"}</a>
      </div>
    </div>
  );
}

export default Sidebar;
