import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setSearchTerm } from "../../features/product/productSlice";

export default function SearchBar() {
  const { searchTerm } = useSelector((state) => {
    return state.products;
  });
  const dispatch = useDispatch();
  const handleChange = (event) => {
    dispatch(setSearchTerm(event.target.value));
  };
  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <form className="d-flex  ms-md-0 ms-lg-3" onSubmit={handleSubmit}>
      <input
        type="search"
        placeholder="Search Products"
        className="form-control ms-md-auto me-2"
        onChange={handleChange}
        value={searchTerm}
      />
    </form>
  );
}
