import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Sidebar from "./components/Sidebar/Sidebar";
import navbar from "./utils/navbar";

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route element={<Sidebar />} path="/" />
				{navbar.map(({ id, path, element }) => <Route key={id()} path={path} element={element} />)}
				<Route path='/' element={<Navigate to={'/home'} />} />
				<Route path='*' element={<h1>Not Found 404</h1>} />
			</Routes>
		</BrowserRouter>

	);
}

export default App;