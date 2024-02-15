import { useState } from "react";
import { Routes } from "react-router-dom";
import Navbar from "./components/Navbar"
import { Route } from "react-router-dom";
import Home from "./pages/Home"
import Cart from "./pages/Cart"
import Checkout from './pages/Checkout';
import Login from "./pages/Login";
import Signup from "./pages/Signup";


const App = () => {

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (<div>
    <div className="bg-slate-900">
      <Navbar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
    </div>
    <Routes>
      <Route path="/" element={<Home isLoggedIn={isLoggedIn} />} />
      <Route path="/login" element={<Login setIsLoggedIn={setIsLoggedIn} />} />
      <Route path="/signup" element={<Signup setIsLoggedIn={setIsLoggedIn} />} />
      <Route path="/cart" element={<Cart />} />
      <Route path='/checkout' element={<Checkout />} />
    </Routes>
  </div>)
};

export default App;
