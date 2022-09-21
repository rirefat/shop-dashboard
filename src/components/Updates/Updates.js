import React from 'react';
import { UpdatesData } from '../../Data/Data';
import './Updates.css';

const Updates = () => {
    return (
        <div className='Updates'>
            {
                UpdatesData.map((update)=>{return(
                    <div className="update">
                        <img src={update.img} alt="Customer Img" />
                    </div>
                )})
            }
        </div>
    );
};

export default Updates;