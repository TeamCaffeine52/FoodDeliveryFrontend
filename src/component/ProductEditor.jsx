import React, {useState} from "react";
import "../assets/css/ProductEditor.css";
import icecream from "../assets/burger-category.png";
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import Button from '@mui/material/Button';
import { updateProductPrice, updateProductQuantity } from "../redux/productSlice";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-hot-toast";
import ProductSave from "./ProductSave";
import { useCookies } from "react-cookie";

const Product = (props) => {
    const product = useSelector((state) => state.product);
    const dispatch = useDispatch();
    const index = product.findIndex((ele) => ele._id === props.value._id);
    const [dirtyData, setDirtyData] = useState(false);
    const [cookies , , ] = useCookies(["access_token"]);

    const updateProductData = async () => {
        const fetchData=await fetch(`${process.env.REACT_APP_SERVER_DOMAIN}/admin/updateProduct`,{
            method:"POST",
            headers:{
                "content-type":"application/json",
                "x-access-token": cookies['access_token']
            },
            body:JSON.stringify(product[index])
        })

        const dataRes=await fetchData.json()

        
        if(dataRes.success){
            toast.success(dataRes.message);
        }
        else
        {
            toast.error(dataRes.message);
        }

        setDirtyData(false);
    }

    const changeProductPrice = (e) => {
        const payload = {
            index : index,
            productPrice: e.currentTarget.value
        }
        dispatch(updateProductPrice(payload));
        setDirtyData(true);
    }

    const increaseProductQuantity = (e) => {
        const payload = {
            index : index,
            productQuantity: product[index].productQuantity + 1
        }
        dispatch(updateProductQuantity(payload));
        setDirtyData(true);
    }

    const decreaseProductQuantity = (e) => {
        if(product[index].productQuantity > 0)
        {
            const payload = {
                index : index,
                productQuantity: product[index].productQuantity - 1
            }
            dispatch(updateProductQuantity(payload));
            setDirtyData(true);
        }
    }
    return (
        <>
            <div className="product-editor-card">
                {
                    dirtyData ? 
                        <ProductSave updateProductData={updateProductData} />
                    :   null
                }
                <div className="product-editor-wrapper">
                    <img className="product-editor-img" src={props.value.productImage} />
                </div>

                <div className="product-editor-card-body">
                    <div className="product-editor-data">
                        <p className="product-editor-title">
                            <b>{props.value.productName}</b>
                        </p>
                        <p className="product-editor-details">
                            {props.value.productDetails} 
                        </p>
                    </div>

                    <div className="product-editor-bottom">
                        <div className="product-editor-price">
                            <p>Price:</p>
                            <b>
                                <input value={product[index].productPrice} onChange={changeProductPrice}/>
                            </b>
                        </div>
                        <div className="product-editor-outer">
                            <div>
                                Quantity: 
                            </div>
                            <div>
                                <div className="product-editor-inner">
                                    <Button variant="outlined" onClick={decreaseProductQuantity}>
                                        <RemoveIcon />
                                    </Button>
                                </div>
                                <div className="product-editor-inner product-editor-count">
                                    {product[index].productQuantity}
                                </div>
                                <div className="product-editor-inner">
                                    <Button variant="outlined" onClick={increaseProductQuantity}>
                                        <AddIcon />
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Product;