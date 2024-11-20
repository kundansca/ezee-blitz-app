import CartBuyButton from "./CartBuyButton";
import { useSelector } from "react-redux";
import { nanoid } from "@reduxjs/toolkit";
import Price from "../extra/Price";

export default function CartNumbers() {
  const { cartNumbers } = useSelector((state) => {
    return state.cart;
  });

  const items = [
    { title: "SubTotal", price: cartNumbers.subTotal },
    { title: "Shipping", price: cartNumbers.shipping },
    { title: "Tax", price: cartNumbers.tax },
    { title: "Total (INR)", price: cartNumbers.total },
  ];
  return (
    <div id="cart-numbers">
      <ul className="list-group mb-3">
        {items.map((item) => {
          return (
            <li
              className="list-group-item d-flex justify-content-between align-item-center"
              key={nanoid()}
            >
              <span>{item.title}</span>
              <span className="text-muted">
                <Price value={item.price} decimals={2} />
              </span>
            </li>
          );
        })}
        <CartBuyButton />
      </ul>
    </div>
  );
}
