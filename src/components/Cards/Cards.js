import React from 'react';
import { cardsData } from '../../Data/Data';
import Card from '../Card/Card';
import './Cards.css';

const Cards = () => {
    return (
        <div className='Cards'>
            {
             cardsData.map(
                (card,id)=>{
                    return(
                        <div className="parentContainer">
                            <Card card={card}></Card>
                        </div>
                    )
                }
             )   
            }
        </div>
    );
};

export default Cards;