import { useRef } from "react";
import { FiChevronRight } from "react-icons/fi";
import styles from "./InputAdd.module.css";

const InputAdd = ({ placeholder, onSubmit }) => {
  const inputRef = useRef();

  const submitHandler = (e) => {
    e.preventDefault();
    const input = inputRef.current;
    if (input.value.length < 3) return;

    onSubmit(input.value);
    input.value = "";
  };

  return (
    <form className={styles.container} onSubmit={submitHandler}>
      <input
        className={styles.input}
        type="text"
        maxLength="24"
        placeholder={placeholder}
        ref={inputRef}
        defaultValue=""
      />
      <FiChevronRight className={styles.button} onClick={submitHandler} />
    </form>
  );
};

export default InputAdd;
