import React, { useState } from 'react';
import './Card.css';
import { AnimateSharedLayout } from 'framer-motion';

const Card = (props) => {
    const {title, color, barValue, value, png, series}=props.card;
    // console.log(title, color, barValue, value, png, series)
    const [expanded, setExpanded]=useState(false);
    return (
        <AnimateSharedLayout>
            
        </AnimateSharedLayout>
    );
};

export default Card;