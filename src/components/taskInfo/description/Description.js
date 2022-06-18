import { useEffect, useRef, useState } from "react";
import styles from "./Description.module.css";

function Description({ onBlur, value }) {
  const [height, setHeight] = useState();
  const [input, setInput] = useState(value);
  const fakeInputRef = useRef();

  useEffect(() => {
    const target = fakeInputRef.current;
    const paddings = 2 * parseInt(getComputedStyle(target).padding);
    const totalContentHeight = Math.floor(target.scrollHeight - paddings);
    if (totalContentHeight !== height) setHeight(totalContentHeight);

    const timeoutID = setTimeout(() => onBlur(input), 2000);
    return () => clearTimeout(timeoutID);
  }, [input]);
  useEffect(() => setInput(value), [value]);

  return (
    <div className={styles.container}>
      <textarea
        className={styles.descr}
        onChange={(e) => setInput(e.target.value)}
        onBlur={(e) => onBlur(e.target.value)}
        value={input}
        aria-label="write note here it will be autosaved"
        placeholder="Add your notes here"
        style={{ height: height }}
      />
      <div className={styles.hiddenIput} ref={fakeInputRef}>
        {input}
      </div>
    </div>
  );
}

export default Description;
