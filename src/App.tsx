import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";
import Home from "./components/Home";
import Cart from "./components/Cart";
import Nav from "./components/Nav";
import Nopage from "./components/Nopage";
import Regester from "./components/Regester";

function App() {
  return (
    <div>
      <BrowserRouter>
        <ToastContainer />
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart/>} />
          <Route path="*" element={<Nopage />} />
          <Route path="/register" element={<Regester />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
