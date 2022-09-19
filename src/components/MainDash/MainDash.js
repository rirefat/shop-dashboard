import { Card } from '@mui/material';
import React from 'react';
import Cards from '../Cards/Cards';
import './MainDash.css';

const MainDash = () => {
    return (
        <div className='mainDash'>
            <h1 className="dashboard-heading">Your Dashboard</h1>
            <Cards></Cards>
        </div>
    );
};

export default MainDash;