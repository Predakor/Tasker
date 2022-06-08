import GroupList from "../components/groupList/GroupList";
import dummyData from "../utils/dummyData.json";
import { FiGithub, FiMail, FiLinkedin } from "react-icons/fi";
import styles from "./Sidebar.module.css";
function Sidebar() {
  return (
    <div className={styles.sidebar}>
      <h2 className={styles.title}>Tasker</h2>

      <GroupList groups={dummyData[0]} />

      <div className={styles.bottom}>
        <a href="https://github.com/Predakor/tasker">
          <FiGithub />
        </a>
        <a href="mailto:patrykbusko@gmail.com?subject=business">
          <FiMail />
        </a>
        <a href="https://github.com/Predakor/tasker">
          <FiLinkedin />
        </a>
      </div>
    </div>
  );
}

export default Sidebar;
