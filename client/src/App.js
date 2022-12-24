import './App.css';
import Categories from './pages/Categories/Categories';
import {Routes, Route} from "react-router-dom"

function App() {
  return (
    <>
      <Routes>
        <Route path="/categories" element={<Categories/>} />
      </Routes>
    </>
  );
}

export default App;
