import GroupList from "../../components/groupList/GroupList";
import Footer from "../footer/Footer";
import styles from "./Sidebar.module.css";
function Sidebar({ addList, setActive, lists }) {
  return (
    <div className={styles.sidebar}>
      <h2 className={styles.title}>Tasker</h2>

      <GroupList lists={lists} addList={addList} setActive={setActive} />

      {/* <SettingsGroup></SettingsGroup> */}

      <Footer />
    </div>
  );
}

export default Sidebar;
