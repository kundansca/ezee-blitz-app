import React from "react";
import { useNavigate } from "react-router-dom";
import Price from "../extra/Price";
import ProductButton from "./ProductButton";
export default function Product(props) {
  const { product } = props;
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(`/single/${product.id}`);
  };

  const imgPath = `/images/${product.id}.jpg`;
  return (
    <div className="col">
      <div className="card h-100" id="product">
        <img
          src={imgPath}
          alt="image"
          title={product.name}
          className="card-img-top pointer"
          onClick={handleClick}
        />
        <div className="card-body p-4">
          <div className="text-center">
            <h6 className="fw-bolder text-capitalize">{product.name}</h6>
            <span>
              <Price value={product.price} />
            </span>
          </div>
        </div>
        <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
          <ProductButton product={product} />
        </div>
      </div>
    </div>
  );
}
