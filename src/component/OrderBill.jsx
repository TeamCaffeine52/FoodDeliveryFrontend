import React from "react";
import OrderBillProductDisplay from "./OrderBillProductDisplay";
import PendingIcon from '@mui/icons-material/Pending';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import "../assets/css/OrderBill.css";

const OrderBill = (props) => {
    return (
        <>
            <div class="order-bill-container">
                    <div className="order-bill-body">
                        <div className="order-bill-item-row">
                            <div>
                                <b>Order ID</b>
                            </div>
                            <div>
                                {
                                    props.value.isCompleted ? 
                                        <CheckCircleIcon className="order-bill-complete-icon"/>
                                    :
                                        <PendingIcon className="order-bill-pending-icon" />
                                }
                                {props.value._id}
                            </div>
                        </div>
                    </div>
                <br />
                <div class="order-bill-delivery-container">
                    <div class="order-bill-legend">
                        <h2>Order Details</h2>
                    </div>
                    {
                        props.value.deliveryAddress.hasOwnProperty("houseNo")
                            ?
                                <>
                                    <div className="order-bill-container">
                                        <div className="order-bill-header">
                                            <b>Delivery Details</b>
                                        </div>
                                        <div className="order-bill-body">
                                            <div className="order-bill-item-row">
                                                <div>
                                                    <b>Flat/House:</b>
                                                </div>
                                                <div>
                                                    {props.value.deliveryAddress.houseNo}
                                                </div>
                                            </div>
                                            <hr />
                                            
                                            <div className="order-bill-item-row">
                                                <div>
                                                    Street:
                                                </div>
                                                <div>
                                                    {props.value.deliveryAddress.street}
                                                </div>
                                            </div>
                                            <hr />
                                            
                                            <div className="order-bill-item-row">
                                                <div>
                                                    Land Mark:
                                                </div>
                                                <div>
                                                    {props.value.deliveryAddress.landMark}
                                                </div>
                                            </div>
                                            <hr />

                                            <div className="order-bill-item-row">
                                                <div>
                                                    Pin Code:
                                                </div>
                                                <div>
                                                    {props.value.deliveryAddress.pinCode}
                                                </div>
                                            </div>
                                            <hr />

                                            <div className="order-bill-item-row">
                                                <div>
                                                    Contact:
                                                </div>
                                                <div>
                                                    {props.value.deliveryAddress.contactNumber}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </>
                            :
                                <>
                                    <div class="order-bill-delivery-container">
                                        <table class="order-bill-table">
                                            <tr>
                                                <th class="order-bill-head">Flat/House:</th>
                                                <td id="order" class="order-bill-head">1234</td>
                                            </tr>

                                            <tr>
                                                <th class="order-bill-head">Street:</th>
                                                <td id="order" class="order-bill-head">1234</td>
                                            </tr>
                                            <tr>
                                                <th class="order-bill-head">Land Mark:</th>
                                                <td id="order" class="order-bill-head">1234</td>
                                            </tr>
                                            <tr>
                                                <th class="order-bill-head">Pin Code:</th>
                                                <td id="order" class="order-bill-head">1234</td>
                                            </tr>
                                            <tr>
                                                <th class="order-bill-head1">Contact:</th>
                                                <td id="order" class="order-bill-head1">1234</td>
                                            </tr>
                                        </table>
                                    </div>
                                </>
                    }
                    <>
                        <OrderBillProductDisplay items={props.value.items} />
                    </>
                </div>
            </div>
        </>
    );
}

export default OrderBill;