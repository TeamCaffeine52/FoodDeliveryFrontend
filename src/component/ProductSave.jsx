import React from "react";
import { Button } from "@mui/material";
import "../assets/css/ProductSave.css";

const ProductSave = (props) => {
    return (
        <>
            <div className="product-save-container">
                <Button variant="outlined" color="success" onClick={props.updateProductData}>Save</Button>
            </div>
        </>
    );
}

export default ProductSave;