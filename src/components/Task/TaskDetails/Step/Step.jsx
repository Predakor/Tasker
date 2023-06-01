import { useState } from "react";
import StatusIcon from "../../../StatusIcon/StatusIcon";
import styles from "./Step.module.css";

function Step({ step, editStep, removeStep }) {
  const { id, name, completed } = step;
  const [input, setInput] = useState(name);

  const submitHandler = (e) => {
    e.preventDefault();
    const text = input.trim();
    if (text) {
      editStep(text);
      setInput(text);
      return;
    }
    removeStep(id);
  };

  const changeHandler = (e) => {
    setInput(e.target.value);
  };

  const changeTaskCompletion = () => {
    editStep({ ...step, completed: !completed });
  };

  return (
    <form className={styles.container} onSubmit={submitHandler}>
      <StatusIcon status={completed} onClick={changeTaskCompletion} />

      <input
        type="text"
        className={styles.input}
        onBlur={submitHandler}
        onChange={changeHandler}
        value={input}
        placeholder="New step"
      />
    </form>
  );
}

export default Step;
