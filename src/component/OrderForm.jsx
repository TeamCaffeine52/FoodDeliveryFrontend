import React from "react";
import Button from '@mui/material/Button';
import { useDispatch } from "react-redux";
import { addFormData } from "../redux/cartSlice";
import { useState } from "react";
import "../assets/css/OrderForm.css";

const OrderForm = (props) => {
    const dispatch =  useDispatch();
    const [formData, setformData] = useState({
        house: '',
        street: '',
        landmark: '',
        pincode: '',
        contact: ''
    })

    const updateForm = (e) => {
        const name = e.currentTarget.name;
        const value = e.currentTarget.value;
        setformData((prev) => {
            return {
                ...prev,
                [name]: value 
            }
        });
    }

    const storeFormData = (e) => {
        e.preventDefault()
        dispatch(addFormData(formData));
        props.submitOrder();
    }

    return (
        <>
            <div className="orderform-container">
                <form onSubmit={storeFormData}>
                    <fieldset>
                        <legend className="orderform-legend">Delivery Address</legend>
                        <div className="orderform-form-group">
                            <label htmlFor="house">House/Flat No:</label>
                            <input type="number" id="house" name="house" placeholder="Enter House/Flat No.:" value={formData.house} onChange={updateForm} required />
                        </div>
                        <div className="orderform-form-group">
                            <label htmlFor="street">Street:</label>
                            <input type="text" id="street" name="street" placeholder="Enter Street" value={formData.street} onChange={updateForm} required />
                        </div>
                        <div className="orderform-form-group">
                            <label htmlFor="landmark">Land Mark:</label>
                            <input type="text" id="landmark" name="landmark" placeholder="Enter Land Mark" value={formData.landmark} onChange={updateForm} required />
                        </div>
                        <div className="orderform-form-group">
                            <label htmlFor="pincode">Pin Code:</label>
                            <input type="number" id="pincode" name="pincode" placeholder="Enter Pin Code" value={formData.pincode} onChange={updateForm} required />
                        </div>
                        <div className="orderform-form-group">
                            <label htmlFor="contact">Phone No.:</label>
                            <input type="number" id="contact" name="contact" placeholder="Enter Phone No." value={formData.contact} onChange={updateForm} required />
                        </div>
                        <div className="orderform-form-group">
                            <Button type="submit" variant="outlined"> Purchase </Button>
                        </div>
                    </fieldset>
                </form>
            </div>
        </>
    );
}

export default OrderForm;