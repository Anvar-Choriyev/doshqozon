import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Categories from "./pages/Categories/Categories";
import navbar from "./utils/navbar";

function App() {
	return (
		<Routes>
			{navbar.map(({ id, path, element }) => <Route key={id()} path={path} element={element} />)}
			<Route path='*' element={<Navigate to={'/'} />} />
			<Route path="/menu/categories" element={<Categories/>}/>
		</Routes>
	);
}

export default App;