import React from "react";
import OrderBillProductDisplay from "./OrderBillProductDisplay";

import "../assets/css/OrderBill.css";

const OrderBill = (props) => {
    return (
        <>
            <div class="order-bill-container">
                <fieldset class="order-bill-fieldset">
                    <table class="order-bill-table">
                        <tr>
                            <th class="order-bill-oid">Order id:</th>
                            <td id="order" class="order-bill-data">
                                {props.value._id}
                            </td>
                        </tr>
                    </table>
                </fieldset>
                <br />
                <div class="order-bill-delivery-container">
                    <div class="order-bill-legend">
                        <h2>Delivery Details</h2>
                    </div>
                    {
                        props.value.deliveryAddress.hasOwnProperty("houseNo")
                            ?
                                <>
                                    <div class="order-bill-delivery-container">
                                        <table class="order-bill-table">
                                            <tr>
                                                <th class="order-bill-head">Flat/House:</th>
                                                <td id="order" class="order-bill-head">
                                                    {props.value.deliveryAddress.houseNo}
                                                </td>
                                            </tr>

                                            <tr>
                                                <th class="order-bill-head">Street:</th>
                                                <td id="order" class="order-bill-head">
                                                    {props.value.deliveryAddress.street}
                                                </td>
                                            </tr>
                                            <tr>
                                                <th class="order-bill-head">Land Mark:</th>
                                                <td id="order" class="order-bill-head">
                                                    {props.value.deliveryAddress.landMark}
                                                </td>
                                            </tr>
                                            <tr>
                                                <th class="order-bill-head">Pin Code:</th>
                                                <td id="order" class="order-bill-head">
                                                    {props.value.deliveryAddress.pinCode}
                                                </td>
                                            </tr>
                                            <tr>
                                                <th class="order-bill-head1">Contact:</th>
                                                <td id="order" class="order-bill-head1">
                                                    {props.value.deliveryAddress.contactNumber}
                                                </td>
                                            </tr>
                                        </table>
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
                        <OrderBillProductDisplay />
                    </>
                </div>
            </div>
        </>
    );
}

export default OrderBill;