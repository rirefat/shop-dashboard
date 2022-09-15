import React from 'react';
import './Sidebar.css';
import Logo from "../../imgs/logo.png";
import { UilEstate } from '@iconscout/react-unicons'

const Sidebar = () => {
    return (
        <div className='Sidebar'>
            {/* Logo Section */}
            <div className="logo">
                <img src={Logo} alt="Logo" />
                <span><span>e</span>Shop</span>
            </div>

            {/* Menu Section  */}
            <div className="menu">
                <div className="menuItem">
                    <div><UilEstate/></div>
                    <span>Dashboard</span>
                </div>
            </div>
        </div>
    );
};

export default Sidebar;