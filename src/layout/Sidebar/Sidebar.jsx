import SidebarList from "../../components/SidebarList/SidebarList";
import Footer from "../Footer/Footer";
import styles from "../Layout.module.css";
import InputAdd from "../../components/InputAdd/InputAdd";

function Sidebar({ lists, active, setActive, addList, removeList }) {
  return (
    <aside className={styles.sidebar}>
      <h2 className={"font-big"}>Tasker</h2>

      <div className={styles.listsContainer}>
        <h3 className={styles.subTitle}>Lists</h3>
        <SidebarList
          lists={lists}
          activeList={active}
          setActive={setActive}
          removeList={removeList}
        />
        <InputAdd onSubmit={addList} />
      </div>

      <Footer />
    </aside>
  );
}

export default Sidebar;
