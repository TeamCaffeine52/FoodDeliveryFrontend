import React from "react";
import BillItem from "./BillItem";
import { useSelector } from "react-redux";
import "../assets/css/Bill.css"
import "../assets/css/BillItem.css"


const OrderBillProductDisplay = (props) => {
	const products = useSelector((state) => state.product);
	const getProduct = (productId) => {
        const index = products.findIndex((ele) => ele._id === productId);
		return products[index];
	}
    let totalPrice = 0;


    return (
        <>
            <div className="bill-container">
                <div className="bill-header">
                    <b>Bill</b>
                </div>
                <div className="bill-body">
                    <div className="bill-item-row">
                        <div>
                            <b>Order</b>
                        </div>
                        <div>
                            <b>Quantity</b>
                        </div>
                        <div>
                            <b>Total Price</b>
                        </div>
                    </div>
                    <hr />
                    {
                        props.items.map((value, index) => {
                            totalPrice += value.purchasedQuantity * getProduct(value.productId).productPrice;
                            return (
                                <BillItem 
                                    product={getProduct(value.productId)} 
                                    quantity={value.purchasedQuantity}
                                    key={props.concatkey+value.productId} 
                                />
                            );
                        })
                    }
                    <hr />
                    <div className="bill-item-row">
                        <div className="bill-item-total-price">
                            <b>{totalPrice} rs.</b>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default OrderBillProductDisplay;