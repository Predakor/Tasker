import styles from "./button.module.css";

function Button(props) {
  const { children, className, active, ...rest } = props;

  return (
    <button
      className={`${styles.button} ${active ? styles.active : ""}`}
      {...rest}
    >
      {children}
    </button>
  );
}
export default Button;
