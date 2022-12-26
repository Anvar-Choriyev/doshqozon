import styles from "./Card.module.css";

const Card = (props) => {
  return (
    <div className={styles.card}>
      <img src={props["product-img"]} alt="product" />
      <span className={styles["product-name"]}>{props["product-name"]}</span>
      <span className={styles["product-number"]}>
        {props["product-number"]}
      </span>
      <span className={styles["product-price"]}>{props["product-price"]}</span>
    </div>
  );
};    