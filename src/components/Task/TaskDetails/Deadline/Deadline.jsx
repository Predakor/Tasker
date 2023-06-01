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

  const deadlineDate = new Date(deadline);
  const { monthName, dayName, hours, minutes } = toObject(deadlineDate);
  const fullMinutes = minutes < 10 ? `0${minutes}` : minutes;
  const fullHours = hours < 10 ? `0${hours}` : hours;
  return (
    <div className={styles.deadlineContainer}>
      <p>{`${monthName} ${dayName} ${fullHours}:${fullMinutes}`}</p>
      <Button onClick={removeDeadline}>X</Button>
    </div>
  );
}

export default Deadline;
