import React from "react";
import "../assets/css/Product.css";
import icecream from "../assets/burger-category.png";
const Product = (props) => {
    return (
        <>
            <div className="product-card" key={props.value._id}>
                    
                        <div className="product-wrapper">                           
                                <img className="img" src={icecream} />                               
                        </div>
                    
                        <div className="card-body">
                            <b>{props.value.productName}</b>
                            <p>{props.value.productDetails}</p>

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