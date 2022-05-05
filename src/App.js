import Header from "./components/Header";
import SideBar from "./components/SideBar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Sector from "./pages/Sector";
import Home from "./pages/Home";

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
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
