import SidebarList from "../../components/SidebarList/SidebarList";
import Footer from "../footer/Footer";
import styles from "./Sidebar.module.css";
function Sidebar({ lists, addList, active, setActive }) {
  return (
    <div className={styles.sidebar}>
      <h2 className={styles.title}>Tasker</h2>

      <div className={styles.listsContainer}>
        <h3 className={styles.subTitle}>Lists</h3>
        <SidebarList lists={lists} activeList={active} setActive={setActive} />
      </div>

      {/* <SettingsGroup></SettingsGroup> */}

      <Footer />
    </div>
  );
}

export default Sidebar;
