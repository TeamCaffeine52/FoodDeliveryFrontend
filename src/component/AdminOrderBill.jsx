import React from "react";
import OrderBillProductDisplay from "./OrderBillProductDisplay";
import PendingIcon from '@mui/icons-material/Pending';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import "../assets/css/AdminOrderBill.css";

const AdminOrderBill = (props) => {
    return (
        <>
            <div class="admin-order-bill-container">
                <div className="admin-order-bill-body">
                    <div className="admin-order-bill-item-row">
                        <div>
                            <b>Order ID</b>
                        </div>
                        <div>
                            {
                                props.value.isCompleted ?
                                    <CheckCircleIcon className="admin-order-bill-complete-icon" />
                                    :
                                    <PendingIcon className="admin-order-bill-pending-icon" />
                            }
                            {props.value._id}
                        </div>
                    </div>
                    <hr></hr>

                    <div className="admin-order-bill-item-row">
                        {/* <div class="admin-order-head">
                            <b class="admin-order-size"> IsComplete</b>
                            <button class="admin-order-btn">Complete</button>
                        </div> */}
                        <div>
                           <b> Delivery Completed</b>
                        </div>
                        <div>
                        <button class="admin-order-btn">Complete</button>
                        </div>
                    </div>





                </div>
                {/* 
<br/>

                    <div class="admin-order-head">
                   <b class="admin-order-size"> IsComplete</b>
                    <button class="admin-order-btn">Complete</button>
                </div> */}





                <br />
                <div class="admin-order-bill-delivery-container">
                    <div class="admin-order-bill-legend">
                        <h2>Order Details</h2>
                    </div>
                    {
                        props.value.deliveryAddress.hasOwnProperty("houseNo")
                            ?
                            <>
                                <div className="admin-order-bill-container">
                                    <div className="admin-order-bill-header">
                                        <b>Delivery Details</b>
                                    </div>
                                    <div className="admin-order-bill-body">
                                        <div className="admin-order-bill-item-row">
                                            <div>
                                                Name
                                            </div>
                                            <div>
                                                {/* {props.value.deliveryAddress.houseNo} */}
                                                Abc
                                            </div>
                                        </div>
                                        <hr />
                                        <div className="admin-order-bill-item-row">
                                            <div>
                                                Flat/House:
                                            </div>
                                            <div>
                                                {props.value.deliveryAddress.houseNo}
                                            </div>
                                        </div>
                                        <hr />

                                        <div className="admin-order-bill-item-row">
                                            <div>
                                                Street:
                                            </div>
                                            <div>
                                                {props.value.deliveryAddress.street}
                                            </div>
                                        </div>
                                        <hr />

                                        <div className="admin-order-bill-item-row">
                                            <div>
                                                Land Mark:
                                            </div>
                                            <div>
                                                {props.value.deliveryAddress.landMark}
                                            </div>
                                        </div>
                                        <hr />

                                        <div className="admin-order-bill-item-row">
                                            <div>
                                                Pin Code:
                                            </div>
                                            <div>
                                                {props.value.deliveryAddress.pinCode}
                                            </div>
                                        </div>
                                        <hr />

                                        <div className="admin-order-bill-item-row">
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
                                <div class="admin-order-bill-delivery-container">
                                    <table class="admin-order-bill-table">
                                        <tr>
                                            <th class="admin-order-bill-head">Flat/House:</th>
                                            <td id="order" class="admin-order-bill-head">1234</td>
                                        </tr>

                                        <tr>
                                            <th class="admin-order-bill-head">Street:</th>
                                            <td id="order" class="admin-order-bill-head">1234</td>
                                        </tr>
                                        <tr>
                                            <th class="admin-order-bill-head">Land Mark:</th>
                                            <td id="order" class="admin-order-bill-head">1234</td>
                                        </tr>
                                        <tr>
                                            <th class="admin-order-bill-head">Pin Code:</th>
                                            <td id="order" class="admin-order-bill-head">1234</td>
                                        </tr>
                                        <tr>
                                            <th class="admin-order-bill-head1">Contact:</th>
                                            <td id="order" class="admin-order-bill-head1">1234</td>
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

export default AdminOrderBill;