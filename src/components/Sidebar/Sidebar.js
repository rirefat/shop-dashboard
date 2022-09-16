import React from 'react';
import './Sidebar.css';
import Logo from "../../imgs/logo.png";
import { SidebarData } from "../../Data/Data";
import SideBarItem from '../SideBarItem/SideBarItem';
import { UilSignOutAlt } from '@iconscout/react-unicons'

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
                {
                    SidebarData.map(
                        // item=><SideBarItem item={item} key={item.id}></SideBarItem>
                        (item, index)=>{
                            return(
                                <div className="menuItem active" key={item.id}>
                                    <item.icon></item.icon>
                                    <span>{item.heading}</span>
                                </div>
                            )
                        }
                    )
                }
                <div className="menuItem">
                    <UilSignOutAlt></UilSignOutAlt>
                </div>
            </div>
        </div>
    );
};

export default Sidebar;