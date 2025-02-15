<<<<<<< HEAD
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import Cart from './components/Cart'
import Nav from './components/Nav'
import '@fortawesome/fontawesome-free/css/all.min.css';
import Nopage from './components/Nopage'
=======
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Cart from "./components/Cart";
import Nav from "./components/Nav";
import "@fortawesome/fontawesome-free/css/all.min.css";
import Nopage from "./components/Nopage";
>>>>>>> bca458f18a96fe18d1b9d13300a7123a61015c10
function App() {
  return (
    <div>
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="*" element={<Nopage />} />
        </Routes>
      </BrowserRouter>
    </div>
<<<<<<< HEAD
  )
}

export default App
=======
  );
}

export default App;
>>>>>>> bca458f18a96fe18d1b9d13300a7123a61015c10
