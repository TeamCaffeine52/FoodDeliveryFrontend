import React, { useEffect, useState } from "react";
import OrderBill from "../component/OrderBill";
import { useCookies } from "react-cookie";
import "../assets/css/Order.css";


const Order = () => {
    const [orders, setOrders ] = useState([]);
    const [cookies , , ] = useCookies(["access_token"]);

    const getOrders = async() => {;
        const fetchData= await fetch(`${process.env.REACT_APP_SERVER_DOMAIN}/getMyOrders`,{
			method:"GET",
			headers:{
				"content-type": "application/json",
				"x-access-token": cookies['access_token']
			},
		})

		const dataRes=await fetchData.json();
        console.log(dataRes);

        setOrders(dataRes);
    }

    useEffect(() => {
        getOrders();
    }, []);
    
    return (
        <>
            <div className="order-main-div">
                <div className="order-header">
                    <b>My Orders</b>
                </div>
                <hr/>
                {
                    orders.length > 0 ?
                        orders.map((value, index) => {
                            return (
                                <div>
                                    <OrderBill 
                                        value={value} 
                                        index={index} 
                                        key={value._id}
                                    />
                                </div>
                            );
                        })
                    :  
                        <div className="order-empty-header">
                            Wow, Such Empty
                        </div>
                }
            </div>
        </>
    );
}

export default Order;