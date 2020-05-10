import React, { useState } from "react";
import Overlay from "../Overlay";
import MenuButton from "./MenuButton";
import Menu from "./Menu";
 
const MenuContainer = () => {
    const [visible, setVisible] = useState(false);
    
   const toggleMenu = () => {
      setVisible(!visible);
    };

    const handleMouseDown = () => {
        toggleMenu();   
    }

     


    return (
      <div>
        <MenuButton 
            handleMouseDown={handleMouseDown} 
            menuVisibility={visible}
            overlayVisibility={visible}
        />
        <Menu 
            handleMouseDown={handleMouseDown}
            menuVisibility={visible}
            overlayVisibility={visible}

        />

        
        <Overlay
          handleMouseDown={handleMouseDown}
          overlayVisibility={visible}
        />
        <div>
          <p>Can you spot the item that doesn't belong?</p>
          <ul>
            <li>Lorem</li>
            <li>Ipsum</li>
            <li>Dolor</li>
            <li>Sit</li>
            <li>Bumblebees</li>
            <li>Aenean</li>
            <li>Consectetur</li>
          </ul>
        </div>
      </div>
    );
  }

 
export default MenuContainer;