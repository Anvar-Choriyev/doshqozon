import styles from './Layout.module.css';

import navbar from '../../utils/navbar';

import Sidebar from '../Sidebar/Sidebar';
import Header from '../Header/Header';

const Layout = ({ children }) => {
	return (
		<div className={styles.layout}>
			<Sidebar list={navbar} />
			<section className={styles['layout__right']}>
				<Header />
				<div className={styles['layout__child']}>
					{children}
				</div>
			</section>
		</div>
	)
}

export default Layout;