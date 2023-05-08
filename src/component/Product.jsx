import React from "react";
import "./Product.css";
import pizza from "../assest/cheese-burst-pizza.jpg";
const Product = (props) => {
    console.log(props)
    return (
        <>
            <div className="product-card card" key={props.value._id}>
                <div className="row no-gutters">
                    <div className="col-sm-5">
                        <div className="product-wrapper">
                            <div className="product-outerCircle">
                                <img src={pizza} />
                                <div className="product-circleborder">
                                    <div className="product-circleinfo">
                                        <h2>{props.value.productName}</h2>
                                    </div>
                                </div>
                            </div>

                        </div>


                    </div>
                    <div className="col-sm-6">
                        <div className="card-body">
                            <b><u>{props.value.productName}</u></b>
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
                </div>
            </div>
        </>
    );
}

export default Product;