import NavBar from "./components/nav/NavBar";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import Single from "./pages/Single";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setCartNumbers } from "./features/cart/cartSlice";

function App() {
  const { cartItems } = useSelector((state) => {
    return state.cart;
  });
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setCartNumbers());
  }, [cartItems]);
  return (
    <div className="wrapper bg-dark text-white">
      <NavBar title="Ezee-Cart-Blitz" />
      <div className="container mt-5 py-5 px-3 px-md-5">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="single/:id" element={<Single />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
