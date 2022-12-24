import Categories from './pages/Categories/Categories';
import {Routes, Route} from "react-router-dom"
import Login from "./pages/Login/Login";

function App() {
  return (
		<>
    <Routes>
        <Route path="/" element={<Login/>} />
        <Route path="/categories" element={<Categories/>} />
    </Routes>
		</>
	);
}

export default App;
