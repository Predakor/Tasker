import GroupList from "../../components/groupList/GroupList";
import dummyData from "../../utils/dummyData.json";
import Footer from "../footer/Footer";
import styles from "./Sidebar.module.css";
function Sidebar() {
  return (
    <div className={styles.sidebar}>
      <h2 className={styles.title}>Tasker</h2>

      <GroupList lists={dummyData} />

      {/* <SettingsGroup></SettingsGroup> */}

      <Footer />
    </div>
  );
}

export default Sidebar;
