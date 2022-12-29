import useId from "../hooks/useId";

// compnents
import Asosiy from "../pages/Asosiy/Asosiy";
import Sozlamalar from "../pages/Sozlamalar/Sozlamalar";
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
		path: "/asosiy",
		icon(isDark) {
			return <DashboardIcon isDark={isDark} />;
		},
		private: true,
		hidden: false,
	},
	{
		id: useId,
		element: <Categories />,
		title: "Taomnoma",
		path: "/taomnoma/katego'riya",
		icon(isDark) {
			return <PanIcon isDark={isDark} />;
		},
		private: true,
		hidden: false,
	},
	{
		id: useId,
		element: <CategoryItem />,
		title: "CategoryItem",
		path: "/taomnoma/katego'riya/:id",
		private: true,
		hidden: true,
	},
	{
		id: useId,
		element: <Xisobot />,
		title: "Xisobot",
		path: "/xisobot",
		icon(isDark) {
			return <ChequeIcon isDark={isDark} />;
		},
		private: true,
		hidden: false,
	},
	{
		id: useId,
		element: <Sozlamalar />,
		title: "Sozlamalar",
		path: "/sozlamalar",
		icon(isDark) {
			return <SettingsIcon isDark={isDark} />;
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
