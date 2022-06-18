import { useRef } from "react";
import { FiChevronRight } from "react-icons/fi";
import styles from "./InputAdd.module.css";

function InputAdd({ placeholder, onSubmit }) {
  const inputRef = useRef();

  function submitHandler(e) {
    e.preventDefault();
    const input = inputRef.current;
    if (input.value.length < 3) return;

    onSubmit(input.value);
    input.value = "";
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
