import React from "react";

import "./Overlay.css";

const Overlay = ({ handleMouseDown, overlayVisibility }) => {
    
    let visibility = "hide";
    
    if (overlayVisibility === true) {
        visibility = "show";
    }
    

    return (
        <div id="overlay" onClick={handleMouseDown} className={visibility}  >
            
        </div>
    );
}

export default Overlay;