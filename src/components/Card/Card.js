import React, { useState } from 'react';
import './Card.css';
import { AnimateSharedLayout } from 'framer-motion';
// import ExpandedCard from '../ExpandedCard/ExpandedCard';
// import CompactCard from '../CompactCard/CompactCard';

const Card = (props) => {
    // const {title, color, barValue, value, png, series}=props.card;
    // console.log(png)
    const [expanded, setExpanded]=useState(false);
    return (
        <AnimateSharedLayout>
            {
                expanded?("ExpandedCard"):(<CompactCard param={props} set/>)
            }
        </AnimateSharedLayout>
    );
};

// Compact Card
const CompactCard = ({param}) => {
    const Png = param.png;
    // console.log(Png);
    return (
        <div className='CompactCard'>
            <div className="radialBar">
                chart
            </div>
            <div className="detail">
                <Png/>
                <span>${param.value}</span>
                <span>Last 24 Hours</span>
            </div>
        </div>
    );
};

export default Card;