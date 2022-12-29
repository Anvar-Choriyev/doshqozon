import styles from './Header.module.css';
import { useLocation, useNavigate } from 'react-router-dom';
import navbar from '../../utils/navbar';
import { useContext } from 'react';
import AppContext from '../../context/AppContext';

// components
import Form from '../Generics/Form/Form';
import Input from '../Generics/Input/Input';

// icons
import ArrowIcon from '../../assets/icons/ArraowIcon';
import ChervonIcon from '../../assets/icons/ChervonIcon';
import BellIcon from '../../assets/icons/BellIcon';
import ClockIcon from '../../assets/icons/ClockIcon';
import SearchIcon from '../../assets/icons/SearchIcon';

const Header = ({ innerRoute }) => {
	const navigate = useNavigate();
	const pathname = useLocation().pathname;
	const exactRoute = navbar.find(elem => pathname.includes(elem.path));
	const exactPathName = exactRoute.title;
	const exactInnerRoute = pathname.replace(`/${exactPathName.toLowerCase()}/`, '').replace('/', '').replace(/\d/ig, '');

	const ctx = useContext(AppContext);

	function logOut() {
		ctx.onReset();
	}

	function goBack() {
		navigate(-1);
	}

	return (
		<header className={styles.header}>
			<div className={styles['header__row']}>
				<div className={styles['header__left']}>
					<button className={styles['header__icon-wrapper']} onClick={goBack}>
						<ArrowIcon />
					</button>
					<h4 className='subtitle light'>{exactPathName}</h4>
					<ChervonIcon />
					<h4 className='subtitle'>{innerRoute || exactInnerRoute}</h4>
				</div>
				<div className={styles['header__right']}>
					<BellIcon />
					<ClockIcon />
					<Form>
						<div className={styles['header__form-wrapper']}>
							<SearchIcon />
							<Input placeholder='Search...' />
						</div>
					</Form>
					<button className={`main-text`} onClick={logOut}>Log out</button>
				</div>
			</div>
		</header>
	)
}

export default Header;