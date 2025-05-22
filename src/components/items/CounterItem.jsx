import React, { useState } from 'react';
import CountUp from 'react-countup';

const CounterItem = ({ count }) => {
    
    return (
        <>
            <div className="counter-item position-relative">
                <h2 className="counter-item__number counter"> 
                    <CountUp end={parseInt(count.number)} duration={6} delay={0.2} />
                </h2>
                <span className="counter-item__text"> {count.text}</span>
            </div>   
        </>
    );
};

export default CounterItem;