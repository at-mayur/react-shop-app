import { useNavigate } from "react-router-dom";
import prodStyles from "../styles/productStyles.module.css"

function Product(productProp){

    const navigation = useNavigate();

    const openProductDetails = () => {
        navigation("/product-details", {state: {productId: productProp.product.id}});
    };

    return (
        <div onClick={openProductDetails} className={prodStyles.productContainer}>
            <div className={prodStyles.prodImgContainer}>
                <img alt={productProp.product.title} src={productProp.product.thumbnail} />
            </div>
            <p className={prodStyles.title}>{productProp.product.title}</p>
            <p className={prodStyles.brand}>{productProp.product.brand}</p>
            <div className={prodStyles.priceRatingContainer}>
                <p className={prodStyles.priceDisc}>
                    <span>{productProp.product.price}</span>
                    <span className={prodStyles.disc}>{productProp.product.discountPercentage} %</span>
                </p>
                <p>
                    <span className={prodStyles.ratingStar}><i className="fa-solid fa-star"></i></span>
                    <span>{productProp.product.rating}</span>
                </p>
            </div>
        </div>
    );
}

export default Product;