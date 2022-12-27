import styles from "./Card.module.css";

const Card = (props) => {
  return (
    <div className={styles.card}>
      <img src={props.img} alt="product" />
      <span className={styles["product-name"]}>{props.name}</span>
      <span className={styles["product-number"]}>
        {props.number}
      </span>
      <span className={styles["product-price"]}>{props.price}</span>
    </div>
  );
};    
export default Card;