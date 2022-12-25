import useId from '../hooks/useId';


// compnents
import Asosiy from "../pages/Asosiy/Asosiy";
import Sozlamalar from "../pages/Sozlamalar/Sozlamalar";
import Taomnoma from "../pages/Taomnoma/Taomnoma";
import Xisobot from "../pages/Xisobot/Xisobot";
import Login from "../pages/Login/Login";

// icons
import DashboardIcon from "../assets/icons/DashboardIcon";

const navbar = [
	{
		id: useId,
		element: <Asosiy />,
		title: 'Asosiy',
		path: '/',
		icon(type) {
			return <DashboardIcon type={type} />
		},
		private: true,
		hidden: false,
	},
	{
		id: useId,
		element: <Taomnoma />,
		title: 'Taomnoma',
		path: '/taomnoma',
		icon(type) {
			return <DashboardIcon type={type} />
		},
		private: true,
		hidden: false
	},
	{
		id: useId,
		element: <Xisobot />,
		title: 'Xisobot',
		path: '/xisobot',
		icon(type) {
			return <DashboardIcon type={type} />
		},
		private: true,
		hidden: false
	},
	{
		id: useId,
		element: <Sozlamalar />,
		title: 'Sozlamalar',
		path: '/sozlamalar',
		icon(type) {
			return <DashboardIcon type={type} />
		},
		private: true,
		hidden: false
	},
	{
		id: useId,
		element: <Login />,
		title: 'Login',
		path: '/Login',
		private: true,
		hidden: true
	},
]

export default navbar;