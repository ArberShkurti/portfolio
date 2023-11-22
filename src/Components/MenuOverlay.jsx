import React from "react";

const MenuOverlay =({navbarOpen, SetNavbarOpen}) => {
    return (
        <nav className={`menu-container ${navbarOpen ? "expanded" : ""}`}>
            <ul className="menu-list">
                <li className="nav-li">
                    <a href="/" className="nav-link" onClick={() => SetNavbarOpen(false)}>Home</a>
                </li>    
                <li className="nav-li">
                    <a href="/" className="nav-link" onClick={() => SetNavbarOpen(false)}>About</a>
                </li>   
                
            </ul>    
         </nav>
    );
};


export default MenuOverlay ; 