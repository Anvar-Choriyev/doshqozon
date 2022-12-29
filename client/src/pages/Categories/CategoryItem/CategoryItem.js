import { useEffect, useState } from "react";
import http from "../../../utils/axios-instance";
import { toast } from "react-toastify";
import style from "./CategoryItem.module.css"
import { useParams } from "react-router-dom";
import Layout from "../../../components/Layout/Layout";
import Card from "../../../components/Generics/Card/Card";
import bred from "./bred.png";

const CategoryItem = () => {
	const { id } = useParams();
	const [categoryItem, setCategoryItem] = useState([]);
	let categoryName;

	useEffect(() => {
		getAllCategoryItem();
	}, []);

	const getAllCategoryItem = async () => {
		try {
			const res = await http({
				url: `/categories/${id}`,
				method: "GET",
			});
			console.log('hello')
			console.log(res);

			setCategoryItem(res.data.data.foodsArr);
			categoryName = res.data.data.categoryName;
		} catch (error) {
			console.log('hello2')
			toast.error(error.response.data.message);
		}
	};

	return (
		<Layout innerRoute={categoryName}>
			<div className={style.container}>
				{categoryItem.length > 0 ? categoryItem?.map((c) => (
					<Card img={bred} key={c.id} name={c.name} number={c.number} price={c.price} />
				)) : "Malumot Mavjud Emas"}
			</div>
		</Layout>
	);
};

export default CategoryItem;