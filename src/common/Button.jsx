import React from 'react';
import { Link } from 'react-router-dom';

const Button = (props) => {
    return (
        <Link to={`${props.btnLink}`} className={`btn ${props.btnClass}`}>
            {props.btnText}
            <span className={`icon ${props.spanClass}`}> <i className={`${props.iconClass}`}></i> </span> 
        </Link>
    );
};

export default Button;