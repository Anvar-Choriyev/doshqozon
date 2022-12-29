import React, { useEffect, useState } from "react";
import { ReactComponent as Close } from "../../assets/icons/close.svg";
import style from "./Content.module.css";
import { toast } from "react-toastify";
import http from "../../utils/axios-instance";
import osh from "../../assets/images/osh.png";
import qazi from "../../assets/images/qazi.png";
const Content = (props) => {
	const [categories, setCategories] = useState([]);
	const getAllCategories = async () => {
		try {
			const res = await http({
				url: `/foods/${props.id}`,
				method: "GET",
			});
			setCategories(res.data.data);
		} catch (error) {
			toast.error(error.response.data.message);
		}
	};
	
	useEffect(() => {
		!props.url && getAllCategories();
	}, []);

	function closeModal(e) {
		e.stopPropagation();
		props.setOpen(false);
	}

	return (
		<section className={style.container}>
			<Close className={style.close} onClick={closeModal} />
			{/* <Close className={style.close} onClick={() => props.setOpen(false)} /> */}
			<div>
				<img src={osh} alt="" />
				<p>{categories?.mainFood?.name}</p>
				<p className={style.pText}>
					{props?.number}
				</p>
				<p className={style.pSum}>
					{categories?.mainFood?.price}
					{/* 100 000 so'm */}
				</p>
			</div>
			{categories ? categories?.extra?.additional?.map((i) => (
				<div key={i.id}>
					<div className={style.item}>
						<div className={style.imgDiv}>
							<img src={qazi} alt="" />
							<p>{i.name}</p>
						</div>
						<div className={style.itemChange}>
							<button className={style.buttonMinus}>-</button>
							<p>1X</p>
							<button className={style.buttonPlus}>+</button>
						</div>
					</div>
				</div>
			)) : ""}
		</section>
	);
};

export default Content;
