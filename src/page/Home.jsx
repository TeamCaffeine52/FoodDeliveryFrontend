import React, { useEffect, useState } from 'react'
import Product from '../component/Product';
import "../assets/css/Home.css";
import { useDispatch, useSelector } from 'react-redux';
import { loadAllProducts } from '../redux/productSlice';
import { loadAllCategory } from '../redux/categorySlice';


const Home = () => {
    const [products, setProducts] = useState([]);
    const dispatch = useDispatch();
    const productState = useSelector((state) => state.product);
    const categoryState = useSelector((state) => state.category);


    useEffect(() => {
        async function requestCategoryData(){
            const fetchData = await fetch(`${process.env.REACT_APP_SERVER_DOMAIN}/getAllCategory`,{
                method:"GET",
                headers:{
                    "content-type":"application/json"
                },
            })
    
            const dataRes = await fetchData.json();
            console.log("Category", dataRes);
            dispatch(loadAllCategory(dataRes));

        }
        async function requestProductData(){
            const fetchData = await fetch(`${process.env.REACT_APP_SERVER_DOMAIN}/getAllProducts`,{
                method:"GET",
                headers:{
                    "content-type":"application/json"
                },
            })
    
            const dataRes = await fetchData.json();
            console.log("Product", dataRes);
            dispatch(loadAllProducts(dataRes));
        }
        
        requestCategoryData();
        requestProductData();
    }, [])


    return (
        <div className='min-h-screen bg-slate-300 home-products-div'>
            { categoryState.map((value, index) => {
                return value.categoryName + " ";
            })}
            { productState.map((value, index) => {
                return (
                    <Product value={value} index={index} />
                );
            }) }
        </div>
    )
}

export default Home