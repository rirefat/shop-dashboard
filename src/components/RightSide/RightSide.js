import React from 'react';
import CustomerReview from '../CustomerReview/CustomerReview';
import Updates from '../Updates/Updates';
import './RightSide.css';

const RightSide = () => {
    return (
        <div className='RightSide'>
            <h3>Updates</h3>
            <Updates></Updates>
            <h3>Customer Review</h3>
            <CustomerReview></CustomerReview>
        </div>
    );
};

export default RightSide;