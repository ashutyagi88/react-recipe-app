import Home from "./home";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Cuisine from "./Cuisine";
import Searched from "./Searched";
import Recipe from "./Recipe";

function Pages() {
  return (
    <Routes>
      <Route path="/" element={<Home></Home>} />
      <Route path="/cuisine/:type" element={<Cuisine></Cuisine>}></Route>
      <Route path="/searched/:search" element={<Searched></Searched>}></Route>
      <Route path="/recipe/:name" element={<Recipe></Recipe>}></Route>
    </Routes>
  );
}

export default Pages;
