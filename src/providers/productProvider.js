import { createContext } from "react";
import { useUpdatedProductState } from "../customHooks/productContextProvider";

const initialState = {
    productList: [],
    categoryList: [],
    updateProductList: (category) => {},
    skip: 0,
    limit: 20,
    setSkip: () => {},
    setLimit: () => {},
    fetchProducts: (limit, skip) => {}
};

export const prodAppContext = createContext(initialState);

function ProductProvider({children}){
    const currProductState = useUpdatedProductState();

    return (
        <prodAppContext.Provider value={currProductState}>
            {children}
        </prodAppContext.Provider>
    );
}

export default ProductProvider;