import React, { useState } from 'react';
import './Card.css';
import { AnimateSharedLayout } from 'framer-motion';
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
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
    const Png=param.card.png;
    console.log(Png);
    return (
        <div className='CompactCard' style={{
            background: param.card.color.backGround,
            boxShadow: param.card.color.boxShadow,
          }}>
            <div className="radialBar">
                <CircularProgressbar value={param.card.barValue} text={`${param.card.barValue}%`}></CircularProgressbar>
            </div>
            <div className="detail">
                <Png/>
                <span>${param.card.barValue}</span>
                <span>Last 24 Hours</span>
            </div>
        </div>
    );
};

export default Card;