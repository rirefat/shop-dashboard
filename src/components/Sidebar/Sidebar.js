import React from 'react';
import './Sidebar.css';
import Logo from "../../imgs/logo.png";

const Sidebar = () => {
    return (
        <div className='Sidebar'>
            <div className="logo">
                <img src={Logo} alt="Logo" />
                <span><span>e</span>Shop</span>
            </div>
        </div>
    );
};

export default Sidebar;