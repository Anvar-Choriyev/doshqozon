import styles from './Sidebar.module.css';
import USER from '../../assets/images/user.jpg';

import { useLocation } from 'react-router-dom';
import { useContext } from 'react';
import AppContext from '../../context/AppContext';

import SidebarList from './SidebarList';


const Sidebar = ({ list }) => {
	const location = useLocation();
	const { user } = useContext(AppContext);

	return (
		<aside className={styles['aside']}>
			<nav className={styles['aside__menu']}>
				<ul className={styles['aside__list']}>
					<SidebarList list={list} styles={styles} location={location} />
				</ul>
			</nav>
			<div className={styles["aside__user"]}>
				<div className={styles["aside__user-pic"]}>
					<img src={USER} alt='' />
				</div>
				<h3 className={styles["aside__user-title"]}>
					{user?.name}
				</h3>
				<p className={`main-text ${styles["aside__user-desc"]}`}>
					{user?.userRole}
				</p>
				<button className={`main-text ${styles["aside__user-btn"]}`}>
					Open profile
				</button>
			</div>
		</aside>
	)
}

export default Sidebar;