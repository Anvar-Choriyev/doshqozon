import { NavLink } from "react-router-dom";

const SidebarList = ({ list, styles, location }) => {
	return (
		<>
			{list.map(({ id, path, title, icon, hidden }) =>
				!hidden && <li
					key={id()}
					className={styles['aside__item']}
				>
					<NavLink
						to={path}
						className={`subtitle ${styles['aside__link']}`}
					>
						{location.pathname.includes(path) ? icon(true) : icon()}
						<p>{title}</p>
					</NavLink>
				</li>
			)}
		</>
	)
}

export default SidebarList;