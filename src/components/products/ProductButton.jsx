import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../../features/cart/cartSlice";
import { removeFromCart } from "../../features/cart/cartSlice";
export default function ProductButton(props) {
  const { product } = props;
  const dispatch = useDispatch();
  let { cartItems } = useSelector((state) => {
    return state.cart;
  });
  const handleAddClick = () => {
    dispatch(addToCart(product));
  };
  const handleRemoveClick = () => {
    dispatch(removeFromCart(product));
  };
  let isPresentInCart = Boolean(
    cartItems.find((item) => item.id === product.id)
  );
  if (isPresentInCart) {
    return (
      <button
        className="btn btn-outline-danger d-block w-100"
        onClick={handleRemoveClick}
      >
        Remove from Cart
      </button>
    );
  } else {
    return (
      <button
        className="btn btn-outline-success d-block w-100"
        onClick={handleAddClick}
      >
        Add to Card
      </button>
    );
  }
}
