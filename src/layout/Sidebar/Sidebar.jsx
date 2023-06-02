import InputAdd from "../../components/InputAdd/InputAdd";
import UserLists from "../../components/UserLists/UserLists";
import Footer from "../Footer/Footer";
import styles from "../Layout.module.css";

function Sidebar({ lists, active, setActive, addList, removeList }) {
  return (
    <aside className={styles.sidebar}>
      <h2 className={"font-big font-netural"}>Tasker</h2>

      <div className={styles.listsContainer}>
        <h3 className={styles.subTitle}>Lists</h3>
        <UserLists
          lists={lists}
          activeList={active}
          setActive={setActive}
          removeList={removeList}
        />
        <InputAdd onSubmit={addList} placeholder={"add list"} />
      </div>

      <Footer />
    </aside>
  );
}

export default Sidebar;
