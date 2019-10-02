import React from 'react';
import classes from './NavigationItems.module.css';
import NavigationItem from './NavigationItem/NavigationItem';

const navigationItems = () => (
    <ul className={classes.NavigationItems}>
        <NavigationItem link="/">Burger Builder</NavigationItem>
        <NavigationItem link="/my-orders">Orders</NavigationItem>
        <NavigationItem link="/auth">Login / Signup</NavigationItem>
    </ul>
);

export default navigationItems;
