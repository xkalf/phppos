import Header from "./components/Header";
import SideBar from "./components/SideBar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Sector from "./pages/Sector";
import Home from "./pages/Home";
import Product from "./pages/Product";
import NewProduct from "./pages/NewProduct";

function App() {
  return (
    <BrowserRouter>
      <div className="h-screen">
        <Header />
        <div className="flex h-[94%]">
          <SideBar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="sector" element={<Sector />} />
            <Route path="product" element={<Product />} />
            <Route path="new_product" elemen={<NewProduct />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
