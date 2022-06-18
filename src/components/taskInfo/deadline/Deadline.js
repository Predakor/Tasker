import styles from "./Deadline.module.css";
import { today, nextDay, nextWeek, toObject } from "../../../utils/time";

function Deadline({ deadline, onDateChange }) {
  function openCalendar() {
    console.warn("not implemented");
  }
  if (!deadline)
    return (
      <div className={styles.buttonContainer}>
        <RemindButton onClick={() => onDateChange(today())}>Today</RemindButton>
        <RemindButton onClick={() => onDateChange(nextDay())}>Next Day</RemindButton>
        <RemindButton onClick={() => onDateChange(nextWeek())}>Next Week</RemindButton>
        <RemindButton onClick={() => {}}>Custom</RemindButton>
      </div>
    );

  const { month, monthName, day, dayName, hours, minutes } = toObject(deadline);
  return (
    <div className={styles.container}>
      <p onClick={openCalendar}>{`${monthName} ${dayName} ${hours}:${minutes}`}</p>
    </div>
  );
}

function RemindButton({ onClick, children }) {
  return (
    <button className={styles.button} onClick={onClick}>
      {children}
    </button>
  );
}

export default Deadline;
