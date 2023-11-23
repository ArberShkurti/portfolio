import React from "react";

const Headerr = ({navbarOpen, SetNavbarOpen}) => {
    return (
        <div>
            <button className={navbarOpen ? 'menu-btn expanded': 'menu-btn'} onClick={()=> SetNavbarOpen((prevNavbarOpen) => !prevNavbarOpen)}>
                <div className="menu-icon-container">
                    <span className="icon-line"></span>
                    <span className="icon-line"></span>
                    <span className="icon-line"></span>
                </div>
            </button>
        </div>
    );
};


export default Headerr ; 


