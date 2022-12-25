import styles from "./Button.module.css";

const Button = (props) => {
  return (
    <button className={` ${props.className} ${styles.button}`}>
      {props["button-text"]}
    </button>
  );
};

export default Button;
