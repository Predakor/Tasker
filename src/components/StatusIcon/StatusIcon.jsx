import { FiCircle, FiCheckCircle } from "react-icons/fi";

import styles from "./StatusIcon.module.css";

function StatusIcon({ status, onClick, className = "" }) {
  return status ? (
    <FiCheckCircle className={`${styles.current} ${className}`} onClick={onClick} />
  ) : (
    <FiCircle className={`${styles.current} ${className}`} onClick={onClick} />
  );
}

export default StatusIcon;
