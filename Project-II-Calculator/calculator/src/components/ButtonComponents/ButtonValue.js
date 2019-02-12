import React from 'react';

import CalculatorDisplay from "../DisplayComponents/CalculatorDisplay";

const ClearButton = {
    clear: "clear"
};
const OneButton = {
    one: 1
};
const TwoButton = {
    two: 2
};
const ThreeButton = {
    three: 3
};
const FourButton = {
    four: 4
};
const FiveButton = {
    five: 5
};
const SixButton = {
    six: 6
};
const SevenButton = {
    seven: 7
};
const EightButton = {
    eight: 8
};
const NineButton = {
    nine: 9
};
const ZeroButton = {
    zero: 0
};

function ButtonValue() {
    
    return (
        <div className="button-value">
            <CalculatorDisplay buttonA={[ClearButton]}/>
            <CalculatorDisplay button={[OneButton]}/>
            <CalculatorDisplay button={[TwoButton]}/>
            <CalculatorDisplay button={[ThreeButton]}/>
            <CalculatorDisplay button={[FourButton]}/>
            <CalculatorDisplay button={[FiveButton]}/>
            <CalculatorDisplay button={[SixButton]}/>
            <CalculatorDisplay button={[SevenButton]}/>
            <CalculatorDisplay button={[EightButton]}/>
            <CalculatorDisplay button={[NineButton]}/>
            <CalculatorDisplay buttonA={[ZeroButton]}/>
        </div>
    );    
};

export default ButtonValue;

  //, OneButton, TwoButton, ThreeButton, FourButton, FiveButton, SixButton, SevenButton, EightButton, 
            //NineButton, ZeroButton ]} 
