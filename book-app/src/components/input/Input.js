import React from 'react';
import classes from "./Input.module.scss";
const Input = ({value,placeholder,action,text='text'}) => {
    return (
            <input className={classes.text} type={text} placeholder={placeholder} onChange={action} value={value}/>
    );
};

export default Input;