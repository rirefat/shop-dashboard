import React from 'react';
import Updates from '../Updates/Updates';
import './RightSide.css';

const RightSide = () => {
    return (
        <div className='RightSide'>
            <h3>Updates</h3>
            <Updates></Updates>
            <h3>Customer Review</h3>
        </div>
    );
};

export default RightSide;