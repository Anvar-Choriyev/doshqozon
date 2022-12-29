import PAN_LIGHT from '../images/sidebar-icons/pan-light.svg';
import PAN_DARK from '../images/sidebar-icons/pan-dark.svg';

const PanIcon = ({ isDark }) => <img src={isDark ? PAN_DARK : PAN_LIGHT} alt="" />
export default PanIcon;