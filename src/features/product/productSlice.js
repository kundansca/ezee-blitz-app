import { createSlice } from "@reduxjs/toolkit";
import data from "../../data";
import { uniq, sortBy, find } from "lodash";
import { loremIpsum } from "lorem-ipsum";
import { stringSimilarity } from "string-similarity-js";
data.forEach((product) => {
  product.description = loremIpsum();
});
const categories = uniq(data.map((product) => product.category)).sort();
const DEAFULT_CATEGORY = "All";
const initialState = {
  products: data,
  productsFromSearch: data,
  categories: [DEAFULT_CATEGORY, ...categories],
  selectedCategory: DEAFULT_CATEGORY,
  single: "",
  singleSimilarProducts: [],
  searchTerm: "",
};
export const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    setSearchTerm: (state, action) => {
      const { payload: searchTerm } = action;
      state.searchTerm = searchTerm;
      state.productsFromSearch = state.products;
      if (state.searchTerm.length > 0) {
        state.productsFromSearch.forEach((product) => {
          product.simScore = stringSimilarity(
            `${product.name} ${product.category}`,
            state.searchTerm
          );

          state.productsFromSearch = sortBy(
            state.productsFromSearch,
            "simScore"
          ).reverse();
        });
      }
    },
    setSelectedCategory: (state, action) => {
      const { payload: selectedCategory } = action;
      state.selectedCategory = selectedCategory;
      state.searchTerm = "";
      if (DEAFULT_CATEGORY === selectedCategory) {
        state.productsFromSearch = state.products;
      } else {
        state.productsFromSearch = state.products.filter(
          (product) => product.category === selectedCategory
        );
      }
    },
    setSingleProduct: (state, action) => {
      let { payload: id } = action;
      state.single = state.products.find((product) => product.id === id);
      state.singleSimilarProducts = state.products.filter(
        (product) =>
          product.category === state.single.category &&
          product.id !== state.single.id
      );
    },
  },
});
export const { setSearchTerm, setSelectedCategory, setSingleProduct } =
  productSlice.actions;
export default productSlice.reducer;
