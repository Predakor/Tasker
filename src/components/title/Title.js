import styles from "./Title.module.css";
import { FiEdit3 } from "react-icons/fi";

function Title({ columnData }) {
  const { name } = columnData;

  function checkForEnd(e) {
    if (e.key === "Enter") saveTitle(e);
  }

  function saveTitle(e) {
    e.preventDefault();

    const currentValue = e.target.value;
    let isValid = currentValue.length > 3;
    if (isValid) {
      e.target.blur();
      columnData.name = currentValue;
    } else e.target.value = name;
  }
  return (
    <div className={styles.container}>
      <textarea
        className={styles.textarea}
        onKeyDown={checkForEnd}
        onBlur={saveTitle}
        name={`${name}-text`}
        id={`${name}-text`}
        rows="1"
        maxLength={20}
        defaultValue={name}
        spellCheck="false"
      />
      <label className={styles.label} htmlFor={`${name}-text`}>
        <FiEdit3 />
      </label>
    </div>
  );
}

export default Title;
