import styles from './Asosiy.module.css';
import Layout from '../../components/Layout/Layout';
import { useState } from 'react';
import Content from "../../components/Modal/Content";
import Modal from "../../components/Modal/Modal";
const Asosiy = () => {
	const [open, setOpen] = useState(false)
	return (
		<Layout>
			<h1 className='title'>Asosiy</h1>
			<button onClick={() => setOpen(true)}>Modal</button>
			{open && <Modal children={<Content setOpen={setOpen} />} />}
		</Layout>
	)
}

export default Asosiy;