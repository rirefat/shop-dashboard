import React from 'react';
import './CompactCard.css';

const CompactCard = (props) => {
    const {title, color, barValue, value, series}=props.param.card;
    const {Png}=props.param.card;
    console.log(Png);
    return (
        <div className='CompactCard'>
            <div className="radialBar">
                chart
            </div>
            <div className="detail">
                {/* <Png/> */}
            </div>
        </div>
    );
};

export default CompactCard;