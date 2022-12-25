import styles from './Sidebar.module.css';
import USER from '../../assets/images/user.jpg';

import { useLocation, useNavigate } from 'react-router-dom';
import SidebarList from './SidebarList';


const Sidebar = ({ list }) => {
	const navigate = useNavigate();
	const location = useLocation();


	function goToLogin() {
		navigate('/login');
	}
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
					Elbek Suyunov
				</h3>
				<p className={`main-text ${styles["aside__user-desc"]}`}>
					Waiter 4h 46m
				</p>
				<button className={`main-text ${styles["aside__user-btn"]}`} onClick={goToLogin}>
					Open profile
				</button>
			</div>
		</aside>
	)
}

export default Sidebar;