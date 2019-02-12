import React from 'react';
import './Display.css';

import ActionButton from "../ButtonComponents/ActionButton";
import NumberButton from '../ButtonComponents/NumberButton';

const CalculatorDisplay  = props => {
    return (
        <div className="calculator-display">
            <ActionButton buttonA = {props.buttonA} />
            <NumberButton button = {props.button} />
        </div>
    );
};

export default CalculatorDisplay;