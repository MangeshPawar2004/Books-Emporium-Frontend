import { Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import ProductDetail from "./pages/productDetail/ProductDetail";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchCategories } from "./redux/CategorySlice";
import Collection from "./pages/collection/Collection";
import Newsletter from "./components/footer/Newsletter/Newsletter";
import contactComponent from "./components/ContactComponent/contactComponent";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCategories());
  }, []);
  return (
    <div className="App">
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/category/:categoryId?" element={<Collection />} />
          <Route path="/products/:productId" element={<ProductDetail />} />
        </Routes>
      </main>
      <Newsletter />

      <Footer />
    </div>
  );
}

export default App;
