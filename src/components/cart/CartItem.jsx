import { useDispatch } from "react-redux";
import { setQuantity } from "../../features/cart/cartSlice";
import Price from "../extra/Price";
export default function CartItem(props) {
  const { item } = props;
  const dispatch = useDispatch();
  const handleClick = (quantity) => {
    dispatch(setQuantity({ item: item, quantity: quantity }));
  };
  return (
    <li className="list-group-item">
      <div className="my-0 d-flex justify-content-between align-center">
        <span className="fw-bolder fs-6 me-auto text-capitalize">
          {item.name}(<Price value={item.price} />)
        </span>
        <div className="btn-group">
          <button
            className="btn border"
            onClick={() => {
              handleClick(-1);
            }}
          >
            -
          </button>
          <button className="btn border" disabled>
            {item.quantity}
          </button>
          <button
            className="btn border"
            onClick={() => {
              handleClick(1);
            }}
          >
            +
          </button>
        </div>
      </div>
      <p className="text-muted mb-0 col-3 w-100 description">
        {item.description}
      </p>
    </li>
  );
}
