import { useState } from "react";
import StatusIcon from "../../StatusIcon/StatusIcon";
import styles from "./Step.module.css";

function Step({ name = "", completed, onSubmit, onStatusChange }) {
  const [input, setInput] = useState(name);

  function submitHandler(e) {
    e.preventDefault();

    const text = input.trim();
    if (!text) return;

    onSubmit(text);
    setInput("");
  }

  function changeHandler(e) {
    setInput(e.target.value);
  }

  return (
    <form className={styles.container} onSubmit={submitHandler}>
      <StatusIcon status={completed} onClick={onStatusChange} />

      <input
        type="text"
        className={styles.input}
        onBlur={submitHandler}
        onChange={changeHandler}
        value={input}
        placeholder="new step"
      />
    </form>
  );
}

export default Step;
