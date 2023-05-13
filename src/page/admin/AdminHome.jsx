import React, { useEffect, useState } from 'react'
import Category from '../../component/Category';
import ProductEditor from '../../component/ProductEditor';
import { useDispatch, useSelector } from 'react-redux';
import { addProduct, loadAllProducts } from '../../redux/productSlice';
import { loadAllCategory } from '../../redux/categorySlice';
import { toast } from "react-hot-toast";
import { addCategory } from '../../redux/categorySlice';
import { Button } from '@mui/material';
import { useCookies } from "react-cookie";
import addImage from "../../assets/add.png";
import "../../assets/css/Home.css";
import "../../assets/css/Category.css";


const AdminHome = () => {
    const dispatch = useDispatch();
    const productState = useSelector((state) => state.product);
    const categoryState = useSelector((state) => state.category);
    const [selectedCategoryId, setSelectedCategoryId] = useState();
    const [cookies , , ] = useCookies(["access_token"]);

    const updateCategorySelection = (index) => {
        setSelectedCategoryId(categoryState[index]._id);
    }

    const [showaAddCategory, setShowAddCategory] = useState(false);
    const [categoryName, setCategoryName] = useState('');
    const [categoryImage, setCategoryImage] = useState('');

    const addCategoryData = async () => {
        if(categoryImage === '')
        {
            toast.error("Please select Category Image");
            return;
        }
        if(!new RegExp('^[a-zA-z ]+$', 'gm').test(categoryName))
        {
            toast.error("Please enter valid category name");
            return;
        }

        const formData = {
            categoryImage,
            categoryName
        };

        const fetchData = await fetch(`${process.env.REACT_APP_SERVER_DOMAIN}/admin/addCategory`,{
            method:"POST",
            headers:{
                "content-type":"application/json",
                "x-access-token": cookies['access_token']
            },
            body:JSON.stringify(formData)
        })

        const dataRes = await fetchData.json();
        console.log(dataRes);

        if(dataRes.success)
        {
            toast.success(dataRes.message);
            dispatch(addCategory(dataRes.result));
            setShowAddCategory(false);
        }
        else{
            toast.error(dataRes.message);
        }
    }

    const chooseCategoryImage = (event) => {
		if(!event.target.files[0])
        {
            toast.error('Please select an Image');
            return;
        }
        if (!event.target.files[0].name.match(/\.(jpg|jpeg|png|gif)$/i))
        {
            toast.error('Not an Image');
            return;
        }

        let reader = new FileReader();
        reader.onload = (e) => {
            setCategoryImage(e.target.result);
        };
        reader.readAsDataURL(event.target.files[0]);
        event.target.value = "";
    }


    const [productForm, setProductForm] = useState({
        productName: '',
        productDetails: '',
        productImage: '',
        productQuantity: '',
        productPrice: '',
    })
    
    const updateProductForm = (e) => {
        setProductForm((prev) => {
            return {
                ...prev,
                [e.target.name]: e.target.value
            }
        })
    }

    const addProductData = async () => {
        if(productForm.productImage === '')
        {
            toast.error("Please select Product Image");
            return;
        }
        if(!new RegExp('^[a-zA-z ]+$', 'gm').test(productForm.productName))
        {
            toast.error("Please enter valid Product name");
            return;
        }
        if(!new RegExp('^[a-zA-z ,]+$', 'gm').test(productForm.productDetails))
        {
            toast.error("Please enter valid Product Description");
            return;
        }
        if(!new RegExp('^[0-9]+$', 'gm').test(productForm.productQuantity))
        {
            toast.error("Please enter valid positive Product Quantity");
            return;
        }
        if(!new RegExp('^[0-9]+$', 'gm').test(productForm.productPrice))
        {
            toast.error("Please enter valid positive Product Price");
            return;
        }
        const formData = productForm;
        formData.categoryId = selectedCategoryId
        console.log(formData);

        const fetchData = await fetch(`${process.env.REACT_APP_SERVER_DOMAIN}/admin/addProduct`,{
            method:"POST",
            headers:{
                "content-type":"application/json",
                "x-access-token": cookies['access_token']
            },
            body:JSON.stringify(formData)
        })

        const dataRes = await fetchData.json();
        console.log(dataRes);

        if(dataRes.success)
        {
            toast.success(dataRes.message);
            dispatch(addProduct(dataRes.result));
            setProductForm({
                productName: '',
                productDetails: '',
                productImage: '',
                productQuantity: '',
                productPrice: '',
            });
        }
        else{
            toast.error(dataRes.message);
        }
    }

    const chooseProductImage = (event) => {
		if(!event.target.files[0])
        {
            toast.error('Please select an Image');
            return;
        }
        if (!event.target.files[0].name.match(/\.(jpg|jpeg|png|gif)$/i))
        {
            toast.error('Not an Image');
            return;
        }

        let reader = new FileReader();
        reader.onload = (e) => {
            setProductForm((prev) => {
                return {
                    ...prev,
                    productImage : e.target.result
                }
            });
        };
        reader.readAsDataURL(event.target.files[0]);
        event.target.value = "";
        console.log(productForm);
    }


    useEffect(() => {
        async function requestCategoryData(){
            const fetchData = await fetch(`${process.env.REACT_APP_SERVER_DOMAIN}/getAllCategory`,{
                method:"GET",
                headers:{
                    "content-type":"application/json",
                    "x-access-token": cookies['access_token']
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
                    "content-type":"application/json",
                    "x-access-token": cookies['access_token']
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
                    <>
                        <div className="category-container" key='add-category'>
                            <div className="category-image" 
                                style={{
                                    backgroundImage: `url(${addImage})`
                                }}
                                onClick={() => {setShowAddCategory((prev) => !prev)}}
                            >
                            </div>
                            <div className="category-name">
                                Add Category
                            </div>
                        </div>
                    </>
                </div>
                {
                    showaAddCategory ? 
                        <>
                            <div className="home-category-input-container">
                                    <div className="home-category-pic-div">
                                        <img className='home-category-img' src={categoryImage} id="photo" />
                                    </div>
                                
                                    <div className="home-category-input-card-body">
                                        <label className='mb-0' htmlFor='cname'>Category Name:</label>
                                        <input className='home-category-input' type="text" id="cname" 
                                            onChange={(e) => setCategoryName(e.target.value)}
                                        />

                                        <div className="home-category-input-button">
                                            <input id='categoryImageInput' type="file" accept="image/*" onChange={chooseCategoryImage} hidden/>
                                            <Button variant='outlined'>
                                                <label className="mb-0 cursor-pointer" htmlFor='categoryImageInput'>Choose Image</label>
                                            </Button>
                                            <Button variant='outlined' color='success' onClick={addCategoryData}>Add Category</Button>
                                        </div>
                                    </div>
                            </div>
                        </>
                    :
                        null
                }

                <div className='home-product-display'>
                    {productState.map((value, index) => {
                        return (
                            value.categoryId === selectedCategoryId ?
                                <ProductEditor value={value} index={index} key={value._id}/>
                                : null
                        );
                    })}
                </div>

                <div className="home-product-input-container">
                        <div className="home-product-pic-div">
                            <img className='home-product-img' src={productForm.productImage} id="photo" />
                        </div>
                    
                        <div className="home-product-input-card-body">
                            <label className='mb-0' htmlFor='pname'>Product Name:</label>
                            <input className='home-product-input' name='productName' type="text" id="pname" 
                                onChange={updateProductForm}
                            />
                            <label className='mb-0' htmlFor='pdesc'>Product Description:</label>
                            <input className='home-product-input' name='productDetails' type="text" id="pdesc" 
                                onChange={updateProductForm}
                            />
                            <label className='mb-0' htmlFor='pqty'>Product Quantity:</label>
                            <input className='home-product-input' name='productQuantity' type="number" id="pqty" 
                                onChange={updateProductForm}
                            />
                            <label className='mb-0' htmlFor='pprice'>Product Price:</label>
                            <input className='home-product-input' name='productPrice' type="number" id="pprice" 
                                onChange={updateProductForm}
                            />

                            <div className="home-product-input-button">
                                <input id='productImageInput' type="file" accept="image/*" onChange={chooseProductImage} hidden/>
                                <Button variant='outlined'>
                                    <label className="mb-0 cursor-pointer" htmlFor='productImageInput'>Choose Image</label>
                                </Button>
                                <Button variant='outlined' color='success' onClick={addProductData}>Add Product</Button>
                            </div>
                        </div>
                </div>
            </div>
        </>
    )
}

export default AdminHome