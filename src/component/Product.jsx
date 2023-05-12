import React from "react";
import "../assets/css/Product.css";
import icecream from "../assets/burger-category.png";
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import Button from '@mui/material/Button';
import { addCartItem } from "../redux/cartSlice";
import { deleteCartItem } from "../redux/cartSlice";
import { increasePurchasedQuantity } from "../redux/cartSlice";
import { decreasePurchasedQuantity } from "../redux/cartSlice";
import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";

const Product = (props) => {

    const dispatch = useDispatch();
    const cart = useSelector((state) => state.cart);

    let startQuantity = 0;
    
    const tmpIndex = cart.items.findIndex((ele) => ele.productId === props.value._id);
    if(tmpIndex !== -1){
        startQuantity = cart.items[tmpIndex].purchasedQuantity;
    }
    
    const [purchaseQuantity, setPurchaseQuantity] = useState(startQuantity);
    const incrementPurchase = (product) => {
        const index = cart.items.findIndex((ele) => ele.productId === product._id);
        if(index === -1)
        {
            // not exist, add to cart
            dispatch(addCartItem(product));
            setPurchaseQuantity(1);
        }
        else
        {
            // exist, increase quantity
            if(product.productQuantity > purchaseQuantity)
            {
                dispatch(increasePurchasedQuantity(product));
                setPurchaseQuantity((prev) => prev + 1);
            }
        }
    }

    const decrementPurchase = (product) => {
        const index = cart.items.findIndex((ele) => ele.productId === product._id);
        if(index === -1)
        {
            // not exist
            setPurchaseQuantity(0);
        }
        else if(cart.items[index].purchasedQuantity === 1)
        {
            // last product, remove
            dispatch(deleteCartItem(product));
            setPurchaseQuantity(0);
        }
        else
        {
            // > 1, decrease quantity
            dispatch(decreasePurchasedQuantity(product));
            setPurchaseQuantity((prev) => prev - 1);
        }
    }

    return (
        <>
            <div className="product-card">
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
                                <Button variant="outlined" onClick={ () => {decrementPurchase(props.value)}}>
                                    <RemoveIcon />
                                </Button>
                            </div>
                            <div className="product-inner product-count">
                                {purchaseQuantity}
                            </div>
                            <div className="product-inner">
                                <Button variant="outlined" onClick={ () => {incrementPurchase(props.value)}}>
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