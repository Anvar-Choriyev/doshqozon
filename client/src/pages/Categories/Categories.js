import styles from "./Categories.module.css";
import Meals from "../../assets/images/meals.png";
import Bread from "../../assets/images/bread.png";
import Salad from "../../assets/images/salad.png";
import HotDrinks from "../../assets/images/hot-drinks.png";
import ColdDrinks from "../../assets/images/cold-drinks.png";
import { useEffect, useState } from "react";
import http from "../../utils/axios-instance";
import { toast } from "react-toastify";
import Card from "../../components/Generics/Card/Card";
import Layout from "../../components/Layout/Layout";

const Categories = () => {
	const categoryImg = [
		{
			id: 1,
			src: Meals,
		},
		{
			id: 2,
			src: Salad,
		},
		{
			id: 3,
			src: Bread,
		},
		{
			id: 4,
			src: HotDrinks,
		},
		{
			id: 5,
			src: ColdDrinks,
		},
	];
	const [categories, setCategories] = useState([]);
	const getAllCategories = async () => {
		try {
			const res = await http({
				url: "/categories",
				method: "GET",
			});
			setCategories(res.data.data);
		} catch (error) {
			toast.error(error.response.data.message);
		}
	};
	useEffect(() => {
		getAllCategories();
	}, []);
	const categoryArr = [];
	categoryImg.forEach((img) =>
		categories?.forEach((ctg) => {
			if (img.id === ctg.id) {
				categoryArr.push({ src: img.src, name: ctg.name, id: ctg.id });
			}
		})
	);
	return (
		<Layout>
			<div className={styles.mainText}>
				<p className={`title ${styles.categoryText}`}>Kategoriyalar</p>
				<button className={`main-text ${styles.charge}`}>
					Charge customer
				</button>
			</div>
			<div className="grid-container">
				{categoryArr.map((ctg) => (
					<Card
						key={ctg.id}
						img={ctg.src}
						name={ctg.name}
						id={ctg.id}
						url={"/taomnoma/katego'riya"}
					/>
				))}
			</div>
		</Layout>
	);
};

export default Categories;
