import { useState } from "react";
import styles from "./Card.module.css";
import { Link } from "react-router-dom";
import Content from "../../Modal/Content";
import Modal from "../../Modal/Modal";

const Card = (props) => {
	const [open, setOpen] = useState(false)

	return (
		<div className={styles.card} style={{ cursor: "pointer" }} onClick={() => setOpen(true)}>
			<img src={props.img} alt="product" />
			<span className={styles["product-name"]}>{props.name}</span>
			<span className={styles["product-number"]}>
				{props.number}
			</span>
			<span className={styles["product-price"]}>{props.price}</span>
			{/* <button onClick={() => setOpen(true)}>Modal</button> */}
			{open && <Modal children={<Content id={props.id} setOpen={setOpen} />} />}
		</div>
	);
};
export default Card;
