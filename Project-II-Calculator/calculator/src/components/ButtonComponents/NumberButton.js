import React from 'react';
import './Button.css';

const NumberButton = props => {
    return (
        <div className="number-button">
        <h1>{props.button.one}</h1>
        <h1>{props.button.two}</h1>
        <h1>{props.button.three}</h1>
        <h1>{props.button.four}</h1>
        <h1>{props.button.five}</h1>
        <h1>{props.button.six}</h1>
        <h1>{props.button.seven}</h1>
        <h1>{props.button.eight}</h1>
        <h1>{props.button.nine}</h1>
        </div>
    );
};

export default NumberButton;