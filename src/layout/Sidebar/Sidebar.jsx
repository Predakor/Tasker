import SidebarList from "../../components/SidebarList/SidebarList";
import Footer from "../Footer/Footer";
import styles from "../Layout.module.css";

function Sidebar({ lists, addList, active, setActive }) {
  return (
    <aside className={styles.sidebar}>
      <h2 className={styles.title + "font-big"}>Tasker</h2>

      <div className={styles.listsContainer}>
        <h3 className={styles.subTitle}>Lists</h3>
        <SidebarList lists={lists} activeList={active} setActive={setActive} />
      </div>

      <Footer />
    </aside>
  );
}

export default Sidebar;
