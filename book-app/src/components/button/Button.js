import React from 'react';
import classes from "./Button.module.scss";

const Button = ({name, action, color}) => {
    return (
        <button className={`${classes.btn} ${classes[color]}`} onClick={action}>{name}</button>
    );
};

export default Button;