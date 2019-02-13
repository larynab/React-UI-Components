import React from 'react';
import './Button.css';

const ActionButton = props => {
    return (
        <div className="action-button">
        <h1>{props.buttonA.clear}</h1>
        <h1>{props.buttonA.zero}</h1>
        </div>
    );
};

export default ActionButton;