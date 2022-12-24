import styles from './Sidebar.module.scss';
import DASHBOARD_LIGHT from '../../assets/images/icons/dashboard-light.svg'
import DASHBOARD_DARK from '../../assets/images/icons/dashboard-dark.svg'
import USER from '../../assets/images/img/user.jpg';

import { Link } from 'react-router-dom';
import navbar from '../../utils/navbar';

const Sidebar = () => {
	return (
		<aside className={styles.sidebar}>
			<nav className={styles['sidebar__menu']}>
				<ul className={styles['sidebar__list']}>
					{navbar.map(({ id, path, element, title, active }) =>
						<li key={id()} className={styles['sidebar__item']}>
							<Link
								to={path}
								element={element}
								className={`subtitle ${styles['sidebar__link']} ${({ isActive }) => console.log(isActive)}`}
							>
								<img src={active ? DASHBOARD_DARK : DASHBOARD_LIGHT} ale={'icon'} />
								<span>{title}</span>
							</Link>
						</li>
					)}
				</ul>
			</nav>
			<div className={`${styles["sidebar__user"]} ${styles['user-sidebar']}`}>
				<div className={styles["user-sidebar__pic"]}>
					<img src={USER} alt='' />
				</div>
				<h3 className={styles["user-sidebar__title"]}>
					Elbek Suyunov
				</h3>
				<p className={styles["user-sidebar__desc"]}>
					Waiter 4h 46m
				</p>
				<button className={styles["user-sidebar__btn"]}>
					Open profile
				</button>
			</div>
		</aside>
	)
}

export default Sidebar;