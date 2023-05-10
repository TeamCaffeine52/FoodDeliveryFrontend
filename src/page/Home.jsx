import React, { useEffect, useState } from 'react'
import Category from '../component/Category';
import Product from '../component/Product';
import "../assets/css/Home.css";
import { useDispatch, useSelector } from 'react-redux';
import { loadAllProducts } from '../redux/productSlice';
import { loadAllCategory } from '../redux/categorySlice';
import Slide from '../component/Slide';
import { Fade } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import img1 from '../assets/slideshow/img1.jpg';
import img2 from '../assets/slideshow/img2.jpg';
import img3 from '../assets/slideshow/img3.jpg';
import img4 from '../assets/slideshow/img4.jpg';
import img5 from '../assets/slideshow/img5.jpg';
import img6 from '../assets/slideshow/img6.jpg';
import img7 from '../assets/slideshow/img7.jpg';


const slideImages = [img1, img2, img3, img4, img5, img6, img7];

const Home = () => {
    const dispatch = useDispatch();
    const productState = useSelector((state) => state.product);
    const categoryState = useSelector((state) => state.category);
    const [selectedCategoryId, setSelectedCategoryId] = useState();

    const updateCategorySelection = (index) => {
        setSelectedCategoryId(categoryState[index]._id);
    }

    useEffect(() => {
        async function requestCategoryData() {
            const fetchData = await fetch(`${process.env.REACT_APP_SERVER_DOMAIN}/getAllCategory`, {
                method: "GET",
                headers: {
                    "content-type": "application/json"
                },
            })

            const dataRes = await fetchData.json();
            console.log("Category", dataRes);
            dispatch(loadAllCategory(dataRes));
            setSelectedCategoryId(dataRes[0]._id);
        }
        async function requestProductData() {
            const fetchData = await fetch(`${process.env.REACT_APP_SERVER_DOMAIN}/getAllProducts`, {
                method: "GET",
                headers: {
                    "content-type": "application/json"
                },
            })

            const dataRes = await fetchData.json();
            console.log("Product", dataRes);
            dispatch(loadAllProducts(dataRes));
        }

        requestCategoryData();
        requestProductData();
    }, [])

    
    // console.log(selectedCategoryProducts);


    return (
        <div className='home-main-div'>
            <div className='home-slideshow'>
                <Fade>
                    { slideImages.map((slideImage, index) => {
                        return <Slide slideImage={slideImage} index={index} />
                    })}
                </Fade>
            </div>

            <div className='home-category-display'>
                {categoryState.map((value, index) => {
                    return <Category value={value} index={index} updateCategorySelection={updateCategorySelection} />
                })}
            </div>
            
            <div className='home-product-display'>
                {productState.map((value, index) => {
                    return (
                        value.categoryId === selectedCategoryId ?
                            <Product value={value} index={index} />
                            : null
                    );
                })}
            </div>
        </div>
    )
}

export default Home