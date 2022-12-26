import { useEffect, useState } from "react"
import http from "../../../utils/axios-instance"
import { toast } from "react-toastify"
import { useParams } from "react-router-dom";
import  Layout  from "../../../components/Layout/Layout";
const CategoryItem = () => {
  const { id } = useParams();
console.log(id);
    const [categoryItem, setCategoryItem] = useState([])
    useEffect(()=>{
        getAllCategoryItem()
    },[])
    const getAllCategoryItem = async() => {
        try {
            const res = await http({
                url:`/categories/${id}`,
                method: "GET"
            })
            console.log(res)
            setCategoryItem(res.data.data)
        } catch (error) {
            console.log(error);
            toast.error(error.response.data.message)
        }
    }
    return ( <>
        <Layout>
            <h1>Hello</h1>
    {console.log(categoryItem)}
</Layout>
    </> );
}
 
export default CategoryItem;