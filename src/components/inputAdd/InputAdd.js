import styles from "./InputAdd.module.css";

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
        placeholder={"add"}
        maxLength="24"
        onKeyDown={keyHandler}
      />
      <button className={styles.button} onClick={add}>
        +
      </button>
    </div>
  );
}

export default InputAdd;
