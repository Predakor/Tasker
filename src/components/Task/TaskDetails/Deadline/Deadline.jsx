import styles from "./Deadline.module.css";
import {
  today,
  nextDay,
  nextWeek,
  toObject,
  nextMonth,
} from "../../../../utils/time";
import Button from "../../../Button/Button";

function Deadline({ deadline, onDateChange }) {
  if (!deadline)
    return (
      <div className={styles.buttonContainer}>
        <Button onClick={() => onDateChange(today())}>Today</Button>
        <Button onClick={() => onDateChange(nextDay())}>Next Day</Button>
        <Button onClick={() => onDateChange(nextWeek())}>Next Week</Button>
        <Button onClick={() => onDateChange(nextMonth())}>Next Month</Button>
      </div>
    );

  const removeDeadline = () => {
    onDateChange(null);
  };

  const { month, monthName, day, dayName, hours, minutes } = toObject(deadline);
  return (
    <div className={styles.deadlineContainer}>
      <p>{`${monthName} ${dayName} ${hours}:${minutes}`}</p>
      <Button onClick={removeDeadline}>X</Button>
    </div>
  );
}

export default Deadline;
