import React from 'react';
import classes from './BuildControls.module.css';
import { controls } from '../constants';
import BuildControl from './BuildControl/BuildControl';

const buildControls = (props) => {
    return (
        <div className={classes.BuildControls}>
            <div>Total Price: <strong>{props.totalPrice.toFixed(2)} $</strong></div>
            {controls.map(control => <BuildControl
                addedIngredient={props.addedIngredient}
                removedIngredient={props.removedIngredient}
                key={control.label}
                label={control.label}
                type={control.type}/>)}
        </div>
    );
};

export default buildControls;
