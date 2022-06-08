import styles from "./InputAdd.module.css";
import { FiChevronRight } from "react-icons/fi";
function InputAdd({ placeholder, add }) {
  function keyHandler(e) {
    if (e.key !== "Enter") return;
    e.target.blur();
    add(e.target.value);
  }

  return (
    <div className={styles.container}>
      <input
        className={styles.input}
        type="text"
        placeholder={placeholder}
        maxLength="24"
        onKeyDown={keyHandler}
      />
      <FiChevronRight className={styles.button} onClick={add} />
    </div>
  );
}

export default InputAdd;
