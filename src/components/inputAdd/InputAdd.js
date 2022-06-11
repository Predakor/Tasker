import styles from "./InputAdd.module.css";
import { FiChevronRight } from "react-icons/fi";
import { useRef } from "react";
function InputAdd({ placeholder, addTask }) {
  const inputRef = useRef();
  function keyHandler(e) {
    if (e.key !== "Enter") return;
    e.target.blur();
    addTask(e.target.value);
  }

  return (
    <div className={styles.container}>
      <input
        className={styles.input}
        type="text"
        placeholder={placeholder}
        maxLength="24"
        onKeyDown={keyHandler}
        ref={inputRef}
      />
      <FiChevronRight className={styles.button} onClick={() => addTask(inputRef.current.value)} />
    </div>
  );
}

export default InputAdd;
