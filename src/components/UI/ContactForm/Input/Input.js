import React from 'react';
import classes from './Input.module.css';

const Input = (props) => {
    let input = null;

    switch (props.inputType) {
        case 'input':
            input = (
                <input
                    {...props.config}
                    onChange={props.changed}
                />
            );
            break;
        case 'select':
            input = (
                <select onChange={props.changed} defaultValue={props.value}>
                    {props.config.map(option => <option key={option.value} value={option.value}>{option.displayValue}</option>)}
                </select>
            );
            break;
        default:
            input = (
                <input
                    {...props.config}
                    onChange={props.changed}
                />
            );
            break;

    }
    return (
        <div className={classes.Input}>
            <label className={classes.Label}>{props.displayName}</label>
            {input}
        </div>
    );
};

export default Input;