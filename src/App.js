import Header from "./components/Header";
import SideBar from "./components/SideBar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Sector from "./pages/Sector";
import Home from "./pages/Home";
import Product from "./pages/Product";
import NewProduct from "./pages/NewProduct";
import Purchased from "./pages/Purchased";

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
            <Route path="new_product" element={<NewProduct />} />
            <Route path="purchase" element={<Purchased />} />
            {/* <Route path="purchaseT" element={<PurchaseT />} /> */}
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
