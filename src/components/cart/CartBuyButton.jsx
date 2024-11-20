import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import { clearCartItems } from "../../features/cart/cartSlice";
import { useDispatch } from "react-redux";
export default function CartBuyButton() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  function handleBuy() {
    const buy = async () => {
      const results = await Swal.fire({
        title: "Do you want to place the order",
        showDenyButton: true,
        denyButtonText: "Don't place order",
        confirmButtonText: "Place order",
      });
      if (results.isConfirmed) {
        await Swal.fire({
          title: "Done!",
          text: "order placed successfully!",
          icon: "success",
        });
        dispatch(clearCartItems());
        navigate("/");
      } else if (results.isDenied) {
        await Swal.fire({ title: "Order not place", text: "", icon: "info" });
      }
    };

    buy();
  }
  return (
    <button
      className="btn btn-success d-block w-100 fw-bold mt-3"
      onClick={handleBuy}
    >
      Buy Now
    </button>
  );
}
