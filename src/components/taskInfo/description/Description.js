import { useEffect, useRef, useState } from "react";
import styles from "./Description.module.css";

function Description({ onValueChange, value }) {
  const [height, setHeight] = useState();
  const [input, setInput] = useState(value);
  const fakeInputRef = useRef();

  useEffect(() => {
    const target = fakeInputRef.current;
    const paddings = 2 * parseInt(getComputedStyle(target).padding);
    const totalContentHeight = Math.floor(target.scrollHeight - paddings);

    if (totalContentHeight === height) return;
    setHeight(totalContentHeight);
  }, [input]);

  return (
    <div className={styles.container}>
      <textarea
        className={styles.descr}
        aria-label="write note here it will be autosaved"
        placeholder="Add your notes here"
        onChange={(e) => setInput(e.target.value)}
        style={{ height: height }}
      />
      <div ref={fakeInputRef} className={styles.hiddenIput}>
        {input}
      </div>
    </div>
  );
}

export default Description;
