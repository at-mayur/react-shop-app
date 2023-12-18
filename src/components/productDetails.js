import { useEffect, useState } from "react";
import prodDtlStyles from "../styles/productDetailStyles.module.css";

import { Link, useLocation } from "react-router-dom";
import { getAllProductById } from "../apiRequests/getData";

function ProductDetails(){
    const location = useLocation();

    const {productId} = location.state;

    let currSelectedImage = 0;

    const [product, setProduct] = useState({
        title: "",
        description: "",
        price: "",
        discountPercentage: "",
        rating: "",
        stock: 0,
        brand: "",
        category: "",
        images: []
    });

    useEffect(() => {
        getAllProductById(productId)
        .then((data) => {
            setProduct(data);
        });
    }, []);

    const handlePrevImageChange = () => {
        if(currSelectedImage===0){
            return;
        }

        const currImg = document.getElementById(`prodImg${currSelectedImage}`);
        const prevImg = document.getElementById(`prodImg${currSelectedImage-1}`);

        if(currImg && prevImg){
            currImg.classList.remove(prodDtlStyles.showProdImg);
            prevImg.classList.add(prodDtlStyles.showProdImg);
            currSelectedImage--;
        }
    };

    const handleNextImageChange = () => {
        if(currSelectedImage>=product.images.length){
            return;
        }

        const currImg = document.getElementById(`prodImg${currSelectedImage}`);
        const nxtImg = document.getElementById(`prodImg${currSelectedImage+1}`);

        if(currImg && nxtImg){
            currImg.classList.remove(prodDtlStyles.showProdImg);
            nxtImg.classList.add(prodDtlStyles.showProdImg);
            currSelectedImage++;
        }
    };

    return (
        <div className={prodDtlStyles.mainContainer}>

            <header>
                <Link className={prodDtlStyles.backLink} to={"/"}>
                    <span><i className="fa-solid fa-left-long"></i></span>
                    Back
                </Link>
            </header>
            
            <div className={prodDtlStyles.detailsContainer}>
                <div className={prodDtlStyles.prodImagesContainer}>

                    <div className={prodDtlStyles.imageList}>

                        {product.images.map((image, index) => {
                            if(index===0){
                                return (
                                    <img id={"prodImg"+index} className={prodDtlStyles.showProdImg} alt={"product"+index} src={image} key={index} />
                                );
                            }

                            return (
                                <img id={"prodImg"+index} alt={"product"+index} src={image} key={index} />
                            );
                        })}

                    </div>

                    <div className={prodDtlStyles.prevNxtContainer}>
                        <p onClick={handlePrevImageChange} className={prodDtlStyles.prevBtn}><i className="fa-solid fa-chevron-left"></i></p>
                        <p onClick={handleNextImageChange} className={prodDtlStyles.nxtBtn}><i className="fa-solid fa-chevron-right"></i></p>
                    </div>
                </div>

                <div className={prodDtlStyles.dtlsContainer}>
                        <p>#{product.category}</p>
                        <h1>{product.title}</h1>
                        <h3>{product.brand}</h3>
                        <p className={prodDtlStyles.prodDesc}>{product.description}</p>
                        <p>
                            <span className={prodDtlStyles.prodPrice}>
                                <i className="fa-solid fa-indian-rupee-sign"></i>
                                &ensp;
                                {product.price}
                            </span>
                            <span className={prodDtlStyles.discount}>
                                {product.discountPercentage}
                                &ensp;
                                <i className="fa-solid fa-percent"></i>
                            </span>
                        </p>
                        <p>
                            <span className={prodDtlStyles.starIcon}><i className="fa-solid fa-star"></i></span>
                            <span>{product.rating}</span>
                        </p>
                        <div className={prodDtlStyles.buyAction}>
                            {
                                product.stock>0 ? (<p className={prodDtlStyles.inStock}>In Stock</p>) : (<p className={prodDtlStyles.outStock}>Out Of Stock</p>)
                            }
                            <button type="button">
                                Buy Now
                            </button>
                        </div>
                </div>
            </div>

        </div>
    );
}


export default ProductDetails;