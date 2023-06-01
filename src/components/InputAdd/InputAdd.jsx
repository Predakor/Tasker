import { useRef } from "react";
import { FiChevronRight } from "react-icons/fi";
import styles from "./InputAdd.module.css";
import Button from "../Button/Button";

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
        type="text"
        className={`${styles.input}`}
        placeholder={placeholder}
        maxLength="32"
        defaultValue=""
        ref={inputRef}
      />
      <Button className={styles.inputButton}>
        <FiChevronRight className={"font-md"} onClick={submitHandler} />
      </Button>
    </form>
  );
};

export default InputAdd;
