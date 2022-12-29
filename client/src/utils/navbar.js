import useId from "../hooks/useId";

// compnents
import Asosiy from "../pages/Asosiy/Asosiy";
import Sozlamalar from "../pages/Sozlamalar/Sozlamalar";
import Taomnoma from "../pages/Taomnoma/Taomnoma";
import Xisobot from "../pages/Xisobot/Xisobot";
import Login from "../pages/Login/Login";
import Categories from "../pages/Categories/Categories";
import CategoryItem from "../pages/Categories/CategoryItem/CategoryItem";

// icons
import DashboardIcon from "../assets/icons/DashboardIcon";
import PanIcon from "../assets/icons/PanIcon";
import ChequeIcon from '../assets/icons/ChequeIcon';
import SettingsIcon from '../assets/icons/SettingsIcons';



const navbar = [
	{
		id: useId,
		element: <Asosiy />,
		title: "Asosiy",
		path: "/",
		icon(type) {
			return <DashboardIcon type={type} />;
		},
		private: true,
		hidden: false,
	},
	{
		id: useId,
		element: <Taomnoma />,
		title: "Taomnoma",
		path: "/taomnoma",
		icon(type) {
			return <DashboardIcon type={type} />;
		},
		private: true,
		hidden: false,
	},
	{
		id: useId,
		element: <Xisobot />,
		title: "Xisobot",
		path: "/xisobot",
		icon(type) {
			return <DashboardIcon type={type} />;
		},
		private: true,
		hidden: false,
	},
	{
		id: useId,
		element: <Sozlamalar />,
		title: "Sozlamalar",
		path: "/sozlamalar",
		icon(type) {
			return <DashboardIcon type={type} />;
		},
		private: true,
		hidden: false,
	},
	{
		id: useId,
		element: <Login />,
		title: "Login",
		path: "/Login",
		private: true,
		hidden: true,
	},
	{
		id: useId,
		element: <Categories />,
		title: "Categories",
		path: "/taomnoma/kategoriyalar",
		private: true,
		hidden: true,
	},
	{
		id: useId,
		element: <CategoryItem />,
		title: "CategoryItem",
		path: "/taomnoma/kategoriyalar/:id",
		private: true,
		hidden: true,
	},
];

export default navbar;
