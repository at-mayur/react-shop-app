import Product from "./product";

import prodListStyles from "../styles/productListStyles.module.css";
import { useProductState } from "../customHooks/productContextProvider";

function ProductList(){
    const productList = useProductState().productList;
    const categoryList = useProductState().categoryList;
    const updateProductList = useProductState().updateProductList;
    const skip = useProductState().skip;
    const setSkip = useProductState().setSkip;
    const fetchProducts = useProductState().fetchProducts;

    const handleCategoryChange = (event) => {
        const selectedCategory = event.target.value;
        updateProductList(selectedCategory);
    };

    const loadMoreProducts = () => {
        if(skip===100){
            return;
        }

        fetchProducts(20, skip+20);
        setSkip(skip+20);
    };

    const loadPrevProducts = () => {
        if(skip===0){
            return;
        }

        fetchProducts(20, skip-20);
        setSkip(skip-20);
    };

    return (
        <div className={prodListStyles.listContainer}>

            <header>
                <h3>Products</h3>
                <div>
                    <label htmlFor="catSelect">Category : </label>
                    <select onChange={handleCategoryChange} className={prodListStyles.catSelect} id="catSelect">
                        <option value={"all"}>All</option>

                        {categoryList.map((category, index) => {
                            return (
                                <option value={category} key={index}>{category}</option>
                            );
                        })}
                    </select>
                </div>
            </header>

            <div className={prodListStyles.productListContainer}>
                {productList.map((product) => {
                    return (<Product product={product} key={product.id} />);
                })}

                <div className={prodListStyles.loadPrevNxt}>
                    <button onClick={loadPrevProducts} type="button">Previous</button>
                    <button onClick={loadMoreProducts} type="button">Next</button>
                </div>
            </div>
            
        </div>
    );
}

export default ProductList;