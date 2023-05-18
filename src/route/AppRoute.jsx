import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./../pages/HomePage";
import ProductPage from "./../pages/ProductPage";
import CartPage from "../pages/CartPage";

function AppRoute(){
    return (
        <Router>
            <Routes>
                <Route path="/" element={<HomePage/>} />
                <Route path="/product" element={<ProductPage/>} />
                <Route path="/cart" element={<CartPage/>} />
            </Routes>
        </Router>
    )
}

export default AppRoute;
