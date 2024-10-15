import { Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./layouts/Header";
import Footer from "./layouts/Footer/Footer";
import Home from "./pages/Home";
import Categories from "./pages/Categories";
import CategoryProducts from "./pages/CategoryProducts";
import DiscountItems from "./pages/DiscountItems";
import AllProducts from "./pages/AllProducts";
import Cart from "./pages/Cart";
import Product from "./pages/Product";
import ErrorPage from "./pages/ErrorPage";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/categories/products" element={<CategoryProducts />} />
        <Route path="/product/:id" element={<Product />} />
        <Route path="/products/all" element={<AllProducts />} />
        <Route path="/sales" element={<DiscountItems />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
