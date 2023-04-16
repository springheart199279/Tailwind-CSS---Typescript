import { Routes, Route } from "react-router-dom";
import "./App.css";

import Home from "./pages/Home";
import Checkout from "./pages/foodDetails/Checkout";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/checkout" element={<Checkout />} />
    </Routes>
  );
}

export default App;
