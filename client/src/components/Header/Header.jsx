import styles from './Header.module.css';
import { useLocation } from 'react-router-dom';

// components
import Form from '../Generics/Form/Form';
import Input from '../Generics/Input/Input';

// icons
import ArrowLeftIcon from '../../assets/icons/ArraowLeftIcon';
import ChervonIcon from '../../assets/icons/ChervonIcon';
import BellIcon from '../../assets/icons/BellIcon';
import ClockIcon from '../../assets/icons/ClockIcon';
import SearchIcon from '../../assets/icons/SearchIcon';


const Header = () => {
	const location = useLocation();
	const pathName = location.pathname.slice(1);
	return (
		<header className={styles.header}>
			<div className={styles['header__row']}>
				<div className={styles['header__left']}>
					<button className={styles['header__icon-wrapper']}>
						<ArrowLeftIcon />
					</button>
					<h4 className='subtitle light'>{pathName === '' ? 'Asosiy' : pathName}</h4>
					<ChervonIcon />
					<h4 className='subtitle'>Kategoriyalar</h4>
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
				</div>
			</div>
		</header>
	)
}

export default Header;