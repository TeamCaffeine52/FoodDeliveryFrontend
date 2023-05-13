import React from "react";
import Button from '@mui/material/Button';
import { useDispatch } from "react-redux";
import { addFormData } from "../redux/cartSlice";
import { useState } from "react";
import { toast } from "react-hot-toast";
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

    const validateData = () => {
        if(!new RegExp('^[0-9]+$', 'gm').test(formData.house)){
            toast.error("House / Flat No should be a positive number");
            return false;
        }
        if(!new RegExp('^[a-z ,A-z]+$', 'gm').test(formData.street)){
            toast.error("Street should contain only letters");
            return false;
        }
        if(!new RegExp('^[a-z A-z]+$', 'gm').test(formData.landmark)){
            toast.error("Landmark should contain only letters");
            return false;
        }
        if(!new RegExp('^[0-9]{6}$', 'gm').test(formData.pincode)){
            toast.error("Pincode should be a six digit number");
            return false;
        }
        if(!new RegExp('^[0-9]{10}$', 'gm').test(formData.contact)){
            toast.error("Phone No. should be a ten digit number");
            return false;
        }

        return true;
    }

    const storeFormData = (e) => {
        e.preventDefault();

        if(!validateData())
            return;

        dispatch(addFormData(formData));
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
                            <Button type="submit" variant="outlined"> Place Order </Button>
                        </div>
                    </fieldset>
                </form>
            </div>
        </>
    );
}

export default OrderForm;