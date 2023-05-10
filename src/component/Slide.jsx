import React from "react";
import "../assets/css/Slide.css";

const Slide = (props) => {
    return (
        <>
            <div className="slide-effect" key={props.index}>
                <div style={{ 'backgroundImage': `url(${props.slideImage})` }} />
            </div>
        </>
    );
}

export default Slide;