import React from "react";
import "./Menu.css";
 
const Menu = ({ handleMouseDown, menuVisibility }) => {
  
    let visibility = "hide";
 
    if (menuVisibility) {
      visibility = "show";
    }
 
    return (
      <div id="flyoutMenu"
           onMouseDown={handleMouseDown} 
           className={visibility}>
        <h2><a href="!#">Home</a></h2>
        <h2><a href="!#">About</a></h2>
        <h2><a href="!#">Contact</a></h2>
        <h2><a href="!#">Search</a></h2>
      </div>
    );
};
 
export default Menu;