import React from 'react';

const SideBarItem = (props) => {
    const {icon, heading}=props.item;
    return (
        <div className='menuItem'>
            {/* <icon.icon></icon.icon> */}
            {console.log(heading)}
            <span>{heading}</span>
        </div>
    );
};

export default SideBarItem;