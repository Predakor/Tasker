import styles from "./Title.module.css";
import { FiEdit3 } from "react-icons/fi";

function Title({ title, changeTitle }) {
  function clickHandler(e) {
    if (e.key !== "Enter") return;
    e.preventDefault();

    const currentValue = e.target.value;
    let isValid = currentValue.length > 3;
    if (isValid) {
      e.target.blur();
      changeTitle(currentValue);
    } else e.target.value = title;
  }

  return (
    <div className={styles.container}>
      <textarea
        className={styles.textarea}
        onKeyDown={clickHandler}
        onBlur={clickHandler}
        name={`${title}-text`}
        id={`${title}-text`}
        rows="1"
        maxLength={20}
        defaultValue={title}
        spellCheck="false"
      />
      <label className={styles.label} htmlFor={`${title}-text`}>
        <FiEdit3 />
      </label>
    </div>
  );
}

export default Title;
