import React from "react";
import Product from "../component/Product";
import Bill from "../component/Bill";
import OrderForm from "../component/OrderForm";
import { useSelector } from "react-redux";
import "../assets/css/Cart.css";

const Cart = () => {
	const cart = useSelector((state) => state.cart);
	const products = useSelector((state) => state.product);
	const getProduct = (productId) => {
		const index = products.findIndex((ele) => ele._id === productId);
		return products[index];
	}

	const submitOrder = async () => {
		// const fetchData=await fetch(`${process.env.REACT_APP_SERVER_DOMAIN}/signup`,{
		// 	method:"POST",
		// 	headers:{
		// 		"content-type":"application/json"
		// 	},
		// 	body:JSON.stringify(data)
		// })

		// const dataRes=await fetchData.json();
		// console.log(dataRes);
		
		
		// if(dataRes.success)
		// {
		// 	toast.success(dataRes.message);
		// 	navigate("/login");
		// }
		// else
		// {
		// 	toast.error(dataRes.message);
		// }
	}

	return (
		<>
			<div className="cart-main-div">
				<div className="cart-header">
					<b>My Cart</b>
				</div>
				<hr/>
				{
					cart.items.length > 0 ?
						<>
							<div>
								{cart.items.map((value, index) => {
									return <Product 
										value={getProduct(value.productId)} 
										index={index} 
										key={value.productId}
									/>
								})}
							</div>
							<div>
								<Bill />
							</div>
							<div>
								<OrderForm submitOrder={submitOrder} />
							</div>
						</>

						:<>
							<div className="cart-empty-header">
								Wow, Such Empty
							</div>
						</>
				}
			</div>
		</>
	);
};

export default Cart;
