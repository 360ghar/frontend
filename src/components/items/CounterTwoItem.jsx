import React from 'react';
import CountUp from 'react-countup';

const CounterTwoItem = ({ counter }) => {
    const {number, text} = counter; 
    
    return (
        <>
             <div className="counter-two-item">
                <h2 className="counter-two-item__number counterNumber">
                    <CountUp end={parseInt(number)} duration={6} delay={0.2} />
                </h2>
                <span className="counter-two-item__text fw-light font-18">{text}</span>
            </div>   
        </>
    );
};

export default CounterTwoItem;