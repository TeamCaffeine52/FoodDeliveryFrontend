import React from "react";
import "../assets/css/Product.css";
import icecream from "../assets/burger-category.png";
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import Button from '@mui/material/Button';

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
                            {props.value.productDetails} 
                        </p>
                    </div>

                    <div className="product-bottom">
                        <div className="productPrice">
                            Price: {props.value.productPrice} rs.
                        </div>
                        <div className="product-outer">
                            <div className="product-inner">
                                <Button variant="outlined">
                                    <RemoveIcon />
                                </Button>
                            </div>
                            <div className="product-inner product-count">1</div>
                            <div className="product-inner">
                                <Button variant="outlined">
                                    <AddIcon />
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Product;