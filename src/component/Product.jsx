import React from "react";
import "../assets/css/Product.css";
import icecream from "../assets/burger-category.png";

const Product = (props) => {
    return (
        <>
            <div className="product-card" key={props.value._id}>
                        <div className="product-wrapper">                           
                            <img className="product-img" src={icecream} />                               
                        </div>
                    
                        <div className="product-card-body">
                            <div className="product-data">
                                <p className="product-title">
                                    <b>{props.value.productName}</b>
                                </p>
                                <p className="product-details">
                                    {props.value.productDetails} {props.value.productPrice}
                                </p>
                            </div>

                            <div className="product-outer">
                                <div className="product-inner">
                                    <button className="product-button" type="submit"><i className="fa fa-file-text-o"></i> -</button>
                                </div>
                                <div className="product-inner product-count">1</div>
                                <div className="product-inner">
                                    <button className="product-button" type="submit"><i className="fa fa-code"></i> +</button>
                                </div>
                            </div>
                        </div>
                    </div>                
            
        </>
    );
}

export default Product;