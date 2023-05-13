import React, { useEffect, useState } from "react";
import AdminOrderBill from "../../component/AdminOrderBill";
import { useCookies } from "react-cookie";
import "../../assets/css/Order.css";

const AdminOrder = () => {
    const [orders, setOrders ] = useState([]);
    const [cookies , , ] = useCookies(["access_token"]);

    const getOrders = async() => {;
        const fetchData= await fetch(`${process.env.REACT_APP_SERVER_DOMAIN}/admin/getAllOrders`,{
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
                    <b>All Orders</b>
                </div>
                <hr/>
                {
                    orders.length > 0 ?
                        orders.map((value, index, array) => {
                            return (
                                <div>
                                    <AdminOrderBill 
                                        value={array[array.length - 1 - index]} 
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

export default AdminOrder;