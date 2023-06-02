import { useEffect, useRef, useState } from "react";
import styles from "./Description.module.css";

function Description({ onBlur, value }) {
  const [height, setHeight] = useState();
  const [text, setText] = useState(value);
  const fakeInputRef = useRef();
  const timeoutRef = useRef();

  useEffect(() => {
    if (!text || text === value) return;

    const target = fakeInputRef.current;
    const paddings = 2 * parseInt(getComputedStyle(target).padding);
    const totalContentHeight = Math.floor(target.scrollHeight - paddings);
    if (totalContentHeight !== height) setHeight(totalContentHeight);

    timeoutRef.current = setTimeout(() => onBlur(text), 2000);
    return () => clearTimeout(timeoutRef.current);
  }, [text]);

  useEffect(() => setText(value), [value]);

  const blurHandler = (e) => {
    if (e.target.value !== text) {
      onBlur(e.target.value);
    }
  };
  const changeHandler = (e) => setText(e.target.value);

  return (
    <div className={styles.container}>
      <textarea
        value={text}
        onBlur={blurHandler}
        onChange={changeHandler}
        placeholder="Add your notes here"
        className={styles.descr}
        style={{ height: height }}
        aria-label="write note here it will be autosaved"
      />
      <div className={styles.hiddenInput} ref={fakeInputRef}>
        {text}
      </div>
    </div>
  );
}

export default Description;
