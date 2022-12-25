import styles from "./Categories.module.css"
import Layout from "../../components/Layout/Layout";
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
                <div className={styles.mainText}>
                    <p className={`title ${styles.categoryText}`}>Kategoriyalar</p>
                    <button className={`main-text ${styles.charge}`}>Charge customer</button>
                </div>
                <div className={styles.categories}>
                    <div className={styles.categoryBox}>
                        <img src={Meals} />
                        <p className="name-text">Taomlar</p>
                    </div>
                    <div className={styles.categoryBox}>
                        <img src={Bread} />
                        <p className="name-text">Non</p>
                    </div>
                    <div className={styles.categoryBox}>
                        <img src={Salad} />
                        <p className="name-text">Salatlar</p>
                    </div>
                    <div className={styles.categoryBox}>
                        <img src={HotDrinks} />
                        <p className="name-text">Qaynoq ichimliklar</p>
                    </div>
                    <div className={styles.categoryBox}>
                        <img src={ColdDrinks} />
                        <p className="name-text">Salqin ichimliklar</p>
                    </div>
                </div>
            </div>
        </>
    );
}
 
export default Categories;