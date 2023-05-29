import { FiCheckCircle, FiCircle } from "react-icons/fi";
import styles from "./StatusIcon.module.css";

function StatusIcon({ status, onClick, className = "" }) {
  const IconComponent = status ? FiCheckCircle : FiCircle;

  return (
    <IconComponent
      className={`${styles.current} ${className}`}
      onClick={onClick}
    />
  );
}

export default StatusIcon;
