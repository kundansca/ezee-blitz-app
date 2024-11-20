import Products from "../components/products/Products";
import { useSelector } from "react-redux";

export default function Home() {
  const { productsFromSearch } = useSelector((state) => {
    return state.products;
  });

  return <Products products={productsFromSearch} />;
}
