import React from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
export default function CartButton() {
  const navigate = useNavigate();
  const { cartItems } = useSelector((state) => {
    return state.cart;
  });

  const handleCartClick = () => {
    navigate("/cart");
  };

  const bgColor = cartItems.length === 0 ? "none" : "white";

  return (
    <button
      className="btn btn-outline-success d-md-block mt-3 mt-lg-0"
      onClick={handleCartClick}
    >
      <i className="bi bi-cart3"></i>
      <span className="mx-2">Checkout</span>
      <span className={`badge text-success bg-${bgColor}`}>
        {cartItems.length}
      </span>
    </button>
  );
}
