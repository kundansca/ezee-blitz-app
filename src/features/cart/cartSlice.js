import { createSlice } from "@reduxjs/toolkit";
if (localStorage.getItem("cartItems") === null) {
  localStorage.setItem("cartItems", JSON.stringify([]));
}
const initialState = {
  cartItems: JSON.parse(localStorage.getItem("cartItems")),
  cartNumbers: { subTotal: 0, shipping: 0, tax: 0, total: 0 },
};
export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      let { payload: item } = action;
      state.cartItems.push({ ...item, quantity: 1 });
      localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
    },
    removeFromCart: (state, action) => {
      let { payload: item } = action;
      let index = state.cartItems.findIndex(
        (cartItem) => cartItem.id === item.id
      );
      state.cartItems.splice(index, 1);
      localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
    },
    setQuantity: (state, action) => {
      let { item, quantity } = action.payload;
      state.cartItems = state.cartItems.map((cartItem) => {
        return cartItem.id === item.id
          ? { ...cartItem, quantity: cartItem.quantity + quantity }
          : cartItem;
      });
      state.cartItems = state.cartItems.filter(
        (cartItem) => cartItem.quantity >= 1
      );
    },
    setCartNumbers: (state) => {
      let subTotal = 0,
        shipping = 0,
        tax = 0,
        total = 0;
      for (let item of state.cartItems) {
        subTotal += item.price * item.quantity;
        shipping += 40 * item.quantity;
      }
      tax = (subTotal / 100) * 18;
      total = subTotal + tax;
      state.cartNumbers = { subTotal, shipping, tax, total };
    },
    clearCartItems: (state) => {
      state.cartItems = [];
      localStorage.clear("cartItems");
    },
  },
});
export const {
  addToCart,
  removeFromCart,
  setQuantity,
  setCartNumbers,
  clearCartItems,
} = cartSlice.actions;
export default cartSlice.reducer;
