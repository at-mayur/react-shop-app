import { useContext, useEffect, useState } from "react";
import { prodAppContext } from "../providers/productProvider";
import { getAllCategories, getAllProducts, getAllProductsByCategory } from "../apiRequests/getData";


export const useProductState = () => {
    return useContext(prodAppContext);
};

export const useUpdatedProductState = () => {

    const [productList, setProductList] = useState([]);
    const [categoryList, setCategoryList] = useState([]);
    const [skip, setSkip] = useState(0);
    const [limit, setLimit] = useState(20);

    useEffect(() => {

        const getAllProdCat = async () => {
            const prodList = await getAllProducts(limit, skip);
            const catList = await getAllCategories();

            setProductList(prodList.products);
            setCategoryList(catList);
        };

        getAllProdCat();

    }, []);

    const fetchProducts = (limit, skip) => {
        getAllProducts(limit, skip)
        .then((data) => {
            setProductList(data.products);
        });
    };

    const updateProductList = (category) => {
        if(!category){
            return;
        }

        if(category==="all"){
            getAllProducts(limit, skip)
            .then((data) => {
                setProductList(data.products)
            });

            return;
        }

        getAllProductsByCategory(category)
        .then((data) => {
            setProductList(data.products);
        });
    };

    return {
        productList,
        categoryList,
        updateProductList,
        skip,
        setSkip,
        limit,
        setLimit,
        fetchProducts
    };
};