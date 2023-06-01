import styles from "./button.module.css";

function Button(props) {
  const { children, className, active, ghost, ...rest } = props;

  return (
    <button
      className={`${styles.button} ${ghost ? styles.ghost : ""} ${
        active ? styles.active : ""
      } ${className || ""} `}
      {...rest}
    >
      {children}
    </button>
  );
}
export default Button;
