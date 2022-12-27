import styles from "./Categories.module.css"
import Layout from "../../components/Layout/Layout";
import Meals from "../../assets/images/meals.png"
import Bread from "../../assets/images/bread.png"
import Salad from "../../assets/images/salad.png"
import HotDrinks from "../../assets/images/hot-drinks.png"
import ColdDrinks from "../../assets/images/cold-drinks.png"
import { useEffect, useState } from "react";
import http from "../../utils/axios-instance"
import { toast } from "react-toastify"

const Categories = () => {
	const categoryImg = [
		{
			id: 1,
			src: Meals
		},
		{
			id: 2,
			src: Bread
		},
		{
			id: 3,
			src: Salad
		},
		{
			id: 4,
			src: HotDrinks
		},
		{
			id: 5,
			src: ColdDrinks
		}
	]
	const [categories, setCategories] = useState([])
	useEffect(() => {
		getAllCategories()
	}, [])
	const getAllCategories = async () => {
		try {
			const res = await http({
				url: "/categories",
				method: "GET"
			})
			setCategories(res.data.data)
		} catch (error) {
			toast.error(error.response.data.message)
		}
	}
	const categoryArr = []
	categoryImg.forEach(img =>
		categories?.forEach(ctg => {
			if (img.id === ctg.id) {
				categoryArr.push({ src: img.src, name: ctg.name })
			}
		}
		)
	)
	return (
		<>
			<Layout>
				<div className={styles.mainText}>
					<p className={`title ${styles.categoryText}`}>Kategoriyalar</p>
					<button className={`main-text ${styles.charge}`}>Charge customer</button>
				</div>
				<div className={`grid-container ${styles.categories}`}>
					{
						categoryArr.map(ctg =>
							<div className={styles.categoryBox}>
								<img src={ctg.src} />
								<p className="name-text">{ctg.name}</p>
							</div>
						)
					}
				</div>
			</Layout>
		</>
	);
}

export default Categories;