import { FiGithub, FiMail, FiLinkedin } from "react-icons/fi";
import styles from "./Footer.module.css";

function Footer() {
  return (
    <footer className={styles.bottom}>
      <a href="https://github.com/Predakor/tasker">
        <FiGithub className={styles.icon} />
      </a>
      <a href="mailto:patrykbusko@gmail.com?subject=business">
        <FiMail className={styles.icon} />
      </a>
      <a href="https://github.com/Predakor/tasker">
        <FiLinkedin className={styles.icon} />
      </a>
    </footer>
  );
}

export default Footer;
