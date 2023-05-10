import React from "react";
import "../assets/css/BillItem.css";

const BillItem = (props) => {
    return (
        <>
            <div className="bill-item-row">
                <div>
                    {props.product.productName}
                </div>
                <div>
                    {props.quantity} units.
                </div>
                <div>
                    {props.quantity * props.product.productPrice} rs.
                </div>
            </div>
        </>
    );
}

export default BillItem;