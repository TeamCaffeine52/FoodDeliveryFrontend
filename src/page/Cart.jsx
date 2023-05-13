import React, { useEffect } from "react";
import Product from "../component/Product";
import Bill from "../component/Bill";
import OrderForm from "../component/OrderForm";
import { emptyCart } from "../redux/cartSlice";
import { useSelector, useDispatch } from "react-redux";
import { useCookies } from "react-cookie";
import { useNavigate } from 'react-router-dom'
import { toast } from "react-hot-toast";
import "../assets/css/Cart.css";

const Cart = () => {
	const cart = useSelector((state) => state.cart);
	const products = useSelector((state) => state.product);
    const [cookies , , ] = useCookies(["access_token"]);
	const navigate = useNavigate();
	const dispatch = useDispatch();

	const getProduct = (productId) => {
		const index = products.findIndex((ele) => ele._id === productId);
		return products[index];
	}

	useEffect(() => {
		if(cart.deliveryAddress.isFilled !== true)
		{
			return;
		}
		const fetchDatafn = async () => {
			const fetchData= await fetch(`${process.env.REACT_APP_SERVER_DOMAIN}/addOrder`,{
				method:"POST",
				headers:{
					"content-type": "application/json",
					"x-access-token": cookies['access_token']
				},
				body:JSON.stringify(cart)
			})

			const dataRes= await fetchData.json();
			console.log(dataRes);

			if(dataRes.success)
			{
				toast.success(dataRes.message);
				dispatch(emptyCart());
				navigate('/');
			}
			else
			{
				toast.error(dataRes.message);
			}
		}
		fetchDatafn();
	}, [cart.deliveryAddress]);


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
								<OrderForm />
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
