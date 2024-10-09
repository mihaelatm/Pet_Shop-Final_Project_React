import { Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./layouts/Header";
import Home from "./pages/Home";
import Categories from "./pages/Categories";
import AllProducts from "./pages/AllProducts";
import DiscountItems from "./pages/DiscountItems";
import Cart from "./pages/Cart";
import Footer from "./layouts/Footer/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/categories/:id" element={<Categories />} />
        <Route path="/products" element={<AllProducts />} />
        <Route path="/sales" element={<DiscountItems />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/discounts" element={<DiscountItems />} />

        {/* <Route path="*" element={<ErrorPage />} /> */}
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
