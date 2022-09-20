import React, { useState } from 'react';
import './Card.css';
import { motion, AnimateSharedLayout } from 'framer-motion';
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { UilTimes } from "@iconscout/react-unicons";
import Chart from "react-apexcharts";
// import ExpandedCard from '../ExpandedCard/ExpandedCard';
// import CompactCard from '../CompactCard/CompactCard';

const Card = (props) => {
    // const {title, color, barValue, value, png, series}=props.card;
    // console.log(png)
    const [expanded, setExpanded]=useState(false);
    return (
        <AnimateSharedLayout>
            {
                expanded?
                (<ExpandedCard param={props} setExpanded={()=>setExpanded(false)}/>):
                (<CompactCard param={props} setExpanded={()=>setExpanded(true)}/>)
            }
        </AnimateSharedLayout>
    );
};

// Compact Card
const CompactCard = ({param, setExpanded}) => {
    const Png=param.card.png;
    // console.log(Png);
    return (
        <motion.div className='CompactCard' style={{
            background: param.card.color.backGround,
            boxShadow: param.card.color.boxShadow,
          }}
          layoutId="expandableCard"
          onClick={setExpanded}
          >
            <div className="radialBar">
                <CircularProgressbar value={param.card.barValue} text={`${param.card.barValue}%`}></CircularProgressbar>
                <span>{param.card.title}</span>
            </div>
            <div className="detail">
                <Png/>
                <span>${param.card.value}</span>
                <span>Last 24 Hours</span>
            </div>
        </motion.div>
    );
};

// Expanded Card
const ExpandedCard =({param, setExpanded})=>{
    const data = {
        options: {
          chart: {
            type: "area",
            height: "auto",
          },
    
          dropShadow: {
            enabled: false,
            enabledOnSeries: undefined,
            top: 0,
            left: 0,
            blur: 3,
            color: "#000",
            opacity: 0.35,
          },
    
          fill: {
            colors: ["#fff"],
            type: "gradient",
          },
          dataLabels: {
            enabled: false,
          },
          stroke: {
            curve: "smooth",
            colors: ["white"],
          },
          tooltip: {
            x: {
              format: "dd/MM/yy HH:mm",
            },
          },
          grid: {
            show: true,
          },
          xaxis: {
            type: "datetime",
            categories: [
              "2018-09-19T00:00:00.000Z",
              "2018-09-19T01:30:00.000Z",
              "2018-09-19T02:30:00.000Z",
              "2018-09-19T03:30:00.000Z",
              "2018-09-19T04:30:00.000Z",
              "2018-09-19T05:30:00.000Z",
              "2018-09-19T06:30:00.000Z",
            ],
          },
        },
    };

    return(
        <motion.div className="ExpandedCard" 
        style={{
            background: param.card.color.backGround,
            boxShadow: param.card.color.boxShadow,
          }}
          layoutId="expandableCard"
        >
            <div className='close-card'>
                <UilTimes onClick={setExpanded}></UilTimes>
            </div>
            <span>{param.card.title}</span>
            <div className="chartContainer">
                <Chart series={param.card.series} type='area' options={data.options}></Chart>
            </div>
            <span>Last 24 Hours</span>
        </motion.div>
    )
};

export default Card;