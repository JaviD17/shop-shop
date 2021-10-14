import React, { createContext, useContext } from "react";
import { createStore } from "redux";
import reducers from "./reducers/cartReducer";

export const store = createStore(reducers, {});

// const StoreContext = createContext();
// const { Provider } = StoreContext;
const StoreProvider = ({ value = [], ...props }) => {
    const [state, dispatch] = useProductReducer({
        products: [],
        cart: [],
        cartOpen: false,
        categories: [],
        currentCategory: '',
    });

    return <Provider value={[state, dispatch]} {...props} />;
};

// const useStoreContext = () => {
//     return useContext(StoreContext);
// }

export { StoreProvider, useStoreContext };