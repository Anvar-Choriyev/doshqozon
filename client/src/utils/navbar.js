import useId from "../hooks/useId";

const navbar = [
	{
		id: useId,
		element: <h1>Asosiy</h1>,
		title: 'Asosiy',
		path: '/home',
		private: true,
		hidden: false,
		active: true,
	},
	{
		id: useId,
		element: <h1>Taomnoma</h1>,
		title: 'Taomnoma',
		path: '/taomnoma',
		private: true,
		hidden: false
	},
	{
		id: useId,
		element: <h1>Xisobot</h1>,
		title: 'Xisobot',
		path: '/xisobot',
		private: true,
		hidden: false
	},
	{
		id: useId,
		element: <h1>Sozlamalar</h1>,
		title: 'Sozlamalar',
		path: '/sozlamalar',
		private: true,
		hidden: false
	},
]

export default navbar;