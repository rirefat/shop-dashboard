import React from 'react';
import './Sidebar.css';
import Logo from "../../imgs/logo.png";
import { SidebarData } from "../../Data/Data";
import SideBarItem from '../SideBarItem/SideBarItem';
import { UilSignOutAlt } from '@iconscout/react-unicons'
import { useState } from 'react';

const Sidebar = () => {
    const [selected, setSelected]=useState(0);
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
                                <div className={selected===index?"active menuItem":"menuItem"} key={item.id} onClick={()=>setSelected(index)}>
                                    <item.icon></item.icon>
                                    <span>{item.heading}</span>
                                </div>
                            )
                        }
                    )
                }
                <div className="menuItem">
                    <UilSignOutAlt></UilSignOutAlt> <span>Sign Out</span>
                </div>
            </div>
        </div>
    );
};

export default Sidebar;