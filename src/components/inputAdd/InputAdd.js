import styles from "./InputAdd.module.css";
import { FiChevronRight } from "react-icons/fi";
import { useRef } from "react";
function InputAdd({ placeholder, addTask }) {
  const inputRef = useRef();

  function submitHandler(e) {
    e.preventDefault();
    const input = inputRef.current;
    if (input.value.length < 3) {
      console.warn("task name is to short ");
      return;
    }
    input.blur();
    input.value = "";
    addTask(input.value);
  }

  return (
    <form className={styles.container} onSubmit={submitHandler}>
      <input
        className={styles.input}
        type="text"
        placeholder={placeholder}
        maxLength="24"
        ref={inputRef}
      />
      <FiChevronRight className={styles.button} onClick={submitHandler} />
    </form>
  );
}

export default InputAdd;
