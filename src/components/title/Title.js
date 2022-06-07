import styles from "./Title.module.css";

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
    <>
      <textarea
        className={styles.textarea}
        onKeyDown={checkForEnd}
        onBlur={saveTitle}
        name={`${name}-text`}
        id={`${name}-text`}
        cols="20"
        rows="1"
        maxLength={20}
        defaultValue={name}
        spellCheck="false"
      />
      <label htmlFor={`${name}-text`}>e</label>
    </>
  );
}

export default Title;
