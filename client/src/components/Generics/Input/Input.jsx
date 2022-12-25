import styles from './Input.module.css';

const Input = ({ type, ...rest }) => {
	return <input
		className={`main-text ${styles.input}`}
		type={type || 'input'}
		{...rest}
	/>
}

export default Input;