import React from "react";
import "../assets/css/Category.css";

const Category = (props) => {
    return (
        <>
            <div className="category-container" key={props.value._id}>
                <div className="category-image zoom-in"
                    style={{
                        backgroundImage: `url(${props.value.categoryImage})`
                    }} 
                    onClick={() => {props.updateCategorySelection(props.index)}}
                >
                </div>
                <div className="category-name">
                    {props.value.categoryName}
                </div>      
            </div>
        </>
    );
}

export default Category;