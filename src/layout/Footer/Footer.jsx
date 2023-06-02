import { FiGithub, FiMail, FiLinkedin } from "react-icons/fi";
import styles from "../Layout.module.css";

function Footer() {
  return (
    <footer className={styles.bottom}>
      <a href="https://github.com/Predakor/tasker">
        <FiGithub className={"font-md"} />
      </a>
      <a href="mailto:patrykbusko@gmail.com?subject=business">
        <FiMail className={"font-md"} />
      </a>
      <a href="https://www.linkedin.com/in/patryk-buśko">
        <FiLinkedin className={"font-md"} />
      </a>
    </footer>
  );
}

export default Footer;
