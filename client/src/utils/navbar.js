import useId from "../hooks/useId";

// components
import Asosiy from "../pages/Asosiy/Asosiy";
import Sozlamalar from "../pages/Sozlamalar/Sozlamalar";
import Xisobot from "../pages/Xisobot/Xisobot";
import Login from "../pages/Login/Login";
import Categories from "../pages/Categories/Categories";
import CategoryItem from "../pages/Categories/CategoryItem/CategoryItem";

// icons
import Dashboard from "../assets/icons/Dashboard";
import Pan from "../assets/icons/Pan";
import Cheque from '../assets/icons/Cheque';
import Settings from '../assets/icons/Settings';

const navbar = [
	{
		id: useId,
		element: <Asosiy />,
		title: "Asosiy",
		path: "/asosiy",
		icon(isDark) {
			return <Dashboard isDark={isDark} />;
		},
		private: true,
		hidden: false,
	},
	{
		id: useId,
		element: <Categories />,
		title: "Taomnoma",
		icon(isDark) {
			return <Pan isDark={isDark} />;
		},
		path: "/taomnoma/kategoriyalar",
		private: true,
		hidden: false,
	},
	{
		id: useId,
		element: <CategoryItem />,
		title: "CategoryItem",
		path: "/taomnoma/kategoriyalar/:id",
		private: true,
		hidden: true,
		icon(isDark) {
			return <Settings isDark={isDark} />;
		},
	},
	{
		id: useId,
		element: <Xisobot />,
		title: "Xisobot",
		path: "/xisobot",
		icon(isDark) {
			return <Cheque isDark={isDark} />;
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
			return <Settings isDark={isDark} />;
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
];

export default navbar;
