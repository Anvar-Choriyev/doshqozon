import styles from "./Card.module.css";
import { Link } from "react-router-dom";

const Card = (props) => {
	return (
		<div className={styles.card}>
			<img src={props.img} alt="product" />
			{props.url ? <Link to={`${props.url}/${props.id}`}><span className={styles["product-name"]}>{props.name}</span></Link> :
				<span className={styles["product-name"]}>{props.name}</span>}
			<span className={styles["product-number"]}>
				{props.number}
			</span>
			<span className={styles["product-price"]}>{props.price}</span>
		</div>
	);
};
export default Card;
