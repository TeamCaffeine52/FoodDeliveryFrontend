import React, { useState } from "react";
import OrderBillProductDisplay from "./OrderBillProductDisplay";
import PendingIcon from '@mui/icons-material/Pending';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import Button from '@mui/material/Button';
import { useCookies } from "react-cookie";
import { toast } from "react-hot-toast";
import "../assets/css/AdminOrderBill.css";

const AdminOrderBill = (props) => {
    const [cookies , , ] = useCookies(["access_token"]);
    const [isDeliveryCompleted, setIsCompleted] = useState(props.value.isCompleted);

    const updateOrderStatus = async () => {
        const fetchData= await fetch(`${process.env.REACT_APP_SERVER_DOMAIN}/admin/updateOrderStatus`,{
			method:"POST",
			headers:{
				"content-type": "application/json",
				"x-access-token": cookies['access_token']
			},
            body:JSON.stringify({_id: props.value._id})
		})

		const dataRes=await fetchData.json();
        console.log(dataRes);

        if(dataRes.success){
            setIsCompleted(true);
            toast.success(dataRes.message);
        }
        else{
            toast.error(dataRes.message);
        }
    }
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
                                isDeliveryCompleted ?
                                    <CheckCircleIcon className="admin-order-bill-complete-icon" />
                                    :
                                    <PendingIcon className="admin-order-bill-pending-icon" />
                            }
                            {props.value._id}
                        </div>
                    </div>
                    
                    {
                        isDeliveryCompleted ? 
                            null
                        :
                            <>
                                <hr />
                                <div className="admin-order-bill-item-row">
                                    <div>
                                    <b> Delivery Completed</b>
                                    </div>
                                    <div>
                                        <Button onClick={updateOrderStatus} variant="outlined">
                                            Complete
                                        </Button>
                                    </div>
                                </div>
                            </>
                    }
                </div>
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
                                                Customer Name
                                            </div>
                                            <div>
                                                {`${props.value.deliveryAddress.firstName} ${props.value.deliveryAddress.lastName}`}
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
                        <OrderBillProductDisplay
                            items={props.value.items}
                            concatkey={props.value._id}
                        />
                    </>
                </div>
            </div>
        </>
    );
}

export default AdminOrderBill;