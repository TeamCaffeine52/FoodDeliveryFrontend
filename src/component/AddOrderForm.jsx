import React from "react";
import "../assets/css/AddOrderForm.css";

const AddOrderForm = () => {
    return (
        <>
            <div className="sakshi-container">
                <fieldset>
                    <legend className="sakshi-legend">Delivery Address</legend>
                    <div className="sakshi-form-group">
                        <label for="name">House/Flat No:</label>
                        <input type="number" id="name" name="name" placeholder="Enter House/Flat No.:" />
                    </div>
                    <div className="sakshi-form-group">
                        <label for="email">Street:</label>
                        <input type="text" id="email" name="email" placeholder="Enter Street" />
                    </div>
                    <div className="sakshi-form-group">
                        <label for="email">Land Mark:</label>
                        <input type="text" id="email" name="email" placeholder="Enter Land Mark" />
                    </div>
                    <div className="sakshi-form-group">
                        <label for="email">Pin Code:</label>
                        <input type="number" id="email" name="email" placeholder="Enter Pin Code" />
                    </div>
                    <div className="sakshi-form-group">
                        <label for="email">Phone No.:</label>
                        <input type="number" id="email" name="email" placeholder="Enter Phone No." />
                    </div>
                    <div className="sakshi-form-group">
                        <button type="submit">Submit</button>
                    </div>
                </fieldset>
            </div>
        </>
    );
}

export default AddOrderForm;