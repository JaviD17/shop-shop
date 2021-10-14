import { createStore } from "redux";
import reducers from "./reducers/cartReducer";

const store = createStore();

export default store = ({ value = [], ...props }) => {
  const [state, dispatch] = reducers({
    products: [],
    cart: [],
    cartOpen: false,
    categories: [],
    currentCategory: "",
  });
  return (value = { store }), { ...props };
};
