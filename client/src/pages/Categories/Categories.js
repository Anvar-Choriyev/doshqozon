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
import { Link } from "react-router-dom";

const Categories = () => {
  const [categories, setCategories] = useState([]);
  const getAllCategories = async () => {
    try {
      const res = await http({
        url: "/categories",
        method: "GET",
      });
      setCategories(res.data?.data);
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };
  useEffect(() => {
    getAllCategories();
  }, []);

  return (
    <Layout>
      <div className={styles.mainText}>
        <p className={`title ${styles.categoryText}`}>
          Kategoriyalar
        </p>
        <button className={`main-text ${styles.charge}`}>
          Charge customer
        </button>
      </div>
      <div className="grid-container">
        {categories?.map(ctg => (
          <Link
            key={ctg.id}
            to={`/taomnoma/kategoriyalar/${ctg.id}`}>
            <Card
              img={ctg.src}
              name={ctg.name}
            />
          </Link>
        ))}
      </div>
    </Layout>
  );
};

export default Categories;
