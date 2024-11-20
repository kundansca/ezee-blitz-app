import ProductButton from "../components/products/ProductButton";
import { useParams } from "react-router-dom";

import Line from "../components/extra/Line";
import Products from "../components/products/Products";
import { useSelector, useDispatch } from "react-redux";
import { setSingleProduct } from "../features/product/productSlice";
import { useEffect } from "react";
import Price from "../components/extra/Price";
export default function Single() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { single, singleSimilarProducts } = useSelector((state) => {
    return state.products;
  });

  const imgPath = `/images/${single.id}.jpg`;
  useEffect(() => {
    dispatch(setSingleProduct(+id));
  }, [id]);
  return (
    <div
      className="row justify-content-center align-items-center text-white mx-auto"
      id="single"
    >
      <div className="col-md-6">
        <img
          src={imgPath}
          alt={single.name}
          className="card-img-top mb-5 mb-md-0 p-0 p-lg-5"
        />
      </div>
      <div className="col-md-6 text-center text-md-start ">
        <h2 className="fs-1 fw-bold text-capitalize">{single.name}</h2>
        <div className="fs-5 mb-2">
          <Price value={single.price} />
        </div>
        <p className="lead">{single.description}</p>
        <ProductButton product={single} />
      </div>
      <Line />
      <h2 className="text-white my-4 text-center ">
        Similar Products like this
      </h2>
      <Products products={singleSimilarProducts} />
    </div>
  );
}
