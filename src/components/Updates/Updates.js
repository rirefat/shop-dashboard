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
                        <div className="noti">
                            <div className='noti-info'>
                                <span className='CustomerName'>{update.name}</span>
                                <span>{update.noti}</span>
                            </div>
                            <span>{update.time}</span>
                        </div>
                    </div>
                )})
            }
        </div>
    );
};

export default Updates;