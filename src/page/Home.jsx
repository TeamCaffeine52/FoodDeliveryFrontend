import React, { useEffect, useState } from 'react'
import Product from '../component/Product';
import "./Home.css";

const Home = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        async function requestData(){
            const fetchData = await fetch(`${process.env.REACT_APP_SERVER_DOMAIN}/getAllProducts`,{
                method:"GET",
                headers:{
                    "content-type":"application/json"
                },
            })
    
            const dataRes = await fetchData.json();
            setProducts(dataRes);

            console.log(products);
        }
        requestData();
    }, [])


    return (
        <div className='min-h-screen bg-slate-300 home-products-div'>

            { products.map((value, index) => {
                return (
                    <Product value={value} index={index} />
                );
            }) }
        </div>
    )
}

export default Home