import styles from './Taomnoma.module.css';
import Layout from '../../components/Layout/Layout';
import Categories from "../../pages/Categories/Categories";

const Taomnoma = () => {
	return (
		<Layout>
			{/* <h1 className='title'>Taomnoma</h1> */}
			<Categories/>

		</Layout>
	)
}

export default Taomnoma;