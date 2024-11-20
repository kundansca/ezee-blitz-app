import NoContent from "../components/extra/NOtContent";
import { useSelector } from "react-redux";
import CartItem from "../components/cart/CartItem";
import CartNumbers from "../components/cart/CartNumbers";
export default function Cart() {
  const { cartItems } = useSelector((state) => {
    return state.cart;
  });

  if (cartItems.length === 0) {
    return <NoContent text="Nothing In Your Cart" btnText="Browse Products" />;
  }
  return (
    <div className="row py-3">
      <div className="col-12 col-md-10 col-xl-8 mx-auto">
        <div
          id="cart"
          className="border p-3 bg-white text-dark my-3 my-md-0 rounded"
        >
          <h4 className="mb-3 px-1">Cart</h4>
          <ul className="list-group mb-3">
            {cartItems.map((product) => {
              return <CartItem item={product} key={product.id} />;
            })}
          </ul>
          <CartNumbers />
        </div>
      </div>
    </div>
  );
}
