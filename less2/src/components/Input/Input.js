import React from 'react';
import classes from "./Input.module.scss";

const Input = ({type = 'text', placeholder, action}) => {
    return (
        <div className={classes.input}>
            <input type={type} placeholder={placeholder} onChange={action}/>
        </div>

    );
};

export default Input;