import { useEffect, useState } from "react";
import http from "../../../utils/axios-instance";
import { toast } from "react-toastify";
import style from "./CategoryItem.module.css";
import { useParams } from "react-router-dom";
import Layout from "../../../components/Layout/Layout";
import Card from "../../../components/Generics/Card/Card";
import Meals from "../../../assets/images/meals.png";

const CategoryItem = () => {
  const { id } = useParams();
  const [categoryItem, setCategoryItem] = useState([]);
  const [categoryName, setCategoryName] = useState("");
  useEffect(() => {
    getAllCategoryItem();
  }, []);

  const getAllCategoryItem = async () => {
    try {
      const res = await http({
        url: `/categories/${id}`,
        method: "GET",
      });
      setCategoryItem(res.data.data.foodsArr);
      setCategoryName(res.data.data.categoryName);
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };

  return (
    <Layout innerRoute={categoryName}>
      <div className={`grid-container ${style.container}`}>
        {categoryItem.length > 0
          ? categoryItem?.map(c => (
              <Card
                img={`https://img.alltor.me/img${c.url}`}
                key={c.id}
                id={c.id}
                name={c.name}
                number={c.measure}
                price={c.price}
              />
            ))
          : "Malumot Mavjud Emas"}
      </div>
    </Layout>
  );
};

export default CategoryItem;
