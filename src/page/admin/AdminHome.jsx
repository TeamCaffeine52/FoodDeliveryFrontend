import React, { useEffect, useState } from 'react'
import Category from '../../component/Category';
import ProductEditor from '../../component/ProductEditor';
import { useDispatch, useSelector } from 'react-redux';
import { loadAllProducts } from '../../redux/productSlice';
import { loadAllCategory } from '../../redux/categorySlice';
import "../../assets/css/Home.css";


const AdminHome = () => {
    const dispatch = useDispatch();
    const productState = useSelector((state) => state.product);
    const categoryState = useSelector((state) => state.category);

    const [selectedCategoryId, setSelectedCategoryId] = useState();

    const updateCategorySelection = (index) => {
        setSelectedCategoryId(categoryState[index]._id);
    }

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
            setSelectedCategoryId(dataRes[0]._id);

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
        <>
            <div className='home-main-div'>

                <div className='home-category-display'>
                    {categoryState.map((value, index) => {
                        return <Category 
                            value={value} 
                            index={index} 
                            updateCategorySelection={updateCategorySelection} 
                            key={value._id} />
                    })}
                </div>
                
                <div className='home-product-display'>
                    {productState.map((value, index) => {
                        return (
                            value.categoryId === selectedCategoryId ?
                                <ProductEditor value={value} index={index} key={value._id}/>
                                : null
                        );
                    })}
                </div>
            </div>
        </>
    )
}

export default AdminHome