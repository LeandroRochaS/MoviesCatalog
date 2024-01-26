import { Route, Routes } from "react-router-dom";
import "./styles/style.scss";
import Home from "./pages/Home";
import Movie from "./pages/Movie";
import Search from "./pages/Search";
import Category from "./pages/Category";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movie/:id" element={<Movie />} />
        <Route path="/search/:word_search" element={<Search />} />
        <Route path="/categories" element={<Category />} />
      </Routes>
    </>
  );
}

export default App;
