import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import navbar from "./utils/navbar";

function App() {
	return (
		<BrowserRouter>
			<Routes>
				{navbar.map(({ id, path, element }) => <Route key={id()} path={path} element={element} />)}
				<Route path='*' element={<Navigate to={'/'} />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;