import { Routes, Route, Navigate, useNavigate } from "react-router-dom";
import navbar from "./utils/navbar";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import { useContext, useEffect } from "react";
import AppContext from "./context/AppContext";


function App() {
	const token = localStorage.getItem("token");
	const user = localStorage.getItem("user");

	const ctx = useContext(AppContext);
	const navigate = useNavigate();

	useEffect(() => {
		if (!token) {
			navigate("/login");
		}
		ctx.setAppData({
			user: JSON.parse(user),
			token,
			isAuth: token?.trim().length > 0,
		});
	}, [token]);
	return (
		<>
			<ToastContainer />
			<Routes>
				{navbar.map(({ id, path, element }) => <Route key={id()} path={path} element={element} />)}
				<Route path='*' element={<Navigate to={'/asosiy'} />} />
			</Routes>
		</>
	);
}

export default App;