import Layout from "../../components/Layout/Layout";
import styles from "./Categories.module.css"
import Meals from "../../assets/images/meals.png"
import Bread from "../../assets/images/bread.png"
import Salad from "../../assets/images/salad.png"
import HotDrinks from "../../assets/images/hot-drinks.png"
import ColdDrinks from "../../assets/images/cold-drinks.png"

const Categories = () => {
    return (
        <>
            <Layout/>
            <div className={styles.container}>
                <p className={styles.categoryText}>Categories</p>
                <div className={styles.categories}>
                    <div className={styles.categoryBox}>
                        <img src={Meals} />
                        <p>Taomlar</p>
                    </div>
                    <div className={styles.categoryBox}>
                        <img src={Bread} />
                        <p>Non</p>
                    </div>
                    <div className={styles.categoryBox}>
                        <img src={Salad} />
                        <p>Salatlar</p>
                    </div>
                    <div className={styles.categoryBox}>
                        <img src={HotDrinks} />
                        <p>Qaynoq ichimliklar</p>
                    </div>
                    <div className={styles.categoryBox}>
                        <img src={ColdDrinks} />
                        <p>Salqin ichimliklar</p>
                    </div>
                </div>
            </div>
        </>
    );
}
 
export default Categories;